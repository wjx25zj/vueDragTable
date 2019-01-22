import { CellContainerInterface } from "../../viewModule/container/CellContainer";
import { PositionInterface } from "../../PositionInterface";

export interface PositionManagerInterface {
    type?: 'single-table' | 'multi-table';
    $editContainer?: CellContainerInterface | null;
    canFocus?: boolean;
    getContainer?(position: PositionInterface): any
}