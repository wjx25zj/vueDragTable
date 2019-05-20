import { PositionInterface } from '../../PositionInterface';
import { BaseContainerInterface } from './BaseContainer';
import { TableContainerInterface } from './TableContainer';
import { BaseTableInterface } from '../table/BaseTable';
import { BaseCellInterface } from '../cell/BaseCellInterface';
import { SubjectMsgInterface } from '../../SubjectMsgInterface';

export interface CellContainerInterface extends BaseContainerInterface {
    cell?: BaseCellInterface;
    position?: PositionInterface;
    isRootParent?: boolean;
    $rootParent?: any
    hideType?: 'visible' | 'hideChildrenHeight' | 'hideAll' | 'hideAll-tree' | 'hideSelf';
    hideTypeTemporary?: 'visible' | 'hideChildrenHeight' | 'hideAll' | 'hideAll-tree' | 'hideSelf';
    side1?: number; // 横表头 为width 纵表头为height
    side2?: number; // 纵表头 为width 横表头为height
    span1?: number; // 横表头 为colspan 纵表头为rowspan
    span2?: number; // 横表头 为rowspan 纵表头为colspan
}
