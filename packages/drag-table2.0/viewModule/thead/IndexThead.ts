import { BaseCell } from '../cell/BaseCell';
import * as _ from '../../utils/index';
import { IndexContainer } from '../container/IndexContainer';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import { IndexContainerInterface } from '../../interface/viewModule/container/IndexContainer';
import { Subject } from '../../communication/Subject';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';

export class IndexThead extends IndexContainer {
    public children: IndexContainer[] = new Array();
    public indexTheadSubject = new Subject();
    public leafIndexList: any[] = []; // 叶子节点顺序列表
    public leafIndexList2: any[] = []; // 叶子节点顺序列表

    constructor(param: IndexContainerInterface) {
        super(param);
        if (param.id) {
            super.setConfig(this.$defaultConfig[param.id]);
            this.setConfig(param.config);
        }
        this.$rootParent = this;
        this.cell = null;
    }


    /**
     * getContainerByTheadPosition
     * 备注：获得子容器
     * @param position: Position 相对于根容器的位置
     *
     */
    public getContainerByTheadPosition(position: number[]) {
        let res: any = this;
        (position || []).forEach((index: number) => {
            res = res.children[index];
        });
        return res;
    }

    /**
     * subjectSend
     */
    public subjectSend(msg: SubjectMsgInterface) {
        this.indexTheadSubject.sendMsg(msg);
    }
    /**
     * render
     */
    public render() {
        this.resize();
        this.children.forEach((th: IndexContainer, i: number) => {
            th.position.table = this.$rootTable.position.table;
            if (!th.id
                // || (th.id && th.id.indexOf('def_'))
            ) {
                th.id = 'def2.0_' + i;
            }
            if (th.cell) {
                if (th.type.indexOf('top') !== -1) {
                    th.position.colNum = i;
                    th.position.colStr = _.getA_Z(i);
                    th.position.rowStr = 0;
                    // th.cell.setProperty('value', _.getA_Z(i));
                    th.cell.value = _.getA_Z(i);

                } else if (th.type.indexOf('left') !== -1) {
                    // debugger
                    th.position.colStr = '@';
                    th.position.rowNum = i;
                    th.position.rowStr = i + 1;
                    // th.cell.setProperty('value', i + 1);
                    th.cell.value = i + 1;
                }
                if (this.$rootTable.config.debugLevel === 1) {
                    // th.cell.setProperty('value', th.id);
                    th.cell.value = th.id;
                } else if (this.$rootTable.config.debugLevel === 0) {
                    //
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
    public createContain(data?: CellContainerInterface): IndexContainer {
        // 此处是 IndexContainer 区别与TheadContaner;
        const $positionManagerId = this.$positionManagerId;
        const $defConfigId = this.$defConfigId;
        const container = new IndexContainer(
            {
                type: this.type, side1: 1, side2: 1,
                $rootParent: this.$rootParent,
                config: this.$rootParent.config,
                $rootTable: this.$rootTable,
                $defConfigId,
                $positionManagerId,
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
    public convert() {
        const res = new Array();
        this.children.forEach((th: IndexContainer) => {
            const copyTh = th.clone([], ['$'], true);
            this.$positionManager.setPositionMap(copyTh.position, copyTh, 'clone');
            res.push(copyTh);
        });
        return res;
    }


}