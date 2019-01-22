import { TableContainerInterface } from "../container/TableContainer";
import { CellContainerInterface } from "../container/CellContainer";
import { PositionInterface } from "../../PositionInterface";
import { DefaultConfigInterface } from "../../config/DefaultConfig";
import { ParamTheadAdd, ParamTheadMove, ParamTheadDelete, ParamTheadMoveReplace } from './../../ProcessTheadInterface';
import { BaseTableInterface } from './BaseTable';
export interface BaseTableInterface extends TableContainerInterface {
    defaultConfig?: DefaultConfigInterface;
    $positionManager?: any;
    position?: PositionInterface;
    tableSubject?: any;
}