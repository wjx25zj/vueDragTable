import { TbodyContainer } from '../container/TbodyContainer';
import { TheadContainer } from '../container/TheadContainer';
import * as _ from '../../utils';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import { IndexContainer } from '../container/IndexContainer';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
import { Subject } from '../../communication/Subject';
import { BaseTbodyInterface } from '../../interface/viewModule/tbody/BaseTbody';
import { TbodyContainerInterface } from '../../interface/viewModule/container/TbodyContainer';
export class BaseTbody extends TbodyContainer {
    public topIndexList: IndexContainer[] = new Array();
    public leftIndexList: IndexContainer[] = new Array();
    public bodyData: any = {
    };
    //  表头变化
    public tbodySubject = new Subject();


    // constructor(type?: any, root?: any) {
    //     super(type, 0, 0, root);
    //     this.$rootParent = this;
    // }
    constructor(param: BaseTbodyInterface) {
        super(param);
        this.$rootParent = this;
        this.cell = null;
        if (param.id) {
            super.setConfig(this.$defaultConfig[param.id]);
            this.setConfig(param.config);
        }
    }



    /**
     * subjectSend
     */
    public subjectSend(msg: SubjectMsgInterface) {
        this.tbodySubject.sendMsg(msg);
    }

    /**
     * 添加一行数据
     *
     * @param {any[]} rowData
     * @returns
     * @memberof BaseTbody
     */
    public setRowData(leftId?: any, rowData?: object | TbodyContainer[]) {
        try {
            // console.log(this.topIndexList);
            leftId = leftId ? leftId : 'tbody_' + _.guid();
            const item = rowData || {};
            if (Array.isArray(item)) {
                item.forEach((value: any, j: number) => {
                    const container = this.createContain();
                    if (['string', 'number'].indexOf(typeof value) !== -1) {
                        container.cell.value = value;

                    } else if (typeof value === 'object') {
                        container.setContainerData(value);
                    }
                    const topId = this.topIndexList[j].id;
                    this.setData(leftId, topId, container);
                });
            } else if (typeof item === 'object') {
                for (const topId in item) {
                    if (item.hasOwnProperty(topId)) {
                        const value = item[topId];
                        const container = this.createContain();
                        if (['string', 'number'].indexOf(typeof value) !== -1) {
                            container.cell.value = value;
                        } else if (typeof value === 'object') {
                            container.setContainerData(value);

                        }
                        this.setData(leftId, topId, container);
                    }
                }
            }
            return leftId;
        } catch (error) {
            console.error('setRowData数据有误');
            console.error(error);
            return null;
        }

    }
    /**
     * addCol
     */
    public setColData(topId?: any, colData?: any) {
        try {
            topId = topId ? topId : 'tbody_' + _.guid();
            const item = colData || {};
            if (Array.isArray(item)) {
                item.forEach((value: any, j: number) => {
                    let container = this.createContain();
                    if (['string', 'number'].indexOf(typeof value) !== -1) {
                        container.cell.value = value;
                    } else if (typeof value === 'object') {
                        container = value;
                    }
                    if (!this.leftIndexList[j]) {
                        return;
                    }
                    const leftId = this.leftIndexList[j].id;
                    this.setData(leftId, topId, container);
                });
            } else if (typeof item === 'object') {
                for (const leftId in item) {
                    if (item.hasOwnProperty(leftId)) {
                        const value = item[leftId];
                        let container = this.createContain();
                        if (['string', 'number'].indexOf(typeof value) !== -1) {
                            container.cell.value = value;
                        } else if (typeof value === 'object') {
                            container = value;
                        }
                        this.setData(leftId, topId, container);
                    }
                }
            }
            return topId;
        } catch (error) {
            console.error('setColData');
            console.error(error);
            return null;
        }

    }


    /**
     * setContainer
     */
    public setData(leftId: any, topId: any, containerData: TbodyContainerInterface): TbodyContainer {
        let container: TbodyContainer;
        try {
            let tmpTr = this.bodyData[leftId];
            if (!tmpTr) {
                this.bodyData[leftId] = tmpTr = {};
            }
            if (tmpTr[topId]) {
                tmpTr[topId].setContainerData(containerData);
            } else {
                tmpTr[topId] = this.createContain(containerData);
            }
            container = tmpTr[topId];
        } catch (error) {
            console.error(error);
        }
        return container;
    }
    /**
     * 设置tbody属性 部分特殊处理
     *
     * @param {CellContainerInterface} containerData
     * @memberof TbodyContainer
     */
    public setContainerData(containerData: CellContainerInterface) {
        // debugger
        for (const key in containerData) {
            if (containerData.hasOwnProperty(key)) {
                const value: any = (containerData as any)[key];
                if (key === 'bodyData') {
                    for (const leftThId in value) {
                        if (value.hasOwnProperty(leftThId)) {
                            const rowData = value[leftThId];
                            this.setRowData(leftThId, rowData);
                        }
                    }
                } else if (typeof value === 'object' && !Array.isArray(value) && key.indexOf('$') === -1) {
                    _.objectSet(this[key], value, 'union');
                } else {
                    this.setProperty(key, value);
                }
            }
        }
    }



    /**
     * resize
     */
    public resize() {
        this.side1 = this.topIndexList.length;
        this.side2 = this.leftIndexList.length;
    }


    public initData(col: any, row: any) {
        // this.bodyData = [];
        for (let i = 0; i < row; i++) {
            this.setRowData();
        }
    }
    /**
     * 创建容器
     *
     * @private
     * @param {CellContainerInterface} data
     * @returns
     * @memberof BaseThead
     */
    public createContain(data?: CellContainerInterface) {
        const $positionManagerId = this.$positionManagerId;
        const $defConfigId = this.$defConfigId;
        const container = new TbodyContainer({
            type: 'tbody',
            side1: 1,
            side2: 1,
            $rootTable: this.$rootTable,
            $rootParent: this,
            $positionManagerId,
            $defConfigId,
            config: this.$rootParent.config
        });
        if (data) {
            container.setContainerData(data);
        }
        return container;
    }

    /**
     * render
     */
    public render() {
        const leftIndexList = this.leftIndexList;
        const topIndexList = this.topIndexList;
        this.resize();
        leftIndexList.forEach((leftIndexTh: IndexContainer) => {
            let tmpTr: any = {};
            if (this.bodyData.hasOwnProperty(leftIndexTh.id)) {
                tmpTr = this.bodyData[leftIndexTh.id];
            }
            topIndexList.forEach((topIndexTh: IndexContainer) => {
                let container: TbodyContainer = this.createContain();
                if (!tmpTr.hasOwnProperty(topIndexTh.id)) {
                    tmpTr[topIndexTh.id] = container;
                } else {
                    container = tmpTr[topIndexTh.id];
                }

                container.position = {
                    table: this.$rootTable.position.table,
                    colNum: topIndexTh.theadPosition[0],
                    rowNum: leftIndexTh.theadPosition[0],
                    colStr: _.getA_Z(topIndexTh.theadPosition[0]),
                    rowStr: leftIndexTh.theadPosition[0] + 1,
                };
                container.id = [leftIndexTh.id, topIndexTh.id];
                this.$positionManager.setPositionMap(container.position, container, 'source');

                const leftThead = leftIndexTh.$theadContainer;
                const topThead = topIndexTh.$theadContainer;
                let leftThTbdoyConfig = leftIndexTh.tbodyConfig.container;
                let topThTbdoyConfig = topIndexTh.tbodyConfig.container;
                // debugger
                let sumContainer: TheadContainer;
                if (/sum/.test(leftIndexTh.id)) {
                    topThTbdoyConfig = null;
                    sumContainer = leftThead;
                } else if (/sum/.test(topIndexTh.id)) {
                    leftThTbdoyConfig = null;
                    sumContainer = topThead;
                }
                if ((/sum/.test(topIndexTh.id) || /sum/.test(leftIndexTh.id)) && ((leftIndexTh.canSum || topThead === undefined) && (topIndexTh.canSum || leftThead === undefined))) {
                    // const sumContainer = leftIndexTh.id.indexOf('sum') !== -1 ? leftIndexTh.$theadContainer : topIndexTh.$theadContainer;
                    const parentContainer: TheadContainer = sumContainer.$rootParent.getContainerByTheadPosition(_.dropRight(sumContainer.theadPosition));
                    const containerList = new Array();
                    let count = 0;
                    for (let i = 0; i < _.last(sumContainer.theadPosition); i++) {
                        count += parentContainer.children[i].side1;
                    }
                    for (let i = 0; i < count; i++) {
                        if (sumContainer.type === 'top' && i) {
                            const stringPosition = _.getA_Z(sumContainer.position.colNum - (i) - 1) + container.position.rowStr;
                            containerList.push(stringPosition);
                        } else {
                            const stringPosition = container.position.colStr + (sumContainer.position.rowNum - i);
                            containerList.push(stringPosition);
                        }

                    }
                    if (container.renderByThead) {
                        // container.cell.setProperty('value', ('=' + containerList.join('+')));
                        container.cell.value = ('=' + containerList.join('+'));
                    }
                }
                if (container.renderByThead == true) {
                    container.setContainerData(leftThTbdoyConfig as any, topThTbdoyConfig as any, leftIndexTh.tbodyConfig.weight, topIndexTh.tbodyConfig.weight);
                }
                // console.log(container.position.colStr + '' + container.position.rowStr + ':' + container.renderByThead);
                container.style.width = topIndexTh.style.width;
                container.style.height = leftIndexTh.style.height;
                container.cell.render();
                container.widthNum = Number(container.style.width.replace('px', ''));
                container.heightNum = Number(container.style.height.replace('px', ''));
            });
            this.bodyData[leftIndexTh.id] = tmpTr;
        });
    }


    /**
     * getContainerById
     */
    public getContainerById(position: any[]) {
        let res = null;
        try {
            const leftId = position[0];
            const topId = position[1];
            if (this.bodyData.hasOwnProperty(leftId)) {
                const tmpTr = this.bodyData[leftId];
                if (tmpTr.hasOwnProperty(topId)) {
                    res = tmpTr[topId];

                }
            }
        } catch (error) {
            console.error('发生错误');
        }
        return res;
    }


    public convert() {
        const bodyData = new Array();
        this.leftIndexList.forEach((leftIndexTh: TheadContainer) => {
            if (this.bodyData.hasOwnProperty(leftIndexTh.id)) {
                const tmpTr = this.bodyData[leftIndexTh.id];
                const trData = new Array();
                this.topIndexList.forEach((topIndexTh: TheadContainer) => {
                    if (tmpTr.hasOwnProperty(topIndexTh.id)) {
                        const td = tmpTr[topIndexTh.id];
                        trData.push(td);
                        this.$positionManager.setPositionMap(td.position, td, 'clone');
                    }
                });
                bodyData.push(trData);
            }
        });
        return bodyData;
    }
    /**
     * 普通 list套object的输出
     *
     * @returns
     * @memberof BaseTbody
     */
    public output() {
        const res = new Array();
        this.leftIndexList.forEach((leftIndexTh: TheadContainer) => {
            if (this.bodyData.hasOwnProperty(leftIndexTh.id)) {
                const tmpTr = this.bodyData[leftIndexTh.id];
                const trData: any = {};
                this.topIndexList.forEach((topIndexTh: TheadContainer) => {
                    if (tmpTr.hasOwnProperty(topIndexTh.id)) {
                        trData[topIndexTh.id] = (tmpTr[topIndexTh.id].cell.content);
                    }
                });
                res.push(trData);
            }
        });
        return res;
    }

    /**
     * 用于序列化中的导出
     *
     * @returns
     * @memberof BaseTbody
     */
    public output2() {
        const res: any = {};
        this.leftIndexList.forEach((leftIndexTh: TheadContainer) => {
            if (this.bodyData.hasOwnProperty(leftIndexTh.id)) {
                const tmpTr = this.bodyData[leftIndexTh.id];
                const trData: any = {};
                this.topIndexList.forEach((topIndexTh: TheadContainer) => {
                    if (tmpTr.hasOwnProperty(topIndexTh.id)) {
                        trData[topIndexTh.id] = (tmpTr[topIndexTh.id] as TbodyContainer).clone(['$']);
                    }
                });
                res[leftIndexTh.id] = (trData);
            }
        });
        return res;
    }


    /**
     *   重写 clone
     */
    public clone(exclude?: string[], keep?: string[], withFunction?: boolean) {
        let object: any = {};
        exclude = exclude || [];
        exclude.push('bodyData');
        object = super.clone(exclude, keep, withFunction);
        object.bodyData = this.output2();
        return object;
    }
}
