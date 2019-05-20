import { PositionInterface } from "../../PositionInterface";
import { SubjectInterface } from "../../Subject";
import { DragTableConfigInterface } from "../../config/DragTableConfig";
import { SubjectMsgInterface } from "../../SubjectMsgInterface";
import { PositionManagerInterface } from "../../module/positionManager/PositionManager";
import { BaseTableInterface } from "../table/BaseTable";
import { IndexContainerInterface } from "./IndexContainer";
import { TheadContainerInterface } from "./TheadContainer";
import { TbodyContainerInterface } from "./TbodyContainer";

export interface BaseContainerInterface {
    id?: any;
    type?: 'top' | 'left' | 'top-index' | 'left-index' | 'inner' | 'tbody' | 'table';
    $groupId?: string;
    readonly?: boolean;
    draggable?: boolean;
    $subject?: SubjectInterface;
    config?: any;
    style?: any;
    userData?: any;
    $dragTableConfig?: DragTableConfigInterface;
    $positionManager?: PositionManagerInterface;
    position?: PositionInterface;
    $rootTable?: BaseTableInterface;
    children?: any[];
    $inSystem?: boolean;
    widthNum?: number;
    heightNum?: number;
    widthChildNum?: number;
    heightChildNum?: number;
    widthSelfNum?: number;
    heightSelfNum?: number;
    paddingLeftNum?: number;
    paddingRightNum?: number;


    setConfig?(config: any): void
    getContainer?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): TheadContainerInterface | TbodyContainerInterface | IndexContainerInterface;
    getTopIndexContainer?(position: PositionInterface): any;
    getLeftIndexContainer?(position: PositionInterface): any;
    getColObj?(position: PositionInterface): any;
    getRowObj?(position: PositionInterface): any;
    saveLastPositionMap?(position: PositionInterface): object
    onClick?(ev: any): void;
    setContainerData?(containerData: BaseContainerInterface, containerData2?: BaseContainerInterface, weight1?: object, weight2?: object, callBack?: any): void;
    setProperty?(key: string, val: any): void;
    subjectSend?(msg: SubjectMsgInterface): void;
    getContainer?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getTopIndexContainer?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getLeftIndexContainer?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getColObj?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
    getRowObj?(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any;
}
