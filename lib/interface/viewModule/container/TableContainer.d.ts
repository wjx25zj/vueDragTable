import { BaseContainerInterface } from "./BaseContainer";
import { IndexContainerInterface } from "./IndexContainer";
import { TheadContainerInterface } from "./TheadContainer";
import { TbodyContainerInterface } from "./TbodyContainer";

export interface TableContainerInterface extends BaseContainerInterface {
    $selectBoxId?: any;

    isTopLeftShow?: boolean; // 左上角单元格是否显示表名
    topLeftValue?: string;
    isShowColIndex?: boolean;  // 是否显示 列标识：A、B、D、C
    isShowRowIndex?: boolean; // 是否显示 行标识：1、2、3、4
    isOverflowX?: boolean; // 超出宽X度是否出现滚动条
    isOverflowY?: boolean; // 超出高Y度是否出现滚动条

    debugLevel?: number; // 1为调试模式 0是正常模式
    canDragResize?: boolean; // 是否可以拖动 控制行列宽度
    hasTopFixedTable?: boolean; // 是否有上侧固定表头
    hasLeftFixedTable?: boolean; // 是否有左侧固定表头


    maxWidth?: string; // 如果加滚动条 表格最大宽度
    maxHeight?: string; // 如果加滚动条 表格最大高度
    scrollBarWidth?: string; // 右侧滚动条宽度
    scrollBarHeight?: string;// 底侧滚动条高度
}