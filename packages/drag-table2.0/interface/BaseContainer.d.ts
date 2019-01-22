import { PositionInterface } from "./PositionInterface";
import { SubjectInterface } from "./Subject";

export interface BaseContainerInterface {
    id?: any;
    $subject?:SubjectInterface;
    $defConfigId?: any;
    $positionManagerId?: string;
    config?: any;
    position?:PositionInterface;
    setConfig?(config: any): void
    getContainer?(position: PositionInterface): any;
    getTopIndexContainer?(position: PositionInterface):any;
    getLeftIndexContainer?(position: PositionInterface) :any;
    getColObj?(position: PositionInterface): any;
    getRowObj?(position: PositionInterface): any;
}
