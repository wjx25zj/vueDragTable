import { BaseContainerConfig } from './BaseContainerConfig';

export class BaseTableConfig extends BaseContainerConfig {
    public isTopLeftShow?: boolean = false; // 左上角单元格是否显示表名
    public tableName?: string = ''; // 表名
    public debugLevel?: number = 0; // 1为调试模式 0是正常模式
    public selectBoxId?: string; // focus框
    public tableGroupId?: string;
    public isShowColIndex?: boolean = true;  // 是否显示 列标识：A、B、D、C
    public isShowRowIndex?: boolean = true; // 是否显示 行标识：1、2、3、4
    public isOverflow?: boolean = false; // 超出宽度是否出现滚动条
    public canResizeWidth?: boolean = false; // 是否可以拖动 控制行列宽度
    public hasTopFixedTable?: boolean = true; // 是否有上侧固定表头
    public hasLeftFixedTable?: boolean = true; // 是否有左侧固定表头
    public hasTopThead?: boolean = true; // 是否有上表头
    public hasLeftThead?: boolean = true; // 是否有左侧表头
    public renderEvent?: string[] = ['blur', 'change', 'paste'];
    public maxWidth?: string = '100%'; // 如果加滚动条 表格默认宽度
    public maxHeight?: string = '200px'; // 如果加滚动条 表格默认高度
}
