import { BaseContainerConfig } from './BaseContainerConfig';

export class BaseTableConfig extends BaseContainerConfig {
    public type: any = 'table';
    public isTopLeftShow?: boolean = false; // 左上角单元格是否显示表名
    public tableName?: string = ''; // 表名
    public debugLevel?: number = 0; // 1为调试模式 0是正常模式
    public isShowColIndex?: boolean = true;  // 是否显示 列标识：A、B、D、C
    public isShowRowIndex?: boolean = true; // 是否显示 行标识：1、2、3、4
    public isOverflowX?: boolean = false; // 超出宽X度是否出现滚动条
    public isOverflowY?: boolean = false; // 超出高Y度是否出现滚动条
    public canDragResize?: boolean = false; // 是否可以拖动 控制行列宽度
    public hasTopFixedTable?: boolean = true; // 是否有上侧固定表头
    public hasLeftFixedTable?: boolean = true; // 是否有左侧固定表头
    public maxWidth?: string = '100%'; // 如果加滚动条 表格默认宽度
    public maxHeight?: string = '400px'; // 如果加滚动条 表格默认高度
    public scrollBarWidth?: string = '17px'; // 右侧滚动条宽度
    public scrollBarHeight?: string = '17px';// 底侧滚动条高度
    public defaultExpandedIds: string[] = [];// 默认展开树形容器节点id
    public style = {
        scrollTop: 0, // 滚动条 用于主表与上侧固定表头滚动条联动操作
        scrollLeft: 0, // 滚动条 用于主表与左侧固定表头滚动条联动操作
        mainTable: {
        },
        topTable: {
        },
        leftTable: {
        }
    };
}
