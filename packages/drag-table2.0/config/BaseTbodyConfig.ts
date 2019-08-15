import { CellContainerConfig } from './CellContainerConfig';
import * as _ from '../utils';
export class BaseTbodyConfig extends CellContainerConfig {
    public topIndexList = new Array();
    public leftIndexList = new Array();
    public bodyData = {};
    public style = _.objectSet(this.style, { background: '#fff', }, 'union');
}
