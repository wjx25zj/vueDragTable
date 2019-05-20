import { TbodyContainer } from '../container/TbodyContainer';
import { TheadContainer } from '../container/TheadContainer';
import * as _ from '../../utils';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import { BaseTbodyInterface } from '../../interface/viewModule/tbody/BaseTbody';
import { TbodyContainerInterface } from '../../interface/viewModule/container/TbodyContainer';
import { IndexContainerInterface } from '../../interface/viewModule/container/IndexContainer';
export class BaseTbody extends TbodyContainer {
    public topIndexList: IndexContainerInterface[];
    public leftIndexList: IndexContainerInterface[];
    public bodyData: any;
    constructor(param: BaseTbodyInterface) {
        super(param);
        this.$rootParent = this;
        this.cell = null;
    }

    public initBeforeSetData(paramClone?: any): void {
        super.initBeforeSetData(paramClone);
        _.objectSet(this.config, this.$dragTableConfig.BaseTbodyConfig, 'union');
        _.objectSet(paramClone, this.$dragTableConfig.baseTbody, 'union');
    }
    /**
     * 添加一行数据
     *
     * @param {any[]} rowData
     * @returns
     * @memberof BaseTbody
     */
    public setRowData(leftId?: any, rowData?: object | TbodyContainer[]): string {
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
                    const topId = this.topIndexList[j].renderId;
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
    public setColData(topId?: any, colData?: object | TbodyContainer[]): string {
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
                    const leftId = this.leftIndexList[j].renderId;
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
     * setTBodyData
     */
    public setTbodyData(data: object | Array<TbodyContainerInterface[] | object>): void {
        // debugger
        try {
            if (Array.isArray(data)) {
                data.forEach((rowData: object | any[], i: number) => {
                    const leftId = this.leftIndexList[i].renderId;
                    this.setRowData(leftId, rowData);
                });
            } else if (typeof data === 'object') {
                for (const leftId in data) {
                    if (data.hasOwnProperty(leftId)) {
                        this.setRowData(leftId, data[leftId]);
                    }
                }
            }
        } catch (error) {
            console.error(error);
            console.error('输入数据格式有误');
        }
        this.subjectSend(
            {
                ev_type: 'beforeRender',
                render: true,
                event: null,
                data: {
                    objectName: 'setTbodyData',
                    object: null
                }
            }
        );
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
    public setContainerData(containerData: CellContainerInterface, containerData2?: CellContainerInterface, weight1?: object, weight2?: object, callBack?: any) {

        const conditionHandle = (key: string, value: any) => {
            // debugger
            if (key === 'bodyData') {
                this.setTbodyData(value);
                return;
            }
            this.setProperty(key, value);

        };
        super.setContainerData(containerData, containerData2, weight1, weight2, conditionHandle);
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
    /**
     * 创建容器
     *
     * @private
     * @param {CellContainerInterface} data
     * @returns
     * @memberof BaseThead
     */
    public createContain(data?: CellContainerInterface) {
        const $groupId = this.$groupId;
        const container = new TbodyContainer({
            type: 'tbody',
            side1: 1,
            side2: 1,
            $groupId,
            $rootTable: this.$rootTable,
            $rootParent: this,
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
    public render(): void {
        const leftIndexList = this.leftIndexList;
        const topIndexList = this.topIndexList;
        this.resize();
        leftIndexList.forEach((leftIndexTh: IndexContainerInterface) => {
            let tmpTr: any = {};
            if (this.bodyData.hasOwnProperty(leftIndexTh.renderId)) {
                tmpTr = this.bodyData[leftIndexTh.renderId];
            }
            topIndexList.forEach((topIndexTh: IndexContainerInterface) => {
                let container: TbodyContainer = this.createContain();
                if (!tmpTr.hasOwnProperty(topIndexTh.renderId)) {
                    tmpTr[topIndexTh.renderId] = container;
                } else {
                    container = tmpTr[topIndexTh.renderId];
                }

                container.position = {
                    table: this.$rootTable.position.table,
                    colNum: topIndexTh.theadPosition[0],
                    rowNum: leftIndexTh.theadPosition[0],
                    colStr: _.getA_Z(topIndexTh.theadPosition[0]),
                    rowStr: leftIndexTh.theadPosition[0] + 1,
                };
                container.id = leftIndexTh.renderId + '-' + topIndexTh.renderId;
                this.$positionManager.setPositionMap(container.position, container, 'source');

                const leftThead = leftIndexTh.$theadContainer;
                const topThead = topIndexTh.$theadContainer;
                let leftThTbdoyConfig = leftIndexTh.tbodyConfig.container || {};
                let topThTbdoyConfig = topIndexTh.tbodyConfig.container || {};
                // debugger
                let sumContainer: TheadContainer;
                if (/sum/.test(leftIndexTh.renderId)) {
                    topThTbdoyConfig = {};
                    sumContainer = leftThead as TheadContainer;
                } else if (/sum/.test(topIndexTh.renderId)) {
                    leftThTbdoyConfig = {};
                    sumContainer = topThead as TheadContainer;
                }
                if ((/sum/.test(topIndexTh.renderId) || /sum/.test(leftIndexTh.renderId)) && ((leftIndexTh.canSum || topThead === undefined) && (topIndexTh.canSum || leftThead === undefined))) {
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

                // if (container.id === 'none-zj') {
                //     debugger
                // }
                const renderByThead = this.getDataByWeight('renderByThead', leftThTbdoyConfig, topThTbdoyConfig, leftIndexTh.tbodyConfig.weight, topIndexTh.tbodyConfig.weight);
                container.renderByThead = renderByThead === undefined ? container.renderByThead : renderByThead;
                if (container.renderByThead == true) {
                    container.setContainerData(leftThTbdoyConfig, topThTbdoyConfig, leftIndexTh.tbodyConfig.weight, topIndexTh.tbodyConfig.weight);
                }
                container.style.width = topIndexTh.style.width;
                container.style.height = leftIndexTh.style.height;
                container.widthSelfNum = topIndexTh.widthNum;
                container.heightSelfNum = topIndexTh.heightNum;
                container.cell.render();
            });
            this.bodyData[leftIndexTh.renderId] = tmpTr;
        });
    }

    public convert(): TbodyContainerInterface[][] {
        const bodyData = new Array();
        this.leftIndexList.forEach((leftIndexTh: IndexContainerInterface) => {
            if (this.bodyData.hasOwnProperty(leftIndexTh.renderId)) {
                const tmpTr = this.bodyData[leftIndexTh.renderId];
                const trData = new Array();
                this.topIndexList.forEach((topIndexTh: IndexContainerInterface) => {
                    if (tmpTr.hasOwnProperty(topIndexTh.renderId)) {
                        const td = tmpTr[topIndexTh.renderId];
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
    public outputByList(): TbodyContainerInterface[][] {
        const res = new Array();
        this.leftIndexList.forEach((leftIndexTh: IndexContainerInterface) => {
            if (this.bodyData.hasOwnProperty(leftIndexTh.renderId)) {
                const tmpTr = this.bodyData[leftIndexTh.renderId];
                const trData: any = {};
                this.topIndexList.forEach((topIndexTh: IndexContainerInterface) => {
                    if (tmpTr.hasOwnProperty(topIndexTh.renderId)) {
                        trData[topIndexTh.renderId] = (tmpTr[topIndexTh.renderId].cell.content);
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
    public outputByObject(): object {
        const res: any = {};
        this.leftIndexList.forEach((leftIndexTh: IndexContainerInterface) => {
            if (this.bodyData.hasOwnProperty(leftIndexTh.renderId)) {
                const tmpTr = this.bodyData[leftIndexTh.renderId];
                const trData: any = {};
                this.topIndexList.forEach((topIndexTh: IndexContainerInterface) => {
                    if (tmpTr.hasOwnProperty(topIndexTh.renderId)) {
                        trData[topIndexTh.renderId] = (tmpTr[topIndexTh.renderId] as TbodyContainer).clone();
                    }
                });
                res[leftIndexTh.renderId] = (trData);
            }
        });
        return res;
    }
}
