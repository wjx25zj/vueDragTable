import { TableContainerInterface } from "../container/TableContainer";
import { CellContainerInterface } from "../container/CellContainer";
import { PositionInterface } from "../../PositionInterface";
import { DefaultConfigInterface } from "../../config/DefaultConfig";
import { ParamTheadAdd, ParamTheadMove, ParamTheadDelete, ParamTheadMoveReplace, ParamTheadAddReplace } from './../../ProcessTheadInterface';
import { BaseTableInterface } from './BaseTable';
import { SubjectInterface } from "../../Subject";
import { TheadContainerInterface } from "../container/TheadContainer";
import { BaseTableConfigInterface } from "../../config/BaseTableConfig";
import { TbodyContainerInterface } from "../container/TbodyContainer";
import { AddDataPostionInterface } from "../tbody/BaseTbody";
export interface BaseTableInterface extends TableContainerInterface {
    $positionManager?: any;
    position?: PositionInterface;
    config?: BaseTableConfigInterface;
    addParent?(newParentContainData?: TheadContainerInterface): void;
    getTheadLeavesList1?(theadType: 'top' | 'left'): TheadContainerInterface[] | null;
    setConfig?(config: BaseTableConfigInterface): void;
    getContainer?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getTopIndexContainer?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getLeftIndexContainer?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getColObj?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any
    getRowObj?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any
    serialize?(): object;
    deserialize?(data: object): void;
    setDefaultConfig?(config: DefaultConfigInterface): void;
    initTable?(width: number, height?: number): void
    addOneRow?(rowData?: object | any[] | CellContainerInterface[], param?: AddDataPostionInterface): string;
    addOneCol?(colData?: object | any[] | CellContainerInterface[], param?: AddDataPostionInterface): string;
    setTbodyData?(data: object | Array<TbodyContainerInterface[] | object>): void;
    addSum?(newParentContainData?: TheadContainerInterface, param?: AddDataPostionInterface): void;
    delOneRowCol?(delType: 'row' | 'col', container?: CellContainerInterface): void
    merge?(): void;
    render?(): void;
    renderAll?(): void;
    theadAdd?(param: ParamTheadAdd, sendMsg?: boolean): void;
    theadAddPlace?(param: ParamTheadAddReplace, sendMsg?: boolean): void;
    theadMove?(param: ParamTheadMove, sendMsg?: boolean): void;
    theadDelete?(param?: ParamTheadDelete, sendMsg?: boolean): void;
    theadMoveReplace?(param: ParamTheadMoveReplace, sendMsg?: boolean): void;
}