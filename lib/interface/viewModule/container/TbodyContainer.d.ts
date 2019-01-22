import { CellContainerInterface } from "./CellContainer";
import { BaseCellInterface } from "../cell/BaseCellInterface";
import { BaseTbodyInterface } from "../tbody/BaseTbody";

export interface TbodyContainerInterface extends CellContainerInterface {
    cell?: BaseCellInterface;
    renderByThead?: boolean;
    $rootParent?: BaseTbodyInterface;
}