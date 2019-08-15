import * as _ from '../utils';
import { CellContainerConfig } from './CellContainerConfig';
export class TheadContainerConfig extends CellContainerConfig {
    public span1: number = 1;
    public span2: number = 1;
    public canSum = false;
    public canDragResize = false;
    public draggable = true;// 是否可以拖动
    public $resizeChildren = [];
    public selfContainers = [];
    public theadPosition = new Array();
    public tbodyConfig = {};
    public children = [];
    public style = _.objectSet(this.style, {
        overflow: 'hidden',
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        background: '#f5f7fa',
    }, 'union');
}
