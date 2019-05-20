import { TbodyContainerInterface } from './TbodyContainer';
import { IndexContainerInterface } from './IndexContainer';
import { BaseTheadInterface } from '../thead/BaseThead';
import { TheadContainerInterface } from './TheadContainer';
import { SelfContainerInterface } from './SelfContainer';
export interface TreeContainerInterface extends SelfContainerInterface {
    $rootParent?: BaseTheadInterface;
    children?: TheadContainerInterface[];
    createContain?(data?: TheadContainerInterface): TheadContainerInterface;
    setContainerData?(containerData: TreeContainerInterface, containerData2?: TreeContainerInterface, weight1?: object, weight2?: object, callBack?: any):void;
    addChildrenAsy?(p: Promise<TheadContainerInterface[]>): void
}
