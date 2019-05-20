import * as _ from '../../utils/index';
import { BaseContainer } from './BaseContainer';
import { TableContainerInterface } from '../../interface/viewModule/container/TableContainer';
import { SelectBox } from '../selectBox/SelectBox';
import { CellContainer } from './CellContainer';
import { BaseTableConfig } from '../../config/BaseTableConfig';
import { TheadContainer } from './TheadContainer';
import { BaseThead } from '../thead/BaseThead';
import { IndexThead } from '../thead/IndexThead';
import { BaseTbody } from '../tbody/BaseTbody';
import { IndexContainerInterface } from '../../interface/viewModule/container/IndexContainer';
import { TbodyContainerInterface } from '../../interface/viewModule/container/TbodyContainer';
export class TableContainer extends BaseContainer {
    public tableName: string = ''; // 表格名称
    public $selectBoxEntity: SelectBox<CellContainer>; // 单元格样式处理单元
    public $colNumber?: IndexContainerInterface[] = new Array(); //  列标识：最上面'A', 'B', 'C', 'D'.....
    public $rowNumber?: IndexContainerInterface[] = new Array(); // 行标识: 最左边面1, 2, 3, 4, 5.....
    public $tableHeadTop?: TheadContainer[][] = new Array(); // 用于显示的上侧表头 直接用于上表头的渲染
    public $tableHeadLeft?: TheadContainer[][] = new Array(); // 用于显示的左侧表头 直接用于左表头的渲染
    public $tableBody?: TbodyContainerInterface[][] = new Array(); // 用于显示的表内容
    public $keyDownSet?: Set<string> = new Set(); // 键盘按键按下状态的Set
    public config: BaseTableConfig;
    public tableHeadTopLeft?: TheadContainer;
    public theadTopEntity?: BaseThead; // 上侧表头实体
    public theadLeftEntity?: BaseThead; // 左侧表头实体
    public theadTopIndexEntity?: IndexThead; // 上侧列标识实体
    public theadLeftIndexEntity?: IndexThead; // 左侧行标识实体
    public tbodyEntity?: BaseTbody; // 表内容实体

    public isTopLeftShow?: boolean; // 左上角单元格是否显示表名
    public topLeftValue: string;
    public isShowColIndex?: boolean;  // 是否显示 列标识：A、B、D、C
    public isShowRowIndex?: boolean; // 是否显示 行标识：1、2、3、4
    public isOverflowX?: boolean; // 超出宽X度是否出现滚动条
    public isOverflowY?: boolean; // 超出高Y度是否出现滚动条

    public debugLevel?: number; // 1为调试模式 0是正常模式
    public canDragResize?: boolean; // 是否可以拖动 控制行列宽度
    public hasTopFixedTable?: boolean; // 是否有上侧固定表头
    public hasLeftFixedTable?: boolean; // 是否有左侧固定表头

    public maxWidth?: string; // 如果加滚动条 表格默认宽度
    public maxHeight?: string; // 如果加滚动条 表格默认高度
    public scrollBarWidth?: string;
    public scrollBarHeight?: string;


    constructor(param: TableContainerInterface) {
        super(param);
    }

    public initBeforeSetData(paramClone?: any): void {
        super.initBeforeSetData(paramClone);
    }


    /**
     * 按键抬起
     *
     * @param {*} ev
     * @memberof BaseTable
     */
    public onKeyUp(ev: any): void {
        this.$keyDownSet.delete(ev.key);
    }

    /**
     * 按键按下
     *
     * @param {*} ev
     * @memberof BaseTable
     */
    public onKeyDown(ev: any): void {
        this.$keyDownSet.add(ev.key);
    }



    /**
     * onClick
     */
    public onClick(ev: any): void {
        this.subjectSend({
            ev_type: 'click',
            event: ev,
            data: {
                objectName: 'TableContainer',
                object: this,
            },
        });
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
}
