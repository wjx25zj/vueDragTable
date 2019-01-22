import { CellContainerInterface } from './CellContainer';
import { TbodyContainerInterface } from './TbodyContainer';
import { IndexContainerInterface } from './IndexContainer';
import { BaseTheadInterface } from '../thead/BaseThead';
export interface TheadContainerInterface extends CellContainerInterface {
    type?: 'top' | 'left' | 'top-index' | 'left-index' ;
    span1?:number;
    span2?:number;
    canSum?:boolean;
    $rootParent?: BaseTheadInterface;
    children?: TheadContainerInterface[];
    theadPosition?: number[];
    positionCheck?: boolean;
    childrenShow?:boolean;
    mergeList?: any[];
    id?: any;
    tbodyConfig?: {
        container?: TbodyContainerInterface
        weight?: any
    };
    createContain?(data?: TheadContainerInterface): TheadContainerInterface;
}
