import { BaseContainerConfig } from './BaseContainerConfig';
import { BaseCellInterface } from '../interface/viewModule/cell/BaseCellInterface';
import { BaseCellConfig } from './BaseCellConfig';

export class CellContainerConfig extends BaseContainerConfig {
    public widthNum?: number = 0;
    public heightNum?: number = 0;
    public widthChildNum?: number = 0;
    public heightChildNum?: number = 0;
    public widthSelfNum?: number = 110;
    public heightSelfNum?: number = 38;
    public paddingLeftNum: number = 0;
    public children = new Array();
    public isRootParent = false;
    public $inSystem = false;
    public cell?: BaseCellInterface = new BaseCellConfig();
    public hideType = 'visible';
    public $positionCheck = ['top', 'bottom', 'left', 'right', 'inner'];
    public side1 = 1;
    public side2 = 1;
    public span1 = 1;
    public span2 = 1;
    public style?: any = {
        padding: '0px 0px',
        // width: '110px',
        // height: '38px',
        overflow: 'hidden',
        userSelect: 'text',
        boxSizing: 'border-box',
        position: 'relative'
    };
}
