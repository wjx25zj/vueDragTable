import * as _ from '../../utils/index';
import { TheadContainer } from '../container/TheadContainer';
import { PositionInterface } from '../../interface/PositionInterface';
import { BaseTheadInterface } from '../../interface/viewModule/thead/BaseThead';
import { BaseTheadConfig } from '../../config/BaseTheadConfig';
export class BaseThead extends TheadContainer {
    public config: BaseTheadConfig;
    public $leafIndexListTmp?: any[]; // 叶子节点顺序列表
    public $leafIndexListTmp2?: any[]; // 叶子节点顺序列表
    public $leafIndexList2?: any[] = []; // 叶子节点顺序列表
    public $leafIndexList?: any[] = []; // 叶子节点顺序列表
    public dragStartData?: any;
    public $tableHeadTop?: TheadContainer[][] = new Array(); // 用于显示的上侧表头 直接用于左表头的渲染
    public $tableHeadLeft?: TheadContainer[][] = new Array(); // 用于显示的左侧表头 直接用于左表头的渲染
    constructor(param: BaseTheadInterface) {
        super(param);
    }

    /**
     * initBeforeSetData
     */
    public initBeforeSetData(paramClone?: any) {
        super.initBeforeSetData(paramClone);
        this.cell = null;
        this.dragStartData = null;
        this.$rootParent = this;
        const config = _.clone(this.$dragTableConfig.BaseTheadConfig);
        _.objectSet(this.config, config, 'union');
        if (this.type === 'top') {
            _.objectSet(paramClone, this.$dragTableConfig.topThead, 'union');
        } else if (this.type === 'left') {
            _.objectSet(paramClone, this.$dragTableConfig.leftThead, 'union');
        }
    }

    /**
     * resize
     */
    public resize(): void {
        this.$leafIndexListTmp = [];
        this.$leafIndexListTmp2 = [];
        super.resize();
        let maxLayerContainer: TheadContainer;
        this.$leafIndexListTmp.forEach((th: TheadContainer) => {
            if (maxLayerContainer) {
                maxLayerContainer = (th.theadPosition.length > maxLayerContainer.theadPosition.length && th.span2 !== 0) ? th : maxLayerContainer;
            } else {
                maxLayerContainer = th;
            }
        });
        let canDo: boolean = true;
        if (maxLayerContainer) {
            do {
                if (maxLayerContainer.span2 == 1) {
                    this.$leafIndexListTmp2.splice(0, 0, maxLayerContainer);
                }
                if (maxLayerContainer.$parent) {
                    maxLayerContainer = maxLayerContainer.$parent;
                } else {
                    canDo = false;
                }
            } while (canDo);
        }
    }

    /**
     * 
     * 备注：容器转换横表
     * @param position: Position 相对于根容器的位置
     *
     */
    public convert2TheadTopList?(basePosition: PositionInterface): TheadContainer[][] {
        this.$tableHeadTop = [];
        for (let i = 0; i < this.side2; i++) {
            this.$tableHeadTop .push([]);
        }
        const p: PositionInterface = _.clone(basePosition);
        this.$resizeChildren.forEach((child: TheadContainer) => {
            child.getTopList(this.$tableHeadTop , p);
            p.rowNum = p.rowNum;
            p.colNum = p.colNum + child.side1;
        });
        this.$leafIndexList = this.$leafIndexListTmp;
        this.$leafIndexList2 = this.$leafIndexListTmp2;
        return this.$tableHeadTop;
    }
    // 转换成纵表
    public convert2TheadLeftList?(basePosition: PositionInterface): TheadContainer[][] {
        // this.resize();
        let index = 0;
        this.$tableHeadLeft = [];
        for (let i = 0; i < this.side1; i++) {
            this.$tableHeadLeft.push([]);
        }
        const p: PositionInterface = _.clone(basePosition);
        if (this.side1 > 0) {
            this.$resizeChildren.forEach((child, i) => {
                child.getLeftList(index, p);
                p.rowNum = p.rowNum + child.side1;
                p.colNum = p.colNum;
                index += child.side1;
            });
        }
        this.$leafIndexList = this.$leafIndexListTmp;
        this.$leafIndexList2 = this.$leafIndexListTmp2;
        return this.$tableHeadLeft;
    }

}
