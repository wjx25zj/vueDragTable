

import { DragStartDataInterface } from './interface/DragStartData';
import { DragTransferDataInterface } from './interface/DragTransferData';
import { PositionInterface } from './interface/PositionInterface';
import { ParamTheadAdd, ParamTheadMove, ParamTheadDelete, ParamTheadMoveReplace, ParamTheadAddReplace } from './interface/ProcessTheadInterface';
import { DefaultConfigInterface } from './interface/config/DefaultConfig';
import { TheadContainerInterface } from './interface/viewModule/container/TheadContainer';
import { BaseTableConfigInterface } from './interface/config/BaseTableConfig';
import { SubjectInterface } from './interface/Subject';
import { AddDataPostionInterface } from './interface/viewModule/tbody/BaseTbody';
import { TbodyContainerInterface } from './interface/viewModule/container/TbodyContainer';
import { BaseTableListConfigInterface } from './interface/config/BaseTableListConfig';
import { CellContainerInterface } from './interface/viewModule/container/CellContainer';
export const TableCom: any;
export const TableListCom: any;
export class BaseTable {
    $positionManager: any;
    position: PositionInterface;
    $subject: SubjectInterface;
    constructor(id: any, config?: BaseTableConfigInterface);
    addParent(newParentContainData?: TheadContainerInterface): void;
    getTheadLeavesList1(theadType: 'top' | 'left'): TheadContainerInterface[] | null;
    setConfig(config: BaseTableConfigInterface): void;
    getContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getTopIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getLeftIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getColObj(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any
    getRowObj(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any
    serialize(): object;
    deserialize(data: object): void;
    setDefaultConfig(config: DefaultConfigInterface): void;
    initTable(width: number, height?: number): void
    addOneRow(rowData?: object | any[] | CellContainerInterface[], param?: AddDataPostionInterface): string;
    addOneCol(colData?: object | any[] | CellContainerInterface[], param?: AddDataPostionInterface): string;
    setTbodyData(data: object | Array<TbodyContainerInterface[] | object>): void;
    addSum(newParentContainData?: TheadContainerInterface, param?: AddDataPostionInterface): void;
    delOneRowCol(delType: 'row' | 'col', container?: CellContainerInterface): void
    merge(): void;
    render(): void;
    renderAll(): void;
    theadAdd(param: ParamTheadAdd, sendMsg?: boolean): void;
    theadAddPlace(param: ParamTheadAddReplace, sendMsg?: boolean): void;
    theadMove(param: ParamTheadMove, sendMsg?: boolean): void;
    theadDelete(param?: ParamTheadDelete, sendMsg?: boolean): void;
    theadMoveReplace(param: ParamTheadMoveReplace, sendMsg?: boolean): void;
}
export {
    ParamTheadAdd, ParamTheadMove, ParamTheadDelete, ParamTheadMoveReplace, DragStartDataInterface, DragTransferDataInterface
}


