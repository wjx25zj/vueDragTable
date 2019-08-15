import * as _ from '../utils';
import { IndexContainerConfig } from './IndexContainerConfig';
export class IndexTheadConfig extends IndexContainerConfig {
    public $leafIndexListTmp = new Array();
    public $leafIndexListTmp2 = new Array();
    public side1 = 0;
    public side2 = 0;
    public span1 = 0;
    public span2 = 0;
    public isRootParent = true;
    public  style = _.objectSet(this.style,{
        overflow: 'hidden',
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        userSelect: 'none',
        background: '#fff',
        zIndex: 99
    }, 'union');
}
