import { CellContainerInterface } from "./CellContainer";
import { BaseCellInterface } from "../cell/BaseCellInterface";
import { BaseTbodyInterface } from "../tbody/BaseTbody";

export interface TbodyContainerInterface extends CellContainerInterface {
    renderByThead?: boolean;
    $rootParent?: BaseTbodyInterface;
}