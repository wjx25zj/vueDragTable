import { TbodyContainerInterface } from './TbodyContainer';
import { TheadContainerInterface } from './TheadContainer';
import { IndexTheadInterface } from '../thead/IndexThead';
export interface IndexContainerInterface extends TheadContainerInterface {
    $rootParent?: IndexTheadInterface;
    $theadContainer?:TheadContainerInterface;
    type?: 'top' | 'left' | 'top-index' | 'left-index';
    children?: IndexContainerInterface[];
    renderId?: string;
}
