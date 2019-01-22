import { BaseContainerConfigInterface } from "./BaseContainerConfig";

export interface BaseTableConfigInterface extends BaseContainerConfigInterface {
     isTopLeftShow?: boolean; // 左上角单元格是否显示表名
     tableName?: string; // 表名
     debugLevel?: number; // 1为调试模式 0是正常模式
     isShowColIndex?: boolean;  // 是否显示 列标识：A、B、D、C
     isShowRowIndex?: boolean; // 是否显示 行标识：1、2、3、4
     isOverflow?: boolean; // 超出宽度是否出现滚动条
     canResizeWidth?: boolean; // 是否可以拖动 控制行列宽度
     hasTopFixedTable?: boolean;
     hasLeftFixedTable?: boolean;
     hasTopThead?: boolean; // 是否有上表头
     hasLeftThead?: boolean; // 是否有左侧表头
     renderEvent?: string[];
     selectBoxId?: string;
     tableGroupId?: string;
     maxWidth?: string; // 如果加滚动条 表格默认宽度
     maxHeight?: string; // 如果加滚动条 表格默认高度
}
