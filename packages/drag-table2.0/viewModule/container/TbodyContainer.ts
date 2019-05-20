
import { BaseCell } from '../cell/BaseCell';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import * as _ from '../../utils';
import { CellContainer } from './CellContainer';
// 只有对于容器来说才有相对位置

export class TbodyContainer extends CellContainer {
    public renderByThead: boolean;

    public initBeforeSetData(paramClone?: any): void {
        super.initBeforeSetData(paramClone);
        this.config = _.clone(this.$dragTableConfig.TbodyContainerConfig);
        // _.objectSet(this.config, this.$dragTableConfig.TbodyContainerConfig, 'union');
        _.objectSet(paramClone, this.$dragTableConfig.tbodyContainer, 'union');
        this.renderByThead = true;
    }

    /**
     * 设置tbody属性 部分特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TbodyContainer
     */
    public setContainerData(containerData: CellContainerInterface, containerData2?: CellContainerInterface, weight1?: object, weight2?: object, callBack?: any) {
        super.setContainerData(containerData, containerData2, weight1, weight2, callBack);
    }

}

