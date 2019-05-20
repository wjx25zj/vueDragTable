import { BaseCell } from '../cell/BaseCell';
import * as _ from '../../utils/index';
import { IndexContainer } from '../container/IndexContainer';
import { IndexContainerInterface } from '../../interface/viewModule/container/IndexContainer';

export class IndexThead extends IndexContainer {
    public $leafIndexList: IndexContainer[];
    public $leafIndexList2: IndexContainer[];
    constructor(param: IndexContainerInterface) {
        super(param);
    }
    /**
     * initBeforeSetData
     */
    public initBeforeSetData(paramClone?: any) {
        super.initBeforeSetData(paramClone);
        this.cell = null;
        this.$rootParent = this;
        _.objectSet(this.config, this.$dragTableConfig.IndexTheadConfig, 'union');
        if (/top-index/.test(this.type)) {
            _.objectSet(paramClone, this.$dragTableConfig.topIndexThead, 'union');
        } else if (/left-index/.test(this.type)) {
            _.objectSet(paramClone, this.$dragTableConfig.leftIndexThead, 'union');
            this.config.style.width = '80px';
        }

    }

    /**
     * resize
     */
    public resize(): void {
        this.$leafIndexList = [];
        this.$leafIndexList2 = [];
        super.resize();
    }

    /**
     * replaceChild
     */
    public replaceChild(newChild: IndexContainer, targetIndex: number, needDeleteItChildren?: boolean): void {
        super.replaceChild(newChild, targetIndex, needDeleteItChildren);
        this.$positionManager.setPositionMap(newChild.position, newChild, 'last');
    }

    /**
     * render
     */
    public render(): void {
        this.resize();
        this.children.forEach((th: IndexContainer, i: number) => {
            th.position.table = this.$rootTable.position.table;
            if (th.cell) {
                if (th.type.indexOf('top') !== -1) {
                    th.position.colNum = i;
                    th.position.colStr = _.getA_Z(i);
                    th.position.rowStr = 0;
                    th.cell.value = _.getA_Z(i);
                } else if (th.type.indexOf('left') !== -1) {
                    // debugger
                    th.position.colStr = '@';
                    th.position.rowNum = i;
                    th.position.rowStr = i + 1;
                    th.cell.value = i + 1;
                }
                // debugger
                th.id = th.cell.value;
                if (this.$rootTable.debugLevel === 1) {
                    th.cell.value = th.renderId;
                } else if (this.$rootTable.debugLevel === 0) {

                }
                this.$positionManager.setPositionMap(th.position, th, 'source');
                th.cell.render();
            }
        });
    }

    /**
     * 创建容器
     *
     * @private
     * @param {DragStartData} data
     * @returns
     * @memberof BaseThead
     */
    public createContain(data?: IndexContainerInterface): IndexContainer {
        // 此处是 IndexContainer 区别与TheadContaner;
        const $groupId = this.$groupId;
        const container = new IndexContainer(
            {
                type: this.type,
                side1: 1, side2: 1,
                $rootParent: this.$rootParent,
                $rootTable: this.$rootTable,
                $groupId
            }
        );
        // container.setConfig(this.$rootParent.config);
        if (data) {
            container.setContainerData(data);
        }
        if (!container.cell) {
            const cell = new BaseCell({ $parent: container });
            container.setCell(cell);
        }
        return container;
    }

    public fastAddChild() {
        const container = this.createContain();
        this.addChild(container);
    }

    /**
     * convert
     */
    public convert(): IndexContainerInterface[] {
        const res = new Array();
        this.children.forEach((th: IndexContainer) => {
            const copyTh = th.clone(undefined, undefined, true);
            this.$positionManager.setPositionMap(copyTh.position, copyTh, 'clone');
            res.push(copyTh);
        });
        return res;
    }


}