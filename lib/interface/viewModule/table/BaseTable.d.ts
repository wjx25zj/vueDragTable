import { TableContainerInterface } from "../container/TableContainer";
import { CellContainerInterface } from "../container/CellContainer";
import { PositionInterface } from "../../PositionInterface";
import { DragTableConfigInterface } from "../../config/DragTableConfig";
import { ParamTheadAdd, ParamTheadMove, ParamTheadDelete, ParamTheadMoveReplace, ParamTheadAddReplace } from './../../ProcessTheadInterface';
import { BaseTableInterface } from './BaseTable';
import { SubjectInterface } from "../../Subject";
import { TheadContainerInterface } from "../container/TheadContainer";
import { TbodyContainerInterface } from "../container/TbodyContainer";
import { AddDataPostionInterface } from "../tbody/BaseTbody";
import { TableConfigInterface } from "../../config/TableConfig";
export interface BaseTableInterface extends TableContainerInterface {
    position?: PositionInterface;
    $positionManager?: any;
    config?: BaseTableInterface;
    isTopLeftShow?: boolean; // 左上角单元格是否显示表名
    topLeftValue?: string;// 左上角单元格值
    tableName?: string; // 表名
    debugLevel?: number; // 1为调试模式 0是正常模式
  

    addParent?(newParentContainData?: TheadContainerInterface): void;
    getTheadLeavesList1?(theadType: 'top' | 'left'): TheadContainerInterface[] | null;
    setConfig?(config: TableConfigInterface): void;
    clone?(): object;
    setContainerData?(data: object): void;
    initTable?(width: number, height?: number): void
    addOneRow?(params?: {
        data?: object | any[] | CellContainerInterface[],
        param?: AddDataPostionInterface,
        render?: boolean;
    }): string;
    addOneCol?(params?: {
        data?: object | any[] | CellContainerInterface[],
        param?: AddDataPostionInterface,
        render?: boolean;
    }): string;
    setTbodyData?(data: object | Array<TbodyContainerInterface[] | object>): void;
    addSum?(newParentContainData?: TheadContainerInterface, param?: AddDataPostionInterface): void;
    delOneRowCol?(delType: 'row' | 'col', container?: CellContainerInterface): void
    merge?(): void;
    render?(): void;
    theadAdd?(param: ParamTheadAdd, render?: boolean): void;
    theadAddReplace?(param: ParamTheadAddReplace, render?: boolean): void;
    theadMove?(param: ParamTheadMove, render?: boolean): void;
    theadDelete?(param?: ParamTheadDelete, render?: boolean): void;
    theadMoveReplace?(param: ParamTheadMoveReplace, render?: boolean): void;
    onDestroy?(): void;
    getEntity?(type: 'left' | 'top' | 'left-index' | 'top-index' | 'tbody' | string): any;
    getTbodyData?(outPutType?: 'objectData' | 'arrayObjectData' | 'arrayArrayData', valueType?: 'content' | 'container'): any;
    setExpandedContainer?(defaultExpandedIds?: any[]): void;
    getAllHideContainer?(): Map<any, CellContainerInterface>; 
}