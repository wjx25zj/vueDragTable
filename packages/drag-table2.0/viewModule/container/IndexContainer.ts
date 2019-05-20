import { TheadContainer } from './TheadContainer';
import { IndexContainerInterface } from '../../interface/viewModule/container/IndexContainer';
import { IndexThead } from '../thead/IndexThead';
import * as _ from '../../utils/index';
export class IndexContainer extends TheadContainer implements IndexContainerInterface {

    public $rootParent: IndexThead;
    public children: IndexContainer[];

    public renderId: string;
    public $theadContainer?: TheadContainer;
    constructor(param: IndexContainerInterface) {
        super(param);
        this.treeContainer = null;
    }
    public initBeforeSetData(paramClone?: any): void {
        super.initBeforeSetData(paramClone);
        this.config = _.clone(this.$dragTableConfig.IndexContainerConfig);
        if (/top-index/.test(this.type)) {
            _.objectSet(paramClone, this.$dragTableConfig.topIndexContainer, 'union');
        } else if (/left-index/.test(this.type)) {
            _.objectSet(paramClone, this.$dragTableConfig.leftIndexContainer, 'union');
        }
    }

    /**
     * setSystemData
     */
    public update(th: TheadContainer): void {
        if (!th) {
            return;
        }
        this.tbodyConfig = th.tbodyConfig;
        this.canSum = th.canSum;
        this.renderId = th.id;
        this.$theadContainer = th;
        if (/left/.test(this.type)) {
            this.style.height = th.style.height;
            this.heightNum = this.heightSelfNum = th.heightSelfNum;
            if (/top/.test(th.type)) {
                this.style.zIndex = 100;
            }
        } else if (/top/.test(this.type)) {
            // debugger;
            this.style.width = th.style.width;
            this.widthNum = this.widthSelfNum = th.widthSelfNum;
            if (/left/.test(th.type)) {
                this.style.zIndex = 100;
            }
        }

    }


    /**
     * resetByIndexContainer
     */
    protected resetByIndexContainer(): void {
        if (this.id === 'top-left') {
            return;
        }
        this.widthNum = this.widthSelfNum;
        this.heightNum = this.heightSelfNum;
        this.span1 = this.config.span1;
        this.span2 = this.config.span2;
        this.side1 = this.config.side1;
        this.side2 = this.config.side2;
    }
}

