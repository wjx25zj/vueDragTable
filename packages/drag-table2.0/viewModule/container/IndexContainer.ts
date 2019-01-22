import { TheadContainer } from './TheadContainer';
import { IndexContainerInterface } from '../../interface/viewModule/container/IndexContainer';
import { IndexThead } from '../thead/IndexThead';

export class IndexContainer extends TheadContainer {
    // public indexStringPosition = new Array(); // 存放 B1 C6这样的位置信息；
    public $rootParent: IndexThead;
    public positionCheck: boolean = false;
    public $theadContainer: TheadContainer;
    public canSum: boolean = true;
    constructor(param: IndexContainerInterface) {
        super(param);
    }
    /**
     * setSystemData
     */
    public update(th: TheadContainer): void {
        this.tbodyConfig = th.tbodyConfig;
        this.canSum = th.canSum;
        this.id = th.id || this.id;
        this.$theadContainer = th;
        // debugger;

        if (/left/.test(this.type)) {
            this.style.height = th.style.height;
        } else if (/top/.test(this.type)) {
            // debugger;
            this.style.width = th.style.width;
        }


    }
}

