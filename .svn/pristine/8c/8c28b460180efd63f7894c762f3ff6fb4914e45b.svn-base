import * as _ from '../../utils/index';
import { DefaultConfig } from '../../config/DefaultConfig';
import { BaseContainer } from './BaseContainer';
import { TableContainerInterface } from '../../interface/viewModule/container/TableContainer';
import { SelectBox } from '../selectBox/SelectBox';
import { CellContainer } from './CellContainer';
import { BaseTableConfig } from 'packages/drag-table2.0/config/BaseTableConfig';
export class TableContainer extends BaseContainer {
    public $selectBoxEntity: SelectBox<CellContainer>; // 单元格样式处理单元
    public $selectBoxId: string;
    public config: BaseTableConfig;
    constructor(param: TableContainerInterface) {
        super(param);
        this.$selectBoxId = param.$selectBoxId;
        this.$selectBoxEntity = SelectBox.getInstance(this.$selectBoxId, this);
    }
    /**
     * 设置默认设置
     *
     * @public
     * @param {*} config
     * @memberof BaseTable
     */
    public setDefaultConfig(config: DefaultConfig): void {
        try {
            _.objectSet(this.$defaultConfig, config, 'union');
        } catch (error) {
            console.error('initDefaultConfig error');
        }
    }

    public setConfig(config: any): void {
        super.setConfig(config);
        this.$selectBoxEntity.clear();
    }

    public renderAll() {
        this.$positionManager.render();
    }

    /**
     * onClick
     */
    public onClick(ev: any) {
        this.subjectSend({
            ev_type: 'click',
            event: ev,
            data: {
                objectName: 'TableContainer',
                object: this,
            },
        });
    }
}
