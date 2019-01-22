
import * as _ from '../utils';
import { CellContainerConfig } from './CellContainerConfig';
export class BaseTheadConfig extends CellContainerConfig {
    public draggable?: boolean = true; // 是否可以拖动
    constructor() {
        super();
        const style = {
            background: '#f5f7fa',
            cursor: 'pointer',
        };
        _.objectSet(this.style, style, 'union');
    }
}
