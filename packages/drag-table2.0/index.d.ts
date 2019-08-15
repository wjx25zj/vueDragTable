

import { DragStartDataInterface } from './interface/DragStartData';
import { DragTransferDataInterface } from './interface/DragTransferData';
import { PositionInterface } from './interface/PositionInterface';
import { ParamTheadAdd, ParamTheadMove, ParamTheadDelete, ParamTheadMoveReplace, ParamTheadAddReplace } from './interface/ProcessTheadInterface';
import { DragTableConfigInterface as DragTableConfig} from './interface/config/DragTableConfig';

import { AddDataPostionInterface } from './interface/viewModule/tbody/BaseTbody';
import { TbodyContainerInterface } from './interface/viewModule/container/TbodyContainer';
import { CellContainerInterface as CellContainer } from './interface/viewModule/container/CellContainer';
import { PositionManagerInterface } from './interface/module/positionManager/PositionManager';
import { SubjectMsgInterface } from './interface/SubjectMsgInterface';
import { TreeContainerInterface as TreeContainer } from './interface/viewModule/container/TreeContainer';
import { BaseTableInterface as BaseTable } from './interface/viewModule/table/BaseTable';
import { TheadContainerInterface as TheadContainer } from './interface/viewModule/container/TheadContainer';
import { SubjectInterface as Subject } from './interface/Subject';

export const TableCom: any;

export class DragTable {
    constructor(id: any, defConfig?: DragTableConfig);
    id: string;
    $subject: Subject;
    $config: DragTableConfig;
    readonly version: string;
    tableList: BaseTable[];
    $positionManager: PositionManagerInterface;
    currentTable: BaseTable;
    createTable(param: BaseTable): BaseTable;
    deleteTable(key: any): void;
    addTable(table: BaseTable): void;
    addTable(table: BaseTable): PositionInterface;
    serialize(): BaseTable[];
    deserialize(jsonList: BaseTable[]): void;
    setConfig?(defConfig: DragTableConfig): void
    render(): void;
}
export {
    BaseTable,
    TheadContainer,
    TreeContainer,
    CellContainer,
    Subject,
    SubjectMsgInterface,
    ParamTheadAdd,
    ParamTheadMove,
    ParamTheadDelete,
    ParamTheadMoveReplace,
    DragStartDataInterface,
    DragTransferDataInterface
}


