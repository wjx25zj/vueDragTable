import { BaseThead } from '../thead/BaseThead';
import { TheadContainer } from '../container/TheadContainer';
import { BaseTbody } from '../tbody/BaseTbody';
import * as _ from '../../utils/index';
import { DragStartDataInterface } from '../../interface/DragStartData';
import { IndexContainer } from '../container/IndexContainer';
import { BaseCell } from '../cell/BaseCell';
import { Subject } from '../../communication/Subject';
import { DragTransferDataInterface } from '../../interface/DragTransferData';
import { CellContainer } from '../container/CellContainer';
import { IndexThead } from '../thead/IndexThead';
import { TbodyContainer } from '../container/TbodyContainer';
import { DefaultConfig } from '../../config/DefaultConfig';
import { BaseTableConfig } from '../../config/BaseTableConfig';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
import { PositionInterface } from '../../interface/PositionInterface';
import { ProcessTheadInterface, ParamTheadAdd, ParamTheadMove, ParamTheadAddReplace, ParamTheadMoveReplace, ParamTheadDelete } from '../../interface/ProcessTheadInterface';
import { TableContainer } from '../container/TableContainer';
import { TheadContainerInterface } from '../../interface/viewModule/container/TheadContainer';
import { AddDataPostionInterface } from '../../interface/viewModule/tbody/BaseTbody';
import { TbodyContainerInterface } from '../../interface/viewModule/container/TbodyContainer';
import { TableContainerInterface } from 'packages/drag-table2.0/interface/viewModule/container/TableContainer';
export class BaseTable extends TableContainer {
    public position: PositionInterface = {
        table: 0,
        colNum: 0,
        rowNum: 0,
    }; // 位置
    // 表格的总体样式
    public style = {
        scrollTop: 0, // 滚动条 用于主表与上侧固定表头滚动条联动操作
        scrollLeft: 0, // 滚动条 用于主表与左侧固定表头滚动条联动操作
        mainTable: {

        },
        topTable: {

        },
        leftTable: {

        }

    };
    // public tableSubject: Subject = new Subject(); //  表格事件
    public tableName: string = ''; // 表表格名称名
    public config: BaseTableConfig; // 表格的总体设置
    public showType: number = 0; // 表名显示类型
    public colNumber: IndexContainer[] = new Array(); //  列标识：最上面'A', 'B', 'C', 'D'.....
    public rowNumber: IndexContainer[] = new Array(); // 行标识: 最左边面1, 2, 3, 4, 5.....
    public tableHeadTop: TheadContainer[] = new Array(); // 用于显示的上侧表头 直接用于上表头的渲染
    public tableHeadLeft: TheadContainer[] = new Array(); // 用于显示的左侧表头 直接用于左表头的渲染
    public tableBody: TbodyContainer[][] = new Array(); // 用于显示的表内容

    private tableHeadTopLeft: TheadContainer = new TheadContainer({ side1: 1, side2: 1, $rootTable: this }); // 左上角空白单元格长宽
    private theadTopEntity: BaseThead; // 上册表头实体
    private theadLeftEntity: BaseThead; // 左册表头实体
    private theadTopIndexEntity: IndexThead; // 上册列标识实体
    private theadLeftIndexEntity: IndexThead; // 左册行标识实体
    private tbodyEntity: BaseTbody; // 表内容实体
    private keyDownSet: Set<string> = new Set(); // 键盘按键按下状态的Set


    constructor(param: TableContainerInterface) {
        super(param
            // {
            //     id,
            //     $selectBoxId: (config && config.tableGroupId) ? config.tableGroupId : id,
            //     $defConfigId: (config && config.tableGroupId) ? config.tableGroupId : id,
            //     $positionManagerId: (config && config.tableGroupId) ? config.tableGroupId : id,
            // }
        );
        this.$positionManager.add(this);
        this.setConfig(this.$defaultConfig.table);
        this.initial();
    }

    public initial(): void {
        const $defConfigId = this.$defConfigId;
        const $positionManagerId = this.$positionManagerId;
        this.theadTopEntity = new BaseThead({ id: 'topThead', type: 'top', $defConfigId, $positionManagerId, $rootTable: this, side1: 0, side2: 0 });
        this.theadLeftEntity = new BaseThead({ id: 'leftThead', type: 'left', $defConfigId, $positionManagerId, $rootTable: this, side1: 0, side2: 0 });
        this.theadTopIndexEntity = new IndexThead({ id: 'topIndexThead', type: 'top-index', $defConfigId, $positionManagerId, $rootTable: this, side1: 0, side2: 0 });
        this.theadLeftIndexEntity = new IndexThead({ id: 'leftIndexThead', type: 'left-index', $defConfigId, $positionManagerId, $rootTable: this, side1: 0, side2: 0 });
        this.tbodyEntity = new BaseTbody({ id: 'baseTbody', type: 'tbody', $defConfigId, $positionManagerId, $rootTable: this, side1: 0, side2: 0 });
        const topLeftPositon: PositionInterface = {
            table: this.position.table,
            colStr: 'A',
            rowStr: 1,
        };
        this.tableHeadTopLeft.position = topLeftPositon;
        this.initSubject(this);
    }

    /**
     * onDestroy
     */
    public onDestroy() {
        const self: BaseTable = this;
        self.theadTopEntity.theadSubject.unsubscribe(self.onReceiveMsg, self);
        self.theadLeftEntity.theadSubject.subscribe(self.onReceiveMsg, self);
        self.tbodyEntity.tbodySubject.subscribe(self.onReceiveMsg, self);
    }

    /**
     * 初始化订阅事件 订阅表头变化
     *
     * @param {*} self
     * @memberof BaseTable
     */
    public initSubject(self: BaseTable): void {
        self = self || this;
        if (self.theadTopEntity) {
            self.theadTopEntity.theadSubject.subscribe(self.onReceiveMsg, self);
        }
        if (self.theadLeftEntity) {
            self.theadLeftEntity.theadSubject.subscribe(self.onReceiveMsg, self);
        }
        if (self.tbodyEntity) {
            self.tbodyEntity.tbodySubject.subscribe(self.onReceiveMsg, self);
        }
    }




    /**
     * setConfig
     */
    public setConfig(tableConfig: BaseTableConfig): void {
        super.setConfig(tableConfig);
        const style = {
            // 主表样式
            mainTable: {
                overflow: this.config.isOverflow ? 'auto' : 'visible',
                maxWidth: !this.config.isOverflow ? 'auto' : this.config.maxWidth,
                maxHeight: !this.config.isOverflow ? 'auto' : this.config.maxHeight,
            },
            leftTable: {
                overflow: this.config.isOverflow ? 'hidden' : 'visible',
                height: !this.config.isOverflow ? 'auto' : 'calc(' + this.config.maxHeight + ' - 17px)',
            },
            // 上侧表头
            topTable: {
                overflow: this.config.isOverflow ? 'hidden' : 'visible',
                maxWidth: !this.config.isOverflow ? 'auto' : 'calc(' + this.config.maxWidth + ' - 17px)',
            },
        };
        _.objectSet(this.style, style, 'union');
    }

    /**
     * setConfig
     */
    public setDefaultConfig(defConfig: DefaultConfig): void {
        super.setDefaultConfig(defConfig);
        this.setConfig(this.$defaultConfig.table);
        this.theadTopEntity.setConfig(this.$defaultConfig.topThead);
        this.theadLeftEntity.setConfig(this.$defaultConfig.leftThead);
        this.theadTopIndexEntity.setConfig(this.$defaultConfig.topIndexThead);
        this.theadLeftIndexEntity.setConfig(this.$defaultConfig.leftIndexThead);
        this.tbodyEntity.setConfig(this.$defaultConfig.baseTbody);
        this.render();
    }

    /**
     * initTable 初始化表格
     *
     * @param {number} width
     * @memberof BaseTable
     */
    public initTable(width: number, height?: number): void {
        for (let colIndex = 0; colIndex < width; colIndex++) {
            this.theadTopIndexEntity.fastAddChild();
            this.theadAdd({
                type: 'top',
                targetParentPosition: [],
            });
        }
        height = height === undefined ? 1 : height;
        for (let i = 0; i < height; i++) {
            this.addOneRow();
        }
        this.renderAll();
        // this.render();
    }
    /**
     * addOneRow 添加一行数据
     *
     * @param {*} [rowData]
     * @memberof BaseTable
     */
    public addOneRow(rowData?: object | any[] | CellContainer[], param?: AddDataPostionInterface): string {
        let id = null;
        let needAddThead = false;
        let paramTheadAdd: ParamTheadAdd;

        const lastSelectContainer: TheadContainer = this.$selectBoxEntity.currentCotanier as TheadContainer;
        if (param) {
            paramTheadAdd = {
                type: 'left',
                targetParentPosition: param.targetParentPosition,
                insertIndex: param.insertIndex,
                sourceContainerData: param.sourceContainerData,
            };
            needAddThead = true;
        } else if (this.tableHeadLeft.length !== 0) {
            needAddThead = true;
        }

        if (lastSelectContainer) {
            let lastSCParam: any;
            if (/^left$/.test(lastSelectContainer.type)) {
                lastSCParam = {
                    type: 'left',
                    targetParentPosition: _.dropRight(lastSelectContainer.theadPosition),
                    insertIndex: _.last(lastSelectContainer.theadPosition) + 1
                };
            } else {
                const leftIndexContainer = this.getLeftIndexContainer(lastSelectContainer.position) as IndexContainer;
                if (leftIndexContainer && leftIndexContainer.$theadContainer) {
                    const leftContainer = leftIndexContainer.$theadContainer;
                    lastSCParam = {
                        type: 'left',
                        targetParentPosition: _.dropRight(leftContainer.theadPosition),
                        insertIndex: _.last(leftContainer.theadPosition) + 1
                    };
                }
            }
            paramTheadAdd = _.objectSet(lastSCParam, paramTheadAdd, 'union');

        } else {
            const defParam = {
                type: 'left',
                targetParentPosition: [],
            };
            paramTheadAdd = _.objectSet(defParam, paramTheadAdd, 'union');
        }

        // addTbody
        if (needAddThead) {
            id = this.theadAdd(paramTheadAdd);
        }

        const container = this.theadLeftIndexEntity.createContain();
        this.theadLeftIndexEntity.addChild(container);
        id = this.tbodyEntity.setRowData(id, rowData || {});
        container.id = id;
        this.renderAll();
        return id;
    }

    /**
     * addOneCol 添加一列数据
     *
     * @param {*} [rowData]
     * @memberof BaseTable
     */
    public addOneCol(colData?: object | any[] | CellContainer[], param?: AddDataPostionInterface): string {
        let id = null;
        let needAddThead = false;
        let paramTheadAdd: ParamTheadAdd;
        const lastSelectContainer: TheadContainer = this.$selectBoxEntity.currentCotanier as TheadContainer;

        if (param) {
            paramTheadAdd = {
                type: 'top',
                targetParentPosition: param.targetParentPosition,
                insertIndex: param.insertIndex,
                sourceContainerData: param.sourceContainerData,
            };
            needAddThead = true;
        } else if (this.tableHeadTop.length !== 0) {
            needAddThead = true;
        }


        if (lastSelectContainer) {
            let lastSCParam: any;
            if (/^top$/.test(lastSelectContainer.type)) {
                lastSCParam = {
                    type: 'top',
                    targetParentPosition: _.dropRight(lastSelectContainer.theadPosition),
                    insertIndex: _.last(lastSelectContainer.theadPosition) + 1
                };
            } else if (/^tbody$/.test(lastSelectContainer.type)) {
                const topIndexContainer = this.getTopIndexContainer(lastSelectContainer.position) as IndexContainer;
                if (topIndexContainer && topIndexContainer.$theadContainer) {
                    const topContainer = topIndexContainer.$theadContainer;
                    lastSCParam = {
                        type: 'top',
                        targetParentPosition: _.dropRight(topContainer.theadPosition),
                        insertIndex: _.last(topContainer.theadPosition) + 1
                    };
                }
            }
            paramTheadAdd = _.objectSet(lastSCParam, paramTheadAdd, 'union');
        } else {
            const defParam = {
                type: 'top',
                targetParentPosition: [],
            };
            paramTheadAdd = _.objectSet(defParam, paramTheadAdd, 'union');
        }

        if (needAddThead) {
            id = this.theadAdd(paramTheadAdd);
        }

        const container = this.theadTopIndexEntity.createContain();
        id = this.tbodyEntity.setColData(id, colData || {});
        container.id = id;
        this.theadTopIndexEntity.addChild(container);
        this.renderAll();
        return id;
    }

    /**
     * setTBodyData
     */
    public setTbodyData(data: object | Array<TbodyContainerInterface[] | object>) {
        try {
            if (Array.isArray(data)) {
                data.forEach((rowData: object | any[], i: number) => {
                    const leftId = this.tbodyEntity.leftIndexList[i].id;
                    this.tbodyEntity.setRowData(leftId, rowData);
                });
            } else if (typeof data === 'object') {
                for (const leftId in data) {
                    if (data.hasOwnProperty(leftId)) {
                        this.tbodyEntity.setRowData(leftId, data[leftId]);
                    }
                }
            }
        } catch (error) {
            console.error(error);
            console.error('输入数据格式有误');
        }
        this.renderAll();
    }

    /**
     * 表头添加并替换
     *
     * @param {ParamTheadAddReplace} param
     * @memberof BaseTable
     */
    public theadAddPlace(param: ParamTheadAddReplace, sendMsg?: boolean): void {
        const targetContainerPosition = param.targetContainerPosition;
        const targetThead: BaseThead = this.getEntity(param.type);
        const targetIndexPosition = _.last(targetContainerPosition);
        const targetParentPosition = _.dropRight(targetContainerPosition);
        const targetParentContainer = targetThead.getContainerByTheadPosition(targetParentPosition);
        if (param.sourceContainerData) {
            const tmpContainer = targetThead.createContain(param.sourceContainerData);
            targetParentContainer.replaceChild(tmpContainer, targetIndexPosition, param.withChildren);
        }
        if (sendMsg !== false) {
            this.onReceiveMsg({
                ev_type: 'theadAddPlace',
                event: null,
                data: {
                    objectName: 'ParamTheadAddReplace',
                    object: param
                }
            });
        }
    }

    /**
     * 表头添加
     *
     * @param {ParamTheadAdd} param
     * @memberof BaseTable
     */
    public theadAdd(param: ParamTheadAdd, sendMsg?: boolean): any {
        let id = null;
        try {
            if (!param.sourceContainerData) {
                param.sourceContainerData = {
                    cell: {
                        value: '',
                    },
                };
            }
            const targetThead: BaseThead = this.getEntity(param.type);
            const targetParentContainer = targetThead.getContainerByTheadPosition(param.targetParentPosition) as TheadContainer;
            const tmpContainer = targetThead.createContain(param.sourceContainerData);
            id = targetParentContainer.addChild(tmpContainer, param.insertIndex);
            targetThead.resize();
            if (sendMsg !== false) {
                this.onReceiveMsg({
                    ev_type: 'theadAdd',
                    event: null,
                    data: {
                        objectName: 'ParamTheadAdd',
                        object: param
                    }
                });
            }
        } catch (error) {
            console.error(error);
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'error',
                    object: error
                }
            });
        }
        return id;
    }

    /**
     * 表头移动
     *
     * @param {ParamTheadMove} param
     * @memberof BaseTable
     */
    public theadMove(param: ParamTheadMove, sendMsg?: boolean): void {

        try {
            const souceIndexPosition = _.last(param.sourceContainerData.theadPosition);
            const souceParentPosition = _.dropRight(param.sourceContainerData.theadPosition);

            if (param.sourceContainerData) {
                const targetThead: BaseThead = this.getEntity(param.type);
                const targetParentContainer = targetThead.getContainerByTheadPosition(param.targetParentPosition) as TheadContainer;

                const sourceThead: BaseThead = this.getEntity(param.sourceContainerData.type);
                const sourceParentContainer = sourceThead.getContainerByTheadPosition(souceParentPosition) as TheadContainer;

                // const tmpContainer = sourceThead.createContain(param.sourceContainerData);
                const sourceContainer = sourceThead.getContainerByTheadPosition(param.sourceContainerData.theadPosition);
                if (JSON.stringify(souceParentPosition) === JSON.stringify(param.targetParentPosition) && souceIndexPosition > param.insertIndex) {
                    // 如果目标容器和源容器在同一个父级容器下，且源容器index小于目标容器index 则先删除源容器 再添加源容器的拷贝
                    sourceParentContainer.deletChild(souceIndexPosition, 1, param.withChildren);
                    targetParentContainer.addChild(sourceContainer, param.insertIndex);
                } else {
                    // 反之先添加源容器的拷贝 再删除除源容器
                    targetParentContainer.addChild(sourceContainer, param.insertIndex);
                    sourceParentContainer.deletChild(souceIndexPosition, 1, param.withChildren);
                }

                if (!param.withChildren) {
                    sourceContainer.children = new Array();
                }
                targetThead.resize();
                sourceThead.resize();
            }
            if (sendMsg !== false) {
                this.onReceiveMsg({
                    ev_type: 'theadMove',
                    event: null,
                    data: {
                        objectName: 'ParamTheadMove',
                        object: param
                    }
                });
            }

        } catch (error) {
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'theadMove',
                    object: error
                }
            });
        }

    }

    /**
     * 表头删除
     *
     * @param {ParamTheadDelete} param
     * @memberof BaseTable
     */
    public theadDelete(param?: ParamTheadDelete, sendMsg?: boolean): void {
        try {
            let targetContainerPosition: number[];
            let targetIndexPosition: number;
            let targetParentPosition: number[];
            let theadType: any;
            let withChildren: boolean = false;

            let canDel = false;
            const lastSelectContainer: TheadContainer = this.$selectBoxEntity.currentCotanier as TheadContainer;


            if (param) {
                targetIndexPosition = _.last(param.targetContainerPosition);
                targetParentPosition = _.dropRight(param.targetContainerPosition);
                targetContainerPosition = param.targetContainerPosition;
                theadType = param.type;
                withChildren = param.withChildren;
                canDel = true;
            }

            if (lastSelectContainer) {
                targetIndexPosition = targetIndexPosition !== undefined ? targetIndexPosition : _.last(lastSelectContainer.theadPosition);
                targetParentPosition = targetParentPosition !== undefined ? targetParentPosition : _.dropRight(lastSelectContainer.theadPosition);
                targetContainerPosition = targetContainerPosition !== undefined ? targetContainerPosition : lastSelectContainer.theadPosition;
                theadType = theadType || lastSelectContainer.type;
                canDel = true;
            }

            // addTbody
            if (canDel) {
                const targetThead: BaseThead = this.getEntity(theadType);
                const deleteContainer: TheadContainer = targetThead.getContainerByTheadPosition(targetContainerPosition);
                const targetParentContainer = targetThead.getContainerByTheadPosition(targetParentPosition) as TheadContainer;
                targetParentContainer.deletChild(targetIndexPosition, 1, withChildren);
                targetThead.resize();
                if (sendMsg !== false) {
                    this.onReceiveMsg({
                        ev_type: 'theadDelete',
                        event: null,
                        data: {
                            objectName: 'ParamTheadDelete',
                            object: param
                        }
                    });
                }
            } else {
                console.error('theadDelete 未传入参数');
            }
        } catch (error) {
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'theadDelete',
                    object: error
                }
            });
        }

    }

    /**
     * 表头移动并覆盖
     *
     * @param {ParamTheadMoveReplace} param
     * @memberof BaseTable
     */
    public theadMoveReplace(param: ParamTheadMoveReplace, sendMsg?: boolean): void {
        try {
            const targetContainerPosition = param.targetContainerPosition;
            const targetIndexPosition = _.last(targetContainerPosition);
            const targetParentPosition = _.dropRight(targetContainerPosition);
            const targetThead: BaseThead = this.getEntity(param.type);
            const targetParentContainer = targetThead.getContainerByTheadPosition(targetParentPosition) as TheadContainer;

            const souceIndexPosition = _.last(param.sourceContainerData.theadPosition);
            const souceParentPosition = _.dropRight(param.sourceContainerData.theadPosition);
            const sourceThead: BaseThead = this.getEntity(param.sourceContainerData.type);
            const sourceParentContainer = sourceThead.getContainerByTheadPosition(souceParentPosition) as TheadContainer;

            if (param.sourceContainerData) {
                if (!param.withChildren) {
                    param.sourceContainerData.children = new Array();
                }
                const tmpContainer = targetThead.createContain(param.sourceContainerData);
                targetParentContainer.replaceChild(tmpContainer, targetIndexPosition, false);
                sourceParentContainer.deletChild(souceIndexPosition, 1, param.withChildren);
                targetThead.resize();
                if (sourceThead !== targetThead) {
                    sourceThead.resize();
                }
                if (sendMsg !== false) {
                    this.onReceiveMsg({
                        ev_type: 'theadMoveReplace',
                        event: null,
                        data: {
                            objectName: 'ParamTheadMoveReplace',
                            object: param
                        }
                    });
                }
            }
        } catch (error) {
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'theadMoveReplace',
                    object: error
                }
            });
        }

    }




    /**
     * addSum
     */
    public addSum(newParentContainData?: TheadContainerInterface, param?: AddDataPostionInterface) {
        const mustContainerData: TheadContainerInterface = {
            tbodyConfig: {
                container: {
                    cell: {
                        displayClass: {
                            normal: {
                                displayType: 'text',
                            },
                            dbclick: {
                                displayType: 'text',
                            }
                        }
                    }
                }
            },
            id: 'sum' + '_' + _.guid(),
            canSum: true,
        };
        const addParam: any = {
            sourceContainerData: {
                cell: {
                    value: '合计',
                }
            }
        };
        _.objectSet(addParam.sourceContainerData, newParentContainData, 'union');
        if (param) {
            _.objectSet(addParam, param, 'union');
        }
        const lastSelectContainer: TheadContainer = this.$selectBoxEntity.currentCotanier as TheadContainer;
        if ((lastSelectContainer && /^top$|^left$/.test(lastSelectContainer.type))) {
            const lSCParam = {
                type: lastSelectContainer.type,
                targetParentPosition: _.dropRight(lastSelectContainer.theadPosition),
                sourceContainerData: addParam.sourceContainerData,
            };
            _.objectSet(addParam, lSCParam, 'union');
        }
        _.objectSet(addParam.sourceContainerData, mustContainerData, 'union');
        this.theadAdd(addParam);
        this.renderAll();
    }


    /**
     *
     *
     * @param {CellContainer} contianer
     * @param {string} delType  'row' | 'col'
     * @memberof BaseTable
     */
    public delOneRowCol(delType: 'row' | 'col', container?: CellContainer): void {

        const lastSelectContainer: TheadContainer = this.$selectBoxEntity.currentCotanier as TheadContainer;
        container = container || lastSelectContainer;
        const delContainerWithParentWhoHasNoChild = (delContainer: TheadContainer) => {
            const Entity: BaseThead = this.getEntity(delContainer.type);
            const parentContainer: TheadContainer = Entity.getContainerByTheadPosition(_.dropRight(delContainer.theadPosition));
            this.theadDelete({
                type: delContainer.type,
                targetContainerPosition: delContainer.theadPosition,
                withChildren: true
            });
            if (parentContainer.children.length === 0 && !parentContainer.isRootParent) {
                delContainerWithParentWhoHasNoChild(parentContainer);
            }
        };
        let needDelTheadContainer: TheadContainer;
        const type = delType === 'row' ? 'left' : 'top';
        if (container.type === 'tbody') {
            const tbodyContainer: TbodyContainer = this.getContainer(container.position) as TbodyContainer;
            // 删除index
            const delIndex = type === 'left' ? tbodyContainer.position.rowNum : tbodyContainer.position.colNum;
            const IndexEntity: IndexThead = this.getEntity(type + '-index');
            const indexContainer: IndexContainer = IndexEntity.getContainerByTheadPosition([delIndex]);
            needDelTheadContainer = indexContainer.$theadContainer;
            if (!needDelTheadContainer) {
                this.theadDelete({
                    type: (type + '-index') as any,
                    targetContainerPosition: indexContainer.theadPosition
                });
            }
        } else {
            needDelTheadContainer = container as any;
            const position = container.position;
            const colObj = this.$positionManager.getColObj(position);
            for (const rowStr in colObj) {
                if (colObj.hasOwnProperty(rowStr)) {
                    // const parentPosition = _.dropRight(delContainer.theadPosition);
                    // this.processThead(type, 'delete', [], undefined, position.colNum);
                }
            }
            const topIndexContainer = needDelTheadContainer.getTopIndexContainer(needDelTheadContainer.position) as IndexContainer;
            const leftIndexContainer = needDelTheadContainer.getLeftIndexContainer(needDelTheadContainer.position) as IndexContainer;
            if (topIndexContainer && delType === 'col') {
                this.theadDelete({
                    type: ('top-index') as any,
                    targetContainerPosition: topIndexContainer.theadPosition
                });
            }
            if (leftIndexContainer && delType === 'row') {
                this.theadDelete({
                    type: ('left-index') as any,
                    targetContainerPosition: leftIndexContainer.theadPosition
                });
            }
        }
        if (needDelTheadContainer) {
            delContainerWithParentWhoHasNoChild(needDelTheadContainer);
        }

        this.renderAll();
    }


    /**
     * 获得表头实体
     *
     * @protected
     * @param {string} type
     * @returns
     *
     */
    public getEntity(type: 'left' | 'top' | 'left-index' | 'top-index' | 'tbody' | string): any {
        switch (type) {
            case 'top': return this.theadTopEntity;
            case 'left': return this.theadLeftEntity;
            case 'top-index': return this.theadTopIndexEntity;
            case 'left-index': return this.theadLeftIndexEntity;
            case 'tbody': return this.tbodyEntity; // 双击编辑表格时 为了统一失去焦点后的函数
            default: console.log('getEntity-default'); return this.theadTopEntity;
        }
    }


    /**
     * getTbodyData 根据outPutType输出tbody数据
     *
     * @param {number} [outPutType]
     * @returns
     * @memberof BaseTable
     */
    public getTbodyData(outPutType?: number): any {
        let res = {};
        switch (outPutType) {
            case 0:
                res = this.tbodyEntity.output();
                break;
            default:
                res = this.tbodyEntity.output();
        }
        // console.log(res);
        return res;
    }


    /**
     * 渲染表格渲染
     *
     * @memberof BaseTable
     */
    public render() {
        this.resizeTable();
        this.indexTheadRender();
        const theadTopHeight = this.theadTopEntity.side2;
        const theadLeftWidth = this.theadLeftEntity.side2;
        if (this.theadTopEntity) {
            const topBasePosition: PositionInterface = _.clone(this.position);
            topBasePosition.colNum = theadLeftWidth;
            topBasePosition.rowNum = 0;
            this.tableHeadTop = this.theadTopEntity.convert2TheadTopList(topBasePosition);
        }
        if (this.config.hasLeftThead) {
            const leftBasePosition: PositionInterface = _.clone(this.position);
            leftBasePosition.colNum = 0;
            leftBasePosition.rowNum = theadTopHeight;
            this.tableHeadLeft = this.theadLeftEntity.convert2TheadLeftList(leftBasePosition);
        }
        const topLeftCell = new BaseCell({ value: this.id, $parent: this.tableHeadTopLeft });
        this.tableHeadTopLeft.style.width = this.theadLeftEntity.widthNum + 'px';
        this.tableHeadTopLeft.widthNum = this.theadLeftEntity.widthNum;
        this.tableHeadTopLeft.style.height = this.theadTopEntity.heightNum + 'px';
        this.tableHeadTopLeft.heightNum = this.theadTopEntity.heightNum;
        this.tableHeadTopLeft.setCell(topLeftCell);
        topLeftCell.render();
        if (theadTopHeight > 0 && theadLeftWidth > 0) {
            this.$positionManager.setPositionMap(this.tableHeadTopLeft.position, this.tableHeadTopLeft, 'source');
            this.$positionManager.setPositionMap(this.tableHeadTopLeft.position, this.tableHeadTopLeft, 'clone');
        }
        this.renderTBody();
        this.$selectBoxEntity.clear();
        // debugger
        this.saveLastPositionMap(this.position);
    }

    /**
     * serialize 序列化
     */
    public serialize(): object {
        const Table: any = {};
        try {
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    // console.log(key);
                    const value: any = this[key];
                    if (Array.isArray(value) || /\$/.test(key)) {
                        continue;
                    } else if (typeof value === 'object') {
                        if (key.indexOf('Subject') !== -1) {
                            continue;
                        } else if ((key === 'keyDownSet')) {
                            // Table[key] = Array.from(this[key] as any);
                        } else if (value.EPI_READY) {
                            Table[key] = value.clone(['Subject', '$'], ['userData']);
                        } else {
                            Table[key] = this[key];
                        }
                    } else {
                        Table[key] = this[key];
                    }
                }
            }

        } catch (error) {
            console.error('serialize 中出现出错');
            console.error(error);
        }
        return Table;
    }

    /**
     * deserialize 反序列化
     */
    public deserialize(tableJson: object) {
        const copyJson = _.clone(tableJson);
        const self: any = this;
        try {
            for (const key in copyJson) {
                if (copyJson.hasOwnProperty(key)) {
                    const val = copyJson[key];
                    if (val.EPI_READY) {
                        (self[key] as any).setContainerData(val);
                    } else if (key === '$selectBoxEntity' || key === 'keyDownSet') {
                        // self[key] = new Set((tableJson as any)[key]);
                    } else {
                        self[key] = val;
                    }
                }
            }
            this.renderAll();
        } catch (error) {
            console.error('Deserialize 中出现出错');
            console.error(error);
        }
    }


    /**
     *  添加父级
     *
     * @returns
     * @memberof BaseTable
     */
    public addParent(newParentContainData?: TheadContainerInterface): void {
        let fristContainer: TheadContainer;
        if (this.$selectBoxEntity.size > 0) {
            const containerList = this.$selectBoxEntity.selectList;
            fristContainer = containerList[0] as TheadContainer;
            const isSameParent = this.isSameParent(containerList);
            if (isSameParent && fristContainer) {
                const theadEntity: BaseThead = this.getEntity(fristContainer.type);
                if (theadEntity === null) { return; }
                const sourceContainerList: TheadContainer[] = new Array();


                this.$selectBoxEntity.forEach((th: CellContainer) => {
                    sourceContainerList.push(this.getContainer(th.position) as TheadContainer);
                });
                // 按position从大到小排序 目的是先删除position大的
                sourceContainerList.sort((a: TheadContainer, b: TheadContainer) => {
                    return _.last(b.theadPosition) - _.last(a.theadPosition);
                });
                // console.log(sourceContainerList);
                // 添加在第一个选中th位置上
                // debugger
                fristContainer = _.last(sourceContainerList);
                const targetParentPosition = _.dropRight(fristContainer.theadPosition, 1);

                newParentContainData = newParentContainData || {
                    cell: {
                        value: '新建合计',
                        data: '',
                    },
                } as any;
                const tmpContainer = theadEntity.createContain(newParentContainData) as TheadContainer;
                sourceContainerList.forEach((th: TheadContainer) => {
                    tmpContainer.addChild(th, 0);
                    this.theadDelete({
                        type: fristContainer.type,
                        targetContainerPosition: th.theadPosition,
                        withChildren: true
                    });
                });
                this.theadAdd({
                    type: fristContainer.type,
                    targetParentPosition,
                    insertIndex: _.last(fristContainer.theadPosition),
                    sourceContainerData: tmpContainer,
                });
                // debugger
                this.renderAll();
            }
        }
        this.$selectBoxEntity.clear();
    }

    /**
     * 按键抬起
     *
     * @param {*} ev
     * @memberof BaseTable
     */
    public onKeyUp(ev: any): void {
        this.keyDownSet.delete(ev.key);
    }

    /**
     * 按键按下
     *
     * @param {*} ev
     * @memberof BaseTable
     */
    public onKeyDown(ev: any) {
        console.log(ev.key);
        this.keyDownSet.add(ev.key);
    }

    /**
     * dragLeave
     */
    public dragLeave(ev: any, th: TheadContainer) {
        const type = th.type.indexOf('top') !== -1 ? 'top' : 'left';
        const theadEntity: BaseThead = this.getEntity(type);
        theadEntity.dragLeave(ev, th);
    }


    /**
     * dragStart 事件
     */
    public dragStart(ev: any, th: TheadContainer) {
        const theadEntity = this.getEntity(th.type);
        const dragStartData: DragStartDataInterface = {
            operationType: 'move',
            containerData: th,
        };
        theadEntity.dragStart(ev, dragStartData);
    }

    /**
     * dragEnd
     */
    public dragEnd(ev: any, th: TheadContainer) {
        const theadEntity = this.getEntity(th.type);
        theadEntity.dragStartData = null;
    }

    /**
     * dragOver事件
     */
    public dragOver(ev: any, th?: TheadContainer) {
        if (th) {
            const type = th.type.indexOf('top') !== -1 ? 'top' : 'left';
            const theadEntity: BaseThead = this.getEntity(type);
            if (theadEntity.dragStartData) {
                // 悬停在自己上面 不处理
                if (th !== theadEntity.dragStartData.containerData) {
                    theadEntity.dragOver(ev, th);
                }
            } else {
                theadEntity.dragOver(ev, th);
            }
        } else {
            ev.preventDefault();
        }
    }

    /**
     * 拖拽drop事件
     */
    public drop(ev: any, th?: TheadContainer) {
        if (th) {
            const type = th.type.indexOf('top') !== -1 ? 'top' : 'left';
            const theadEntity = this.getEntity(type);
            theadEntity.drop(ev, th);
        }
    }

    /**
     * getTheadLe
     */
    public getTheadLeavesList1(theadType: 'top' | 'left'): TheadContainer[] | null {
        let res = null;
        try {
            const Entity = this.getEntity(theadType) as BaseThead;
            res = Entity.leafIndexList;
        } catch (error) {
            console.error('获取错误');
        }
        return res;
    }

    /**
     * 合并单元格
     *
     * @protected
     * @memberof BaseTable
     */
    public merge(): void {
        if (this.canMerge()) {
            const r = window.confirm('合并单元格时只保留左上单元格，删除其他单元格，确定合并？');
            if (r === true) {
                this.$selectBoxEntity.selectList.sort((pre: TheadContainer, lat: TheadContainer) => {
                    return _.last(lat.theadPosition) - _.last(pre.theadPosition);
                });

                this.$selectBoxEntity.selectList.forEach((container: TheadContainer, i: number) => {
                    if (i < this.$selectBoxEntity.selectList.length - 1) {
                        this.theadDelete({
                            targetContainerPosition: container.theadPosition,
                            type: container.type
                        });
                    }
                });
                this.renderAll();
            } else {
                return;
            }
        }
    }

    /**
     * 拆分单元格
     *
     * @protected
     * @memberof BaseTable
     */
    protected disMerge() {
        this.$selectBoxEntity.forEach((th: CellContainer, i: any) => {
            if ((th as TheadContainer).mergeList.length > 0) {
                const theadEntity = this.getEntity(th.type);
                theadEntity.disMerge(th);
            }
        });
        this.$selectBoxEntity.clear();
        this.renderAll();
    }



    /**
     * 判断是否符合合并要求
     *
     * @private
     * @returns
     * @memberof BaseTable
     */
    private canMerge() {
        const containerList = this.$selectBoxEntity.selectList;
        const isSameParent = this.isSameParent(containerList);
        return isSameParent;
    }



    /**
     * 滚动事件 调整scrollTop scrollLeft
     *
     * @private
     * @param {*} ev
     * @memberof BaseTable
     */
    private onScroll(ev: any) {
        this.style.scrollTop = ev.srcElement.scrollTop;
        this.style.scrollLeft = ev.srcElement.scrollLeft;
    }


    /**
     * 渲染表格内容
     *
     * @memberof DefaultTable
     */
    private renderTBody() {
        this.tbodyEntity.topIndexList = this.colNumber.slice(0 + this.theadLeftEntity.side2, this.colNumber.length);
        if (this.config.hasLeftThead) {
            this.tbodyEntity.leftIndexList = this.rowNumber.slice(0 + this.theadTopEntity.side2, this.rowNumber.length);
        } else {
            this.tbodyEntity.leftIndexList = this.rowNumber.slice(0 + this.theadTopEntity.side2, this.rowNumber.length);
        }
        this.tbodyEntity.render();
        this.tableBody = this.tbodyEntity.convert();
    }

    /**
     * 保证table 表头与表内容长宽高一致 并且创建行、列标志数组
     *
     * @memberof DefaultTable
     */
    private resizeTable() {
        this.theadTopEntity.resize();
        this.theadLeftEntity.resize();
        this.theadTopIndexEntity.resize();
        this.theadLeftIndexEntity.resize();
        let maxWidth;
        let maxHeight;
        const theadTopWidth = this.theadTopEntity.side1;
        const theadTopHeight = this.theadTopEntity.side2;
        const theadLeftHeight = this.theadLeftEntity.side1;
        const theadLeftWidth = this.theadLeftEntity.side2;

        let topIndexWidth = this.theadTopIndexEntity.side1;
        let leftIndexHeight = this.theadLeftIndexEntity.side1;

        const resizeTableWidth = () => {
            if (theadTopWidth > 0) {
                this.theadTopIndexEntity.deletChild(theadLeftWidth, topIndexWidth, true);
                this.theadTopIndexEntity.resize();
                topIndexWidth = this.theadTopIndexEntity.side1;
                this.theadTopEntity.leafIndexList.forEach((th: TheadContainer, i: number) => {
                    const index = i + theadLeftWidth;
                    const container = this.theadTopIndexEntity.createContain();
                    const thContainer = this.theadTopEntity.getContainerByTheadPosition(th.theadPosition);
                    container.update(th);
                    thContainer.$IndexContainer = container;
                    if (index + 1 > topIndexWidth) {
                        this.theadTopIndexEntity.addChild(container);
                    } else {
                        this.theadTopIndexEntity.replaceChild(container, index);
                    }
                });
            } else {
                this.theadTopIndexEntity.children.forEach((th: IndexContainer, i: number) => {
                    if (i + 1 <= theadLeftWidth) {
                        const theadContainer: TheadContainer = this.theadLeftEntity.leafIndexList2[i];
                        const container = this.theadTopIndexEntity.createContain();
                        container.update(theadContainer);
                        if (/tbody/.test(th.id)) {
                            this.theadTopIndexEntity.addChild(container, i);
                        } else {
                            this.theadTopIndexEntity.replaceChild(container, i);
                        }
                    } else if ((i + 1) > theadLeftWidth && !/tbody/.test(th.id)) {
                        this.theadTopIndexEntity.deletChild(i, 1, true);
                    }
                });

            }
        };

        const resizeTableHeight = () => {
            if (theadLeftHeight > 0) {
                this.theadLeftIndexEntity.deletChild(theadTopHeight, leftIndexHeight, true);
                this.theadLeftIndexEntity.resize();
                leftIndexHeight = this.theadLeftIndexEntity.side1;
                // console.log(this.theadLeftEntity);

                this.theadLeftEntity.leafIndexList.forEach((th: TheadContainer, i: number) => {
                    const index = i + theadTopHeight;
                    const container = this.theadLeftIndexEntity.createContain();
                    // console.log(this.theadLeftEntity);
                    const thContainer = this.theadLeftEntity.getContainerByTheadPosition(th.theadPosition);
                    thContainer.$IndexContainer = container;
                    container.update(th);
                    if (index + 1 > leftIndexHeight) {
                        this.theadLeftIndexEntity.addChild(container);
                    } else {
                        this.theadLeftIndexEntity.replaceChild(container, index);
                    }
                });
            } else {
                this.theadLeftIndexEntity.children.forEach((th: IndexContainer, i: number) => {
                    if (i + 1 <= theadTopHeight) {
                        const theadContainer: TheadContainer = this.theadTopEntity.leafIndexList2[i];
                        const container = this.theadLeftIndexEntity.createContain();
                        container.update(theadContainer);
                        if (/tbody/.test(th.id)) {
                            this.theadLeftIndexEntity.addChild(container, i);
                        } else {
                            this.theadLeftIndexEntity.replaceChild(container, i);
                        }
                    } else if ((i + 1) > theadTopHeight && !/tbody/.test(th.id)) {
                        this.theadLeftIndexEntity.deletChild(i, 1, true);
                    }
                });
            }
        };

        // 如果列标识数小于左表头宽度+上表头宽度 例如：添加了单元格
        if (topIndexWidth <= theadTopWidth + theadLeftWidth) {
            maxWidth = theadTopWidth + theadLeftWidth;
            if (maxWidth) {
                for (let colIndex = 0; colIndex < theadLeftWidth; colIndex++) {
                    const originalColTh: IndexContainer = this.theadTopIndexEntity.getContainerByTheadPosition([colIndex]);
                    const thContainer = this.theadLeftEntity.leafIndexList2[colIndex];
                    const container = this.theadTopIndexEntity.createContain();
                    container.update(thContainer);
                    if (colIndex + 1 > topIndexWidth || /tbody/.test(originalColTh.id)) {
                        this.theadTopIndexEntity.addChild(container);
                    } else {
                        this.theadTopIndexEntity.replaceChild(container, colIndex);
                    }
                }
                resizeTableWidth();
            }
        } else { // 如果列标识数大于左表头宽度+上表头宽度 例如：删除了单元格
            maxWidth = topIndexWidth;
            resizeTableWidth();
        }
        this.theadLeftIndexEntity.render();
        leftIndexHeight = this.theadLeftIndexEntity.side1;
        if (leftIndexHeight <= theadLeftHeight + theadTopHeight) {
            maxHeight = theadLeftHeight + theadTopHeight;
            if (maxHeight) {
                for (let rowIndex = 0; rowIndex < theadTopHeight; rowIndex++) {
                    const originalRowTh: IndexContainer = this.theadLeftIndexEntity.getContainerByTheadPosition([rowIndex]);
                    const thContainer = this.theadTopEntity.leafIndexList2[rowIndex];
                    const container = this.theadLeftIndexEntity.createContain();
                    container.update(thContainer);
                    if (rowIndex + 1 > leftIndexHeight || /tbody/.test(originalRowTh.id)) {
                        this.theadLeftIndexEntity.addChild(container, rowIndex);
                    } else {
                        this.theadLeftIndexEntity.replaceChild(container, rowIndex);

                    }
                }
                resizeTableHeight();
            }
        } else {
            maxHeight = leftIndexHeight;
            resizeTableHeight();
        }
    }

    /**
     * 当拖拽形成表格后 操作
     *
     * @private
     * @param {*} msg
     * @returns
     * @memberof BaseTable
     */
    private afterDrop(msg: DragTransferDataInterface) {
        if (msg) {
            let position: number[] = [];
            let insertIndex = null;
            let targetWithChildren = msg.target.withChildren;
            let sourceWithChildren = msg.source.withChildren;
            const targetContainer: TheadContainerInterface = msg.target.containerData;
            const sourceContainer: TheadContainerInterface = msg.source.containerData;
            let operationType = msg.operationType;
            if (sourceWithChildren === undefined && sourceContainer.children && sourceContainer.children.length !== 0) {
                const r = window.confirm('整组移动？');
                if (r === true) {
                    sourceWithChildren = true;
                } else {
                    sourceWithChildren = false;
                }
            }
            // 处理inner情况
            const handleInner = () => {
                if (/replace/.test(operationType)) {
                    // do nothing
                } else if (targetContainer.cell && targetContainer.cell.value) {
                    const r = window.confirm('该单元格已存在数据，是否替换？');
                    if (r === true) {
                        operationType += '-replace';
                    } else {
                        return;
                    }
                } else {
                    operationType += '-replace';
                }

                if (targetWithChildren === undefined && targetContainer.children && targetContainer.children.length > 0) {
                    const r = window.confirm('是否删除该单元格的子节点');
                    if (r === true) {
                        targetWithChildren = true;
                    } else {
                        return;
                    }
                }

                position = _.dropRight(targetContainer.theadPosition, 1);
                insertIndex = _.last(targetContainer.theadPosition);
            };
            const handleTop = () => {
                const targetContainer1Position = _.clone(targetContainer.theadPosition);
                const sourceContainerSource = this.getContainer(sourceContainer.position, 'source') as TheadContainer;
                position = _.dropRight(targetContainer.theadPosition, 1);
                insertIndex = _.last(targetContainer.theadPosition);
                const targetParentPosition1 = _.dropRight(targetContainer.theadPosition, 1);
                const targetContainerIndex = _.last(targetContainer.theadPosition);
                // 先将sourceContainer添加或移动到targetContainer位置,得到sourceContainer2,和targetParentPosition2
                {
                    this.processThead({
                        operationType,
                        param: {
                            type: targetContainer.type,
                            targetParentPosition: targetParentPosition1,
                            insertIndex: targetContainerIndex,
                            withChildren: sourceWithChildren,
                            sourceContainerData: sourceContainer,
                        } as ParamTheadMove | ParamTheadAdd
                    });
                }

                // 再将targetContainer移动到sourceContainer2或者sourceContainer2根节点下面
                const source2ParentPosition = sourceContainerSource ? sourceContainerSource.theadPosition : targetContainer1Position;
                if (sourceWithChildren) {
                    let tmpChild = sourceContainer;
                    if (tmpChild) {
                        let hasChild = (tmpChild.children || []).length > 0;
                        while (hasChild) {
                            tmpChild = tmpChild.children[0];
                            hasChild = (tmpChild.children || []).length > 0;
                            source2ParentPosition.push(0);
                        }
                    }
                }
                {
                    this.theadMove({
                        type: targetContainer.type,
                        targetParentPosition: source2ParentPosition,
                        sourceContainerData: targetContainer,
                        insertIndex: 0,  // ?
                        withChildren: true
                    }, false);
                }
            };

            if (/top/.test(targetContainer.type)) {
                switch (msg.targetBearing) {
                    case 'left':
                        position = _.dropRight(targetContainer.theadPosition, 1);
                        insertIndex = _.last(targetContainer.theadPosition); break;
                    case 'right':
                        position = _.dropRight(targetContainer.theadPosition, 1);
                        insertIndex = _.last(targetContainer.theadPosition) + 1; break;
                    case 'top':
                        handleTop();
                        return;
                    case 'bottom':
                        position = targetContainer.theadPosition;
                        insertIndex = null; break;
                    case 'inner':
                        handleInner();
                        break;
                    default:
                        position = targetContainer.theadPosition;
                        insertIndex = null;
                        break;
                }
            } else if (/left/.test(targetContainer.type)) {
                switch (msg.targetBearing) {
                    case 'top':
                        position = _.dropRight(targetContainer.theadPosition, 1);
                        insertIndex = _.last(targetContainer.theadPosition); break;
                    case 'bottom':
                        position = _.dropRight(targetContainer.theadPosition, 1);
                        insertIndex = _.last(targetContainer.theadPosition) + 1; break;
                    case 'left':
                        handleTop();
                        return;
                    case 'right':
                        position = targetContainer.theadPosition;
                        insertIndex = null; break;
                    case 'inner':
                        handleInner(); break;
                    default:
                        position = targetContainer.theadPosition;
                        insertIndex = null;
                        break;
                }
            }
            this.processThead({
                operationType,
                param: {
                    type: targetContainer.type,
                    insertIndex,
                    withChildren: targetWithChildren,
                    targetParentPosition: position,
                    sourceContainerData: sourceContainer,
                    targetContainerPosition: targetContainer.theadPosition
                }
            } as ProcessTheadInterface);
        }
    }

    /**
     * 批量粘贴 截止2018-10-9还未使用
     *
     * @param {*} e
     * @memberof BaseTable
     */
    private mutiPaste(e: any) {
        // console.log(1111);
    }

    /**
     * 判断选中的selectBoxEntity 是否是同一个父容器下
     *
     * @returns
     * @memberof BaseTable
     */
    private isSameParent(containerList: TheadContainer[]) {
        let lastContainer: TheadContainer;
        let isSameParentSet = true;
        containerList.forEach((th: TheadContainer) => {
            if (!lastContainer) {
                lastContainer = th;
            } else {
                if (lastContainer.type !== th.type) {
                    isSameParentSet = false;
                } else if (JSON.stringify(_.dropRight(th.theadPosition, 1)) !== JSON.stringify(_.dropRight(lastContainer.theadPosition, 1))) {
                    isSameParentSet = false;
                }
            }
        });
        return isSameParentSet;
    }

    /**
     * indexTheadRender 渲染行列标识列
     *
     * @private
     * @memberof BaseTable
     */
    private indexTheadRender(): void {
        this.theadLeftIndexEntity.render();
        this.theadTopIndexEntity.render();
        this.colNumber = this.theadTopIndexEntity.convert();
        this.rowNumber = this.theadLeftIndexEntity.convert();
    }

    /**
     * 表头改变事件
     *
     * @param {*} msg
     * @memberof BaseTable
     */
    private onReceiveMsg(msg: SubjectMsgInterface) {
        this.subjectSend(msg);
        switch (msg.ev_type) {
            case 'drop':
                this.afterDrop(msg.data.object);
                this.renderAll();
                break;
            case 'click':
                this.afterContainerClick(msg.event, msg.data.object);
                break;
            case 'rightClick':
                this.afterContainerRClick(msg.event, msg.data.object);
                break;
            default:

        }
        if (this.config.renderEvent.indexOf(msg.ev_type) !== -1) {
            this.renderAll();
        }

    }

    /**
     * 通用表头处理方法
     *
     * @private
     * @param {string} theadType
     * @param {string} operationType
     * @param {number[]} targetParentPostion
     * @param {(TheadContainer | null)} [sourceContainerData]
     * @param {number} [operationIndex]
     * @memberof BaseTable
     */
    private processThead(processTheadData: ProcessTheadInterface) {
        const param = processTheadData.param;
        switch (processTheadData.operationType) {
            case 'add':
                this.theadAdd(param as ParamTheadAdd, false);
                break;
            case 'move':
                this.theadMove(param as ParamTheadMove, false);
                break;
            case 'add-replace':
                this.theadAddPlace(param as ParamTheadAddReplace, false);
                break;
            case 'move-replace':
                this.theadMoveReplace(param as ParamTheadMoveReplace, false);
                break;
            case 'delete':
                this.theadDelete(param as ParamTheadDelete, false);
                break;
            default:
        }
    }
    private afterContainerClick(ev: any, th: CellContainer) {
        // debugger
        const dom = ev.currentTarget;

        const container = this.$selectBoxEntity.createSelectContainer(dom, th);
        if (!this.keyDownSet.has('Control')) {
            this.$selectBoxEntity.clear();
        }
        this.$selectBoxEntity.add(container);
        const editContainer = this.$positionManager.$editContainer;
        // console.log(editContainer);

        if (editContainer && editContainer.cell && editContainer.cell.formula.canClickAdd && editContainer.id !== th.id) {
            const oldValue = editContainer.cell.formula.tmpValue;
            const valueArr = oldValue.split('');
            let addValue = '';
            if (this.$positionManager.$editContainer.position.table !== this.position.table) {
                addValue = 'table' + th.position.table + '!';
            }
            addValue += th.position.colStr + th.position.rowStr;
            valueArr.splice(editContainer.cell.selectionStart, 0, addValue);
            // this.$positionManager.$editContainer.cell.value = valueArr.join('');
            const elInput: any = document.activeElement;
            editContainer.cell.value = valueArr.join('');
            elInput.value = valueArr.join('');
            elInput.selectionStart = editContainer.cell.selectionStart + addValue.length;
            elInput.selectionEnd = editContainer.cell.selectionStart + addValue.length;
            console.log(elInput.value);

        }
        focus();
    }
    private afterContainerRClick(ev: any, th: CellContainer) {
        // debugger
        const dom = ev.currentTarget;
        const container = this.$selectBoxEntity.createSelectContainer(dom, th);
        if (this.$selectBoxEntity.has(container)) {
            // 已选中自己 doNoting
        } else {
            this.$selectBoxEntity.clear();
            this.$selectBoxEntity.add(container);
        }

        focus();
    }







}
