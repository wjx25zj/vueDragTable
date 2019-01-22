
import { BaseCell } from '../cell/BaseCell';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import * as _ from '../../utils';
import { CellContainer } from './CellContainer';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
import { IndexContainer } from './IndexContainer';
// 只有对于容器来说才有相对位置

export class TbodyContainer extends CellContainer {
    public children: CellContainer[] = new Array(); // 子容器

    public renderByThead: boolean = true;
    /**
     * 设置tbody属性 部分特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TbodyContainer
     */
    public setContainerData(containerData: CellContainerInterface, containerData2?: CellContainerInterface, weight1?: object, weight2?: object) {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                const value: any = this.getDataByWeight(key, containerData, containerData2, weight1, weight2);
                if (value === undefined) {
                    continue;
                }
                if (key === 'cell' && value) {
                    this.cell.setCellData(value);
                } else if (typeof value === 'object' && !Array.isArray(value) && key.indexOf('$') === -1) {
                    _.objectSet(this[key], value, 'union');
                } else {
                    this.setProperty(key, value);
                }
            }
        }
    }



    /**
     * parpare
     */
    private getDataByWeight(key: string, data1?: any, data2?: any, weight1?: any, weight2?: any) {
        const dk1 = data1 ? (data1[key] || undefined) : undefined;
        const dk2 = data2 ? data2[key] || undefined : undefined;
        const wk1 = weight1 ? weight1[key] || undefined : undefined;
        const wk2 = weight2 ? weight2[key] || undefined : undefined;
        let resData: any;
        if (dk1 && dk2) {
            if (wk1 && wk2) {
                if (!isNaN(wk1) && !isNaN(wk2)) {
                    resData = wk1 > wk2 ? dk1 : dk2;
                } else if (!isNaN(wk1) && isNaN(wk1)) {
                    resData = dk1;
                } else if (isNaN(wk1) && !isNaN(wk1)) {
                    resData = dk2;
                } else if (typeof wk1 === 'object' && typeof wk2 === 'object') {
                    resData = {};
                    for (const sonKey in dk1) {
                        if (dk1.hasOwnProperty(sonKey) && !resData.hasOwnProperty(sonKey)) {
                            const sonValue = this.getDataByWeight(sonKey, dk1, dk2, wk1, wk2);
                            resData[sonKey] = sonValue;
                        }
                    }
                    for (const sonKey in dk2) {
                        if (dk2.hasOwnProperty(sonKey) && !resData.hasOwnProperty(sonKey)) {
                            const sonValue = this.getDataByWeight(sonKey, dk1, dk2, wk1, wk2);
                            resData[sonKey] = sonValue;
                        }
                    }
                }
            } else if (wk1 && !wk2) {
                resData = dk1;
            } else if (!wk1 && wk2) {
                resData = dk2;
            } else if (!wk1 && !wk2) {
                resData = dk1;
            }
        } else if (dk1 === undefined && dk2) {
            resData = dk2;
        } else if (dk1 && dk2 === undefined) {
            resData = dk1;
        } else if (dk1 === undefined && dk2 === undefined) {
            //
        }
        return resData;
    }
}

