import * as _ from '../utils';
import { TheadContainerConfig } from './TheadContainerConfig';
export class IndexContainerConfig extends TheadContainerConfig {
    public  $positionCheck = new Array();
    public  canSum = true;
    public  style = _.objectSet(this.style, {background: '#fff', }, 'union');
}
