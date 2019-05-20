import { BaseThead } from '../thead/BaseThead';
import { TheadContainer } from '../container/TheadContainer';
import { BaseTbody } from '../tbody/BaseTbody';
import * as _ from '../../utils/index';
import { IndexContainer } from '../container/IndexContainer';
import { BaseCell } from '../cell/BaseCell';
import { DragTransferDataInterface } from '../../interface/DragTransferData';
import { CellContainer } from '../container/CellContainer';
import { IndexThead } from '../thead/IndexThead';
import { TbodyContainer } from '../container/TbodyContainer';
import { BaseTableConfig } from '../../config/BaseTableConfig';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
import { PositionInterface } from '../../interface/PositionInterface';
import { ProcessTheadInterface, ParamTheadAdd, ParamTheadMove, ParamTheadAddReplace, ParamTheadMoveReplace, ParamTheadDelete } from '../../interface/ProcessTheadInterface';
import { TableContainer } from '../container/TableContainer';
import { TheadContainerInterface } from '../../interface/viewModule/container/TheadContainer';
import { AddDataPostionInterface } from '../../interface/viewModule/tbody/BaseTbody';
import { TbodyContainerInterface } from '../../interface/viewModule/container/TbodyContainer';
import { BaseTableInterface } from '../../interface/viewModule/table/BaseTable';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import { SelectBox } from '../selectBox/SelectBox';
import { DragTable } from '../../DragTable';
import { TableConfigInterface } from '../../interface/config/TableConfig';
import { TreeContainer } from '../container/TreeContainer';

export class BaseTable extends TableContainer implements BaseTableInterface {
    public config: BaseTableConfig; // 表格的总体设置
    public $parent: DragTable;
    public defaultExpandedIds: any[];
    constructor(param: BaseTableInterface) {
        super(param);
        this.setExpandedContainer();
    }

    /**
     * setDefaultExpanded
     */
    public setExpandedContainer(defaultExpandedIds?: any[]): void {
        this.defaultExpandedIds = defaultExpandedIds || this.defaultExpandedIds;
        const treeContainerMap = this.$positionManager.treeContainerMap;
        treeContainerMap.forEach((value: TreeContainer, key: any) => {
            value.$openStatus = 'close';
        });
        this.defaultExpandedIds.forEach((id: any) => {
            let canDo: boolean = true;
            let treeContainer = treeContainerMap.get(id);
            if (treeContainer) {
                do {
                    treeContainer.$openStatus = 'open';
                    treeContainer.$treeParent;
                    if (treeContainer.$treeParent) {
                        treeContainer = treeContainer.$treeParent;
                    } else {
                        canDo = false;
                    }
                } while (canDo);
                treeContainer.resize();
                treeContainer.loop(treeContainer.$openStatus as 'open' | 'close');
            }

        });
        this.render();
    }

    public getAllHideContainer(): Map<any, CellContainer> {
        return this.$positionManager.hideContainerMap;
    }

    public initBeforeSetData(paramClone?: any): void {
        super.initBeforeSetData(paramClone);
        _.objectSet(this.config, this.$dragTableConfig.BaseTableConfig, 'union');
        _.objectSet(paramClone, this.$dragTableConfig.table, 'union');
        const $groupId = this.$groupId;
        this.$selectBoxEntity = SelectBox.getInstance(this.$groupId, this);
        // debugger
        // this.tableHeadTopLeft = ContainerFactory.create('TheadContainer', { style: { backgroundColor: '#fff' } });
        this.tableHeadTopLeft = new TheadContainer({ id: 'top-left', side1: 1, side2: 1, style: { backgroundColor: '#fff' }, $groupId, $rootTable: this }); // 左上角空白单元格长宽
        this.theadTopEntity = new BaseThead({ id: 'topThead', type: 'top', $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.theadLeftEntity = new BaseThead({ id: 'leftThead', type: 'left', $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.theadTopIndexEntity = new IndexThead({ id: 'topIndexThead', type: 'top-index', $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.theadLeftIndexEntity = new IndexThead({ id: 'leftIndexThead', type: 'left-index', $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.tbodyEntity = new BaseTbody({ id: 'baseTbody', type: 'tbody', $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.initSubject(this);
    }

    /**
     * setConfig
     */
    public setConfig(tableConfig: TableConfigInterface): void {
        _.objectSet(this.config, tableConfig.table, 'union');
        _.objectSet(this.theadTopEntity.config, tableConfig.topThead, 'union');
        _.objectSet(this.theadLeftEntity.config, tableConfig.leftThead, 'union');
        _.objectSet(this.theadTopIndexEntity.config, tableConfig.topIndexThead, 'union');
        _.objectSet(this.theadLeftIndexEntity.config, tableConfig.leftIndexThead, 'union');
        _.objectSet(this.tbodyEntity.config, tableConfig.baseTbody, 'union');
        this.render();
    }

    /**
     * setContainerData 反序列化
     */
    public setContainerData(param: BaseTableInterface): void {
        try {
            const copyJson = _.keepClone(param);
            const conditionHandle = (key: string, value: any) => {
                if (key === 'theadTopEntity') {
                    _.objectSet(value, this.$dragTableConfig.topThead);
                    this.theadTopEntity.setContainerData(value);
                    return;
                } else if (key === 'theadLeftEntity') {
                    _.objectSet(value, this.$dragTableConfig.leftThead);
                    this.theadLeftEntity.setContainerData(value);
                    return;
                } else if (key === 'theadTopIndexEntity') {
                    _.objectSet(value, this.$dragTableConfig.topIndexThead);
                    this.theadTopIndexEntity.setContainerData(value);
                    return;
                } else if (key === 'theadLeftIndexEntity') {
                    _.objectSet(value, this.$dragTableConfig.leftIndexThead);
                    this.theadLeftIndexEntity.setContainerData(value);
                    return;
                } else if (key === 'tbodyEntity') {
                    _.objectSet(value, this.$dragTableConfig.baseTbody);
                    this.tbodyEntity.setContainerData(value);
                    return;
                }
                this.setProperty(key, value);
            };
            super.setContainerData(copyJson, undefined, undefined, undefined, conditionHandle);
        } catch (error) {
            console.error('setContainerData 中出现出错');
            console.error(error);
        }
        this.initAfterSetData();
        this.subjectSend(
            {
                ev_type: 'beforeRender',
                render: true,
                event: null,
                data: {
                    objectName: 'setContainerData',
                    object: this
                }
            }
        );
    }

    /**
     * onDestroy
     */
    public onDestroy(): void {
        const self: BaseTable = this;
        self.theadTopEntity.$subject.unsubscribe(self.onReceiveMsg, self);
        self.theadLeftEntity.$subject.subscribe(self.onReceiveMsg, self);
        self.tbodyEntity.$subject.subscribe(self.onReceiveMsg, self);
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
        this.render();
    }

    /**
     * addOneRow 添加一行数据
     *
     * @param {*} [rowData]
     * @memberof BaseTable
     */
    public addOneRow(params?:
        {
            data?: object | any[] | CellContainer[],
            param?: AddDataPostionInterface,
            render?: boolean;
        }
    ): string {
        const param = params ? params.param : undefined;
        const rowData = params ? params.data : undefined;
        const render = params ? params.render : undefined;


        let id: string = null;
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
        } else if (this.$tableHeadLeft.length !== 0) {
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
            const addContainer = this.theadAdd(paramTheadAdd);
            id = addContainer.id;
        }

        const container = this.theadLeftIndexEntity.createContain();
        this.theadLeftIndexEntity.addChild(container);
        id = this.tbodyEntity.setRowData(id, rowData || {});
        container.renderId = id;
        if (render !== false) {
            this.render();
        }
        return id;
    }

    /**
     * addOneCol 添加一列数据
     *
     * @param {*} [data]
     * @memberof BaseTable
     */
    public addOneCol(
        params?:
            {
                data?: object | any[] | CellContainer[],
                param?: AddDataPostionInterface,
                render?: boolean;
            }
    ): string {
        const param = params ? params.param : undefined;
        const colData = params ? params.data : undefined;
        const render = params ? params.render : undefined;

        let id: string = null;
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
        } else if (this.$tableHeadTop.length !== 0) {
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
            const addContainer = this.theadAdd(paramTheadAdd);
            id = addContainer.id;
        }

        const container = this.theadTopIndexEntity.createContain();
        id = this.tbodyEntity.setColData(id, colData || {});
        container.renderId = id;
        this.theadTopIndexEntity.addChild(container);
        if (render !== false) {
            this.render();
        }
        return id;
    }

    /**
     * setTBodyData
     */
    public setTbodyData(data: object | Array<TbodyContainerInterface[] | object>): void {
        this.tbodyEntity.setTbodyData(data);
    }

    /**
     * 表头添加并替换
     *
     * @param {ParamTheadAddReplace} param
     * @memberof BaseTable
     */
    public theadAddReplace(param: ParamTheadAddReplace, render?: boolean): void {
        const targetContainerPosition = param.targetContainerPosition;
        const targetThead: BaseThead = this.getEntity(param.type);
        const targetIndexPosition = _.last(targetContainerPosition);
        const targetParentPosition = _.dropRight(targetContainerPosition);
        const targetParentContainer = targetThead.getContainerByTheadPosition(targetParentPosition);
        if (param.sourceContainerData) {
            if (param.withChildren == false) {
                param.sourceContainerData.children = new Array();
            }
            const tmpContainer = targetThead.createContain(param.sourceContainerData);
            targetParentContainer.replaceChild(tmpContainer, targetIndexPosition, param.targetWithChildren);
        }

        if (param.sourceContainerData) {
            const tmpContainer = targetThead.createContain(param.sourceContainerData);
            targetParentContainer.replaceChild(tmpContainer, targetIndexPosition, param.withChildren);
        }

        this.onReceiveMsg({
            ev_type: 'theadAddReplace',
            event: null,
            render,
            data: {
                objectName: 'ParamTheadAddReplace',
                object: param
            }
        });

    }

    /**
     * 表头添加
     *
     * @param {ParamTheadAdd} param
     * @memberof BaseTable
     */
    public theadAdd(param: ParamTheadAdd, render?: boolean): any {
        // debugger
        let id = null;
        let addContainer: TheadContainer;
        try {
            if (!param.sourceContainerData) {
                param.sourceContainerData = {
                    cell: {
                        value: '',
                    },
                };
            }
            if (param.withChildren == false) {
                param.sourceContainerData.children = new Array();
            }
            const targetThead: BaseThead = this.getEntity(param.type);
            const targetParentContainer = targetThead.getContainerByTheadPosition(param.targetParentPosition) as TheadContainer;
            addContainer = targetThead.createContain(param.sourceContainerData);
            id = targetParentContainer.addChild(addContainer, param.insertIndex);
            // targetThead.resize();
            this.onReceiveMsg({
                ev_type: 'theadAdd',
                event: null,
                render,
                data: {
                    objectName: 'ParamTheadAdd',
                    object: param
                }
            });
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
        return addContainer;
    }

    /**
     * 表头移动
     *
     * @param {ParamTheadMove} param
     * @memberof BaseTable
     */
    public theadMove(param: ParamTheadMove, render?: boolean): void {

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

            this.onReceiveMsg({
                ev_type: 'theadMove',
                render,
                event: null,
                data: {
                    objectName: 'ParamTheadMove',
                    object: param
                }
            });


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
    public theadDelete(param?: ParamTheadDelete, render?: boolean): void {
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

                this.onReceiveMsg({
                    ev_type: 'theadDelete',
                    render,
                    event: null,
                    data: {
                        objectName: 'ParamTheadDelete',
                        object: param
                    }
                });

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
    public theadMoveReplace(param: ParamTheadMoveReplace, render?: boolean): void {
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
                this.onReceiveMsg({
                    ev_type: 'theadMoveReplace',
                    event: null,
                    render,
                    data: {
                        objectName: 'ParamTheadMoveReplace',
                        object: param
                    }
                });
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
    public addSum(newParentContainData?: TheadContainerInterface, param?: AddDataPostionInterface): void {
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
        } as any;
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
        this.subjectSend(
            {
                ev_type: 'beforeRender',
                render: true,
                event: null,
                data: {
                    objectName: 'addSum',
                    object: null
                }
            }
        );
    }


    /**
     *
     *
     * @param {CellContainer} contianer
     * @param {string} delType  'row' | 'col'
     * @memberof BaseTable
     */
    public delOneRowCol(delType: 'row' | 'col', container?: CellContainerInterface): void {

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

        this.subjectSend(
            {
                ev_type: 'delOneRowCol',
                event: null,
                render: true,
                data: {
                    objectName: 'delOneRowCol',
                    object: null
                }
            }
        );
    }


    /**
     * getTbodyData 根据outPutType输出tbody数据
     *
     * @param {number} [outPutType]
     * @returns
     * @memberof BaseTable
     */
    public getTbodyData(outPutType?: 'objectData' | 'arrayObjectData' | 'arrayArrayData', valueType?: 'content' | 'container'): any {
        outPutType = outPutType || 'arrayObjectData';
        valueType = valueType || 'content';
        const res = this.tbodyEntity.output(valueType)[outPutType];
        return res;
    }


    /**
     * 渲染表格渲染
     *
     * @memberof BaseTable
     */
    public render(): void {
        // debugger
        // console.log('render');
        this.$positionManager.hideContainerMap.clear();
        this.resizeTable();
        this.indexTheadRender();
        const theadTopHeight = this.theadTopEntity.side2;
        const theadLeftWidth = this.theadLeftEntity.side2;
        if (this.theadTopEntity) {
            const topBasePosition: PositionInterface = _.clone(this.position);
            topBasePosition.colNum = theadLeftWidth;
            topBasePosition.rowNum = 0;
            this.$tableHeadTop = this.theadTopEntity.convert2TheadTopList(topBasePosition);
        }
        if (this.theadLeftEntity) {
            const leftBasePosition: PositionInterface = _.clone(this.position);
            leftBasePosition.colNum = 0;
            leftBasePosition.rowNum = theadTopHeight;
            this.$tableHeadLeft = this.theadLeftEntity.convert2TheadLeftList(leftBasePosition);
        }
        const topLeftCell = new BaseCell({ value: this.id, $parent: this.tableHeadTopLeft });
        // debugger
        this.tableHeadTopLeft.widthSelfNum = this.theadLeftEntity.widthNum;
        this.tableHeadTopLeft.heightSelfNum = this.theadTopEntity.heightNum;
        this.tableHeadTopLeft.resize();
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
    public clone(): BaseTableInterface {
        let Table: any = {};
        try {
            Table = super.clone(/\$/, /userData/);
        } catch (error) {
            console.error('clone 中出现出错');
            console.error(error);
        }
        return Table;
    }



    /**
     *  添加父级
     *
     * @returns
     * @memberof BaseTable
     */
    public addParent(newParentContainData?: TheadContainerInterface): void {
        let fristContainer: TheadContainer;
        const containerList = this.$selectBoxEntity.selectList;
        this.onReceiveMsg({
            ev_type: 'addParent',
            event: null,
            data: {
                objectName: 'selectContainer',
                object: containerList
            }
        });
        if (this.$selectBoxEntity.size > 0) {
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
                this.subjectSend(
                    {
                        ev_type: 'beforeRender',
                        render: true,
                        event: null,
                        data: {
                            objectName: 'addParent',
                            object: this
                        }
                    }
                );
            }
        }
        this.$selectBoxEntity.clear();
    }

    /**
     * 获得叶子节点1
     */
    public getTheadLeavesList1(theadType: 'top' | 'left'): TheadContainerInterface[] | null {
        let res = null;
        try {
            const Entity = this.getEntity(theadType) as BaseThead;
            Entity.resize();
            res = Entity.$leafIndexList;
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
                this.subjectSend(
                    {
                        ev_type: 'beforeRender',
                        render: true,
                        event: null,
                        data: {
                            objectName: 'merge',
                            object: this
                        }
                    }
                );
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
    public disMerge() {

    }



    /**
     * 判断是否符合合并要求
     *
     * @private
     * @returns
     * @memberof BaseTable
     */
    private canMerge(): boolean {
        const containerList = this.$selectBoxEntity.selectList;
        const isSameParent = this.isSameParent(containerList);
        return isSameParent;
    }


    /**
     * 渲染表格内容
     *
     * @memberof DefaultTable
     */
    private renderTBody(): void {
        this.tbodyEntity.topIndexList = this.$colNumber.slice(0 + this.theadLeftEntity.side2, this.$colNumber.length);
        this.tbodyEntity.leftIndexList = this.$rowNumber.slice(0 + this.theadTopEntity.side2, this.$rowNumber.length);
        this.tbodyEntity.render();
        this.$tableBody = this.tbodyEntity.convert();
    }

    /**
     * 保证table 表头与表内容长宽高一致 并且创建行、列标志数组
     *
     * @memberof DefaultTable
     */
    private resizeTable(): void {
        this.theadTopEntity.resize();
        this.theadLeftEntity.resize();
        this.theadTopIndexEntity.resize();
        this.theadLeftIndexEntity.resize();
        let maxWidth: number;
        let maxHeight: number;
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
                this.theadTopEntity.$leafIndexList.forEach((th: TheadContainer, i: number) => {
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
                // console.log(this.theadTopIndexEntity.children);
                this.theadTopIndexEntity.children.forEach((th: IndexContainer, i: number) => {
                    if (i + 1 <= theadLeftWidth) {
                        const theadContainer: TheadContainer = this.theadLeftEntity.$leafIndexList2[i];
                        const container = this.theadTopIndexEntity.createContain();
                        container.update(theadContainer);
                        if (/tbody/.test(th.renderId)) {
                            this.theadTopIndexEntity.addChild(container, i);
                        } else {
                            this.theadTopIndexEntity.replaceChild(container, i);
                        }
                    } else if ((i + 1) > theadLeftWidth && !/tbody/.test(th.renderId)) {
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

                this.theadLeftEntity.$leafIndexList.forEach((th: TheadContainer, i: number) => {
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
                        const theadContainer: TheadContainer = this.theadTopEntity.$leafIndexList2[i];
                        const container = this.theadLeftIndexEntity.createContain();
                        container.update(theadContainer);
                        if (/tbody/.test(th.renderId)) {
                            this.theadLeftIndexEntity.addChild(container, i);
                        } else {
                            this.theadLeftIndexEntity.replaceChild(container, i);
                        }
                    } else if ((i + 1) > theadTopHeight && !/tbody/.test(th.renderId)) {
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
                    const thContainer = this.theadLeftEntity.$leafIndexList2[colIndex];
                    const container = this.theadTopIndexEntity.createContain();
                    container.update(thContainer);
                    if (colIndex + 1 > topIndexWidth || /tbody/.test(originalColTh.renderId)) {
                        this.theadTopIndexEntity.addChild(container, colIndex);
                    } else {
                        this.theadTopIndexEntity.replaceChild(container, colIndex);
                        // this.$positionManager.setPositionMap(container.position, container, 'last');
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
                    const thContainer = this.theadTopEntity.$leafIndexList2[rowIndex];
                    const container = this.theadLeftIndexEntity.createContain();
                    container.update(thContainer);
                    if (rowIndex + 1 > leftIndexHeight || /tbody/.test(originalRowTh.renderId)) {
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
    private dropHandle(msg: DragTransferDataInterface): void {
        if (msg) {
            let position: number[] = [];
            let insertIndex = null;
            let targetWithChildren = msg.target.withChildren;
            let sourceWithChildren = msg.source.withChildren;
            let targetContainer: TheadContainerInterface = msg.target.containerData;
            let sourceContainer: TheadContainerInterface = msg.source.containerData;
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
                    const r = window.confirm('该单元格已有数据,替换请按确定，放弃请按取消');
                    if (r === true) {
                        operationType += '-replace';
                    } else {
                        return false;
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
                // this.render();
                // return;
                this.getEntity(targetContainer.type).resize();
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

                    operationType = 'move';
                    position = source2ParentPosition;
                    sourceContainer = targetContainer;
                    insertIndex = 0;
                    sourceWithChildren = true;
                    // this.theadMove({
                    //     type: targetContainer.type,
                    //     targetParentPosition: source2ParentPosition,
                    //     sourceContainerData: targetContainer,
                    //     insertIndex: 0,  // ?
                    //     withChildren: true
                    // }, false);
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
                        // return;
                        break;
                    case 'bottom':
                        position = targetContainer.theadPosition;
                        insertIndex = null; break;
                    case 'inner':
                        const res = handleInner();
                        if (false === res) {
                            return;
                        }
                        break;
                    default:
                        targetContainer = this.theadTopEntity;
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
                        // return;
                        break;
                    case 'right':
                        position = targetContainer.theadPosition;
                        insertIndex = null; break;
                    case 'inner':
                        const res = handleInner();
                        if (false === res) {
                            return;
                        }
                        break;
                    default:
                        targetContainer = this.theadLeftEntity;
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
                    withChildren: sourceWithChildren,
                    targetWithChildren,
                    targetParentPosition: position,
                    sourceContainerData: sourceContainer,
                    targetContainerPosition: targetContainer.theadPosition
                }
            } as ProcessTheadInterface);
            this.onReceiveMsg({
                ev_type: 'beforeRender',
                event: null,
                render: true,
                data: {
                    objectName: 'BaseTable',
                    object: this
                }
            });
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
    private isSameParent(containerList: TheadContainer[]): boolean {
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
        this.$colNumber = this.theadTopIndexEntity.convert();
        this.$rowNumber = this.theadLeftIndexEntity.convert();
    }

    /**
     * 表头改变事件
     *
     * @param {*} msg
     * @memberof BaseTable
     */
    private onReceiveMsg(msg: SubjectMsgInterface) {
        const resultList = this.subjectSend(msg);
        if (/cancel/.test(resultList.join('-'))) {
            return resultList;
        }
        if (!this.$parent && msg.render) {
            this.render();
        }
        switch (msg.ev_type) {
            case 'drop':
                this.dropHandle(msg.data.object);
                break;
            case 'click':
                this.afterContainerClick(msg.event, msg.data.object);
                break;
            case 'rightClick':
                this.afterContainerRClick(msg.event, msg.data.object);
                break;
            default:
        }
        return resultList;
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
    private processThead(processTheadData: ProcessTheadInterface): void {
        const param = processTheadData.param;
        switch (processTheadData.operationType) {
            case 'add':
                this.theadAdd(param as ParamTheadAdd, false);
                break;
            case 'move':
                this.theadMove(param as ParamTheadMove, false);
                break;
            case 'add-replace':
                this.theadAddReplace(param as ParamTheadAddReplace, false);
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
    private afterContainerClick(ev: any, th: CellContainer): void {
        // debugger
        const dom = ev.currentTarget;

        const container = this.$selectBoxEntity.createSelectContainer(dom, th);
        if (!this.$keyDownSet.has('Control')) {
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
                addValue = th.position.table + '!';
            }
            addValue += th.position.colStr + th.position.rowStr;
            valueArr.splice(editContainer.cell.selectionStart, 0, addValue);
            // this.$positionManager.$editContainer.cell.value = valueArr.join('');
            const elInput: any = document.activeElement;
            editContainer.cell.value = valueArr.join('');
            elInput.value = valueArr.join('');
            elInput.selectionStart = editContainer.cell.selectionStart + addValue.length;
            elInput.selectionEnd = editContainer.cell.selectionStart + addValue.length;
        }
        focus();
    }
    private afterContainerRClick(ev: any, th: CellContainer): void {
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

    /**
     * 初始化订阅事件 订阅表头变化
     *
     * @param {*} self
     * @memberof BaseTable
     */
    private initSubject?(self: BaseTable): void {
        self = self || this;
        if (self.theadTopEntity) {
            self.theadTopEntity.$subject.subscribe(self.onReceiveMsg, self);
        }
        if (self.theadLeftEntity) {
            self.theadLeftEntity.$subject.subscribe(self.onReceiveMsg, self);
        }
        if (self.tbodyEntity) {
            self.tbodyEntity.$subject.subscribe(self.onReceiveMsg, self);
        }
        self.theadTopIndexEntity.$subject.subscribe(self.onReceiveMsg, self);
        self.theadLeftIndexEntity.$subject.subscribe(self.onReceiveMsg, self);
    }


    private initAfterSetData(): void {
        this.position.table = this.id;
        const topLeftPositon: PositionInterface = {
            table: this.position.table,
            colStr: 'A',
            rowStr: 1,
        };
        this.tableHeadTopLeft.position = topLeftPositon;
        const style = {
            // 主表样式
            mainTable: {
                position: 'relative',
                float: 'left',
                overflowX: this.isOverflowX ? 'auto' : 'visible',
                overflowY: this.isOverflowY ? 'auto' : 'visible',
                maxWidth: !this.isOverflowX ? 'auto' : this.maxWidth,
                maxHeight: !this.isOverflowY ? 'auto' : this.maxHeight,
            },
            leftTable: {
                position: 'absolute',
                // zIndex: 100,
                overflowX: this.isOverflowX ? 'hidden' : 'visible',
                overflowY: this.isOverflowY ? 'hidden' : 'visible',
                maxHeight: !this.isOverflowY ? 'auto' : 'calc(' + this.maxHeight + ' - ' + this.scrollBarHeight + ')',
            },
            // 上侧表头
            topTable: {
                overflowX: this.isOverflowX ? 'hidden' : 'visible',
                overflowY: this.isOverflowY ? 'hidden' : 'visible',
                maxWidth: !this.isOverflowX ? 'auto' : 'calc(' + this.maxWidth + ' - ' + this.scrollBarWidth + ')',
            },
        };
        _.objectSet(this.style, style, 'union');
    }
}
