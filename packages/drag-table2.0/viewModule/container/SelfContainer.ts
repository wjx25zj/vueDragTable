import * as _ from '../../utils';
import { TheadContainer } from './TheadContainer';
import { BaseContainer } from './BaseContainer';
import { SelfContainerInterface } from '../../interface/viewModule/container/SelfContainer';

// 只有对于容器来说才有相对位置
export class SelfContainer extends BaseContainer {
    public show: boolean;
    public type: any;
    public rightNum: number;
    public $parent: TheadContainer;
    public svg: any;
    
    constructor(param: SelfContainerInterface) {
        super(param);
    }
    /**
     * initBeforeSetData
     */
    public initBeforeSetData(paramClone?: any) {
        super.initBeforeSetData(paramClone);
        this.$parent = paramClone.$parent;
        this.config = _.clone(this.$dragTableConfig.SelfContainerConfig);
        // _.objectSet(this.config, this.$dragTableConfig.SelfContainerConfig, 'union');
    }
    public onClick(ev: any): void {
        ev.stopPropagation();
        if (this.$rootTable) {
            this.$rootTable.subjectSend({
                ev_type: 'click',
                event: ev,
                data: {
                    objectName: this.type + 'Container',
                    object: this,
                },
            });
        }
    }
    public resize() {
        // debugger
        this.style.height = this.$parent.heightSelfNum + 'px';
        this.style.right = this.rightNum + 'px';
        this.widthNum = this.widthSelfNum + this.rightNum;
        this.style.lineHeight = this.$parent.heightSelfNum + 'px';
    }
}

