import { PositionInterface } from '../../PositionInterface';
import { BaseContainerInterface } from '../../BaseContainer';
import { TableContainerInterface } from './TableContainer';
import { BaseTableInterface } from '../table/BaseTable';
import { BaseCellInterface } from '../cell/BaseCellInterface';

export interface CellContainerInterface extends BaseContainerInterface {
    cell?: BaseCellInterface;
    config?: any;
    type?: string;
    position?: PositionInterface;
    side1?: number;
    side2?: number;
    $rootTable?: BaseTableInterface;
    $rootParent?: any
}
