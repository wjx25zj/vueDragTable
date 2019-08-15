import { PositionInterface } from '../interface/PositionInterface';

export class BaseContainerConfig {
    public readonly?: boolean; // 表头是否可以编辑
    public style?: any = {};
    public config?: any = {};
    public userData?: any = {};

    public position?: PositionInterface = {
        table: 0,
        colNum: 0,
        rowNum: 0,
    };
}
