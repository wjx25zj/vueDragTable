import { CellContainerInterface } from './CellContainer';
import { TbodyContainerInterface } from './TbodyContainer';
import { IndexContainerInterface } from './IndexContainer';
import { BaseTheadInterface } from '../thead/BaseThead';
import { TreeContainerInterface } from './TreeContainer';
export interface TheadContainerInterface extends CellContainerInterface {
    type?: 'top' | 'left' | 'top-index' | 'left-index';
    span1?: number;
    span2?: number;
    canSum?: boolean;
    treeContainer?: TreeContainerInterface;
    addByTree?: boolean;
    $rootParent?: BaseTheadInterface;
    children?: TheadContainerInterface[];
    theadPosition?: number[];
    $positionCheck?: string[];
    tbodyConfig?: {
        container?: TbodyContainerInterface
        weight?: any
    };
    createContain?(data?: TheadContainerInterface): TheadContainerInterface;
    setContainerData?(containerData: TheadContainerInterface, containerData2?: TheadContainerInterface, weight1?: object, weight2?: object, callBack?: any): void
}
