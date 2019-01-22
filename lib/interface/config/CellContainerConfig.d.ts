import { BaseContainerConfigInterface } from "./BaseContainerConfig";

export interface CellContainerConfigInterface extends BaseContainerConfigInterface {
    readonly?: boolean; // 表头是否可以编辑
    baseSide1?: number; // 长边长度
    baseSide2?: number; // 短边长度
    style?: any;
}
