import { CellContainerInterface } from "../../viewModule/container/CellContainer";
import { PositionInterface } from "../../PositionInterface";

export interface PositionManagerInterface {
    type?: string;
    $editContainer?: CellContainerInterface | null;
    canFocus?: boolean;
    getContainer?(position: PositionInterface): any
}