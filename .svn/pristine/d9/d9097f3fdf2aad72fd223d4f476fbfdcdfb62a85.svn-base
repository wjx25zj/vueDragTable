import * as _ from '../../utils/index';
import { BaseStyle } from '../style/Style';
import { TheadContainer } from '../container/TheadContainer';
import { Subject } from '../../communication/Subject';
import { DragTransferDataInterface } from '../../interface/DragTransferData';
import { DragStartDataInterface } from '../../interface/DragStartData';
import { TheadContainerInterface } from '../../interface/viewModule/container/TheadContainer';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
import { PositionInterface } from '../../interface/PositionInterface';
import { BaseTheadInterface } from '../../interface/viewModule/thead/BaseThead';
import { BaseTheadConfig } from '../../config/BaseTheadConfig';
export class BaseThead extends TheadContainer {
    public cell = null;
    public config: BaseTheadConfig = {};
    public leafIndexList: any[] = []; // 叶子节点顺序列表

    public leafIndexList2: any[] = []; // 叶子节点顺序列表
    public dragStartData: any = null;
    //  表头变化
    public theadSubject = new Subject();

    constructor(param: BaseTheadInterface) {
        super(param);
        if (param.id) {
            super.setConfig(this.$defaultConfig[param.id]);
            this.setConfig(param.config);
        }
        this.$rootParent = this;
    }


    /**
     * setConfig
     */
    public setConfig(config: any) {
        try {
            super.setConfig(config);
            switch (this.type) {
                case 'top':
                    break;
                case 'left':
                    const tmpSide = this.config.baseSide1;
                    this.config.baseSide1 = this.config.baseSide2;
                    this.config.baseSide2 = tmpSide;
                    break;
            }
        } catch (error) {
            console.error('CellContainer error');
            console.error(error);
        }
    }



    /**
     * subjectSend
     */
    public subjectSend(msg: SubjectMsgInterface) {
        this.theadSubject.sendMsg(msg);
    }

    /**
     * 通用dragStart
     *
     * @param {*} ev
     * @param {CellContainer} target
     * @memberof BaseThead
     */
    public dragStart(ev: any, dragStartData: DragStartDataInterface) {
        if (this.draggable) {
            this.dragStartData = dragStartData;
            ev.dataTransfer.setData('dragStartData', JSON.stringify(_.clone(this.dragStartData, ['$'])));
            this.subjectSend(
                {
                    ev_type: 'dragStart',
                    event: ev,
                    data: {
                        object: dragStartData,
                        objectName: 'dragStartData',
                    },
                });
        }

    }


    /**
     * 通用dragover
     *
     * @param {*} ev
     * @param {target} th 
     * @memberof BaseThead
     */
    public dragOver(ev: any, th: TheadContainer) {
        if (this.draggable) {
            const targetDom = ev.currentTarget;
            this.resetDragOverStyle(targetDom, th);
            if (th.positionCheck) {
                const bearing = BaseStyle.checkBearing(ev);
                BaseStyle.addBorder(targetDom, bearing, 3, '#000');
                if (bearing === 'inner') {
                    BaseStyle.addBackgroundColor(targetDom, 'red');
                }

            }
            ev.preventDefault();
        }
    }

    public dragLeave(ev: any, th: TheadContainer) {
        if (this.draggable) {
            const targetDom = ev.currentTarget;
            BaseStyle.addBackgroundColor(targetDom, this.style.background);
            this.resetDragOverStyle(targetDom, th);
        }
    }
    /**
     * 横表专用drop
     *
     * @param {*} ev
     * @param {CellContainer} item
     * @memberof BaseThead
     */
    public drop(ev: any, th: TheadContainer) {
        try {
            const stringData = ev.dataTransfer.getData('dragStartData');
            const dragStartData: DragStartDataInterface = this.dragStartData ? this.dragStartData : JSON.parse(stringData || '{}');
            let dragTsData: DragTransferDataInterface;
            let targetContainer = this;
            if (th.positionCheck) {
                const bear = BaseStyle.checkBearing(ev);
                targetContainer = this.getContainerByTheadPosition(th.theadPosition);
                dragTsData = {
                    target: {
                        containerData: targetContainer
                    },
                    targetBearing: bear,
                    source: {
                        containerData: dragStartData.containerData,
                    },
                    operationType: dragStartData.operationType
                };
            } else {
                dragTsData = {
                    target: {
                        containerData: targetContainer
                    },
                    targetBearing: 'other',
                    source: {
                        containerData: dragStartData.containerData,
                    },
                    operationType: dragStartData.operationType
                };
            }

            let targetDom = ev.currentTarget;
            this.resetDragOverStyle(targetDom, th);
            this.subjectSend(
                {
                    ev_type: 'drop',
                    event: ev,
                    data: {
                        object: dragTsData,
                        objectName: 'DragTsData',
                    },
                });
            this.dragStartData = null;
            targetDom = null;
        } catch (error) {
            console.error(error);
        }

    }

    /**
     * 拖拽删除函数
     *
     * @param {TheadContainer} th
     * @memberof BaseThead
     */
    public dragDel(ev: any, th: TheadContainer) {
        const parentContainer = this.getParentConatiner(th.theadPosition);
        parentContainer.deletChild(_.last(th.theadPosition), 1, true);
        this.subjectSend(
            {
                ev_type: 'drop-del',
                event: ev,
                data: {
                    object: th,
                    objectName: 'TheadContainer',
                },
            },
        );
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
     * resize
     */
    public resize() {

        this.leafIndexList = [];
        this.leafIndexList2 = [];
        super.resize(this.leafIndexList, this.leafIndexList2);
    }


    /**
     * 
     * 备注：容器转换横表
     * @param position: Position 相对于根容器的位置
     *
     */
    public convert2TheadTopList(basePosition: PositionInterface) {
        this.leafIndexList = [];
        this.resize(); // 如果list需要是源container(非克隆体) 解除注释
        const list: any[] = [];
        for (let i = 0; i < this.side2; i++) {
            list.push([]);
        }
        const p: PositionInterface = _.clone(basePosition);
        this.children.forEach((child: TheadContainer) => {
            child.getTopList(list, p);
            p.rowNum = p.rowNum;
            p.colNum = p.colNum + child.side1;
        });
        return list;
    }
    // 转换成纵表
    public convert2TheadLeftList(basePosition: PositionInterface) {
        this.leafIndexList = [];
        this.resize();
        let list: any[] = [];
        const p: PositionInterface = _.clone(basePosition);
        this.children.forEach((child, i) => {
            if (i === 0) {
                list.push([]);
            }
            let tmpList = child.getLeftList(list, p);
            try {
                tmpList = JSON.stringify(tmpList) === '[[]]' ? [] : tmpList;
            } catch (error) {
                // do nothing
            }
            list = list.concat(tmpList);
            p.rowNum = p.rowNum + child.side1;
            p.colNum = p.colNum;
        });
        return list;
    }

    /**
     * merge
     */
    public merge(targetContainerCopy: TheadContainerInterface) {
        const targetContainer = this.getContainerByTheadPosition(targetContainerCopy.theadPosition || []);
        targetContainer.mergeList = targetContainerCopy.mergeList;
        targetContainer.mergeList.forEach((th: TheadContainer) => {
            if (targetContainer.cell && th.cell) {
                const sourceContainer = this.getContainerByTheadPosition(th.theadPosition);
                sourceContainer.style.display = 'none';
            }
        });
    }

    /**
     * disMerge
     */
    public disMerge(targetContainerCopy: TheadContainerInterface) {
        const targetContainer = this.getContainerByTheadPosition(targetContainerCopy.theadPosition || []);
        targetContainer.mergeList = targetContainerCopy.mergeList;
        targetContainer.mergeList.forEach((th: TheadContainer) => {
            if (targetContainer.cell && th.cell) {
                const sourceContainer = this.getContainerByTheadPosition(th.theadPosition);
                sourceContainer.style.display = 'table-cell';
            }
        });
    }

    private getParentConatiner(positon: number[]): TheadContainer {
        const parentPostion = _.dropRight(positon, 1);
        return this.getContainerByTheadPosition(parentPostion);
    }

    private resetDragOverStyle(targetDom: any, th: TheadContainer) {
        BaseStyle.removeBorder(targetDom);
        BaseStyle.removeBackgroundColor(targetDom);
        BaseStyle.addBackgroundColor(targetDom, th.style.background);
    }




}
