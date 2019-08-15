
import * as _ from '../utils';
import { TheadContainerConfig } from './TheadContainerConfig';
export class BaseTheadConfig extends TheadContainerConfig {
    public draggable: boolean = true; // 是否可以拖动
    public readonly?: boolean = false; // 表头是否可以编辑
    public $leafIndexListTmp = new Array();
    public $leafIndexListTmp2 = new Array();
    public side1 = 0;
    public side2 = 0;
    public span1 = 0;
    public span2 = 0;
    public isRootParent = true;
    public style = _.objectSet(this.style, {
        background: '#f5f7fa',
        cursor: 'pointer',
    }, 'union');

}
