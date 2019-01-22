import { CellContainerConfig } from './CellContainerConfig';
import * as _ from '../utils';
export class BaseTbodyConfig extends CellContainerConfig {
    constructor() {
        super();
        const style = {
            background: '#fff',
        };
        _.objectSet(this.style, style, 'union');
    }
}
