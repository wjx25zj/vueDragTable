import * as _ from '../utils';
import { CellContainerConfig } from './CellContainerConfig';
export class TbodyContainerConfig extends CellContainerConfig {
    public separator = '_';
    public style = _.objectSet(this.style, {
        background: '#fff',
    }, 'union');
}
