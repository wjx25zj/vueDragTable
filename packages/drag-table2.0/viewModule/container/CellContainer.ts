
import { BaseCell } from '../cell/BaseCell';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import { BaseContainer } from './BaseContainer';
import * as _ from '../../utils';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
import { BaseCellInterface } from '../../interface/viewModule/cell/BaseCellInterface';
import { PositionInterface } from '../../interface/PositionInterface';
// 只有对于容器来说才有相对位置
export abstract class CellContainer extends BaseContainer implements CellContainerInterface {
    public cell: BaseCell;
    public readonly: boolean;
    public children: CellContainer[]; // 子容器
    public isRootParent: boolean;
    public $rootParent: any;
    public side1: number; // 横表头 为width 纵表头为height
    public side2: number; // 纵表头 为width 横表头为height
    public span1: number; // 横表头 为colspan 纵表头为rowspan
    public span2: number; // 横表头 为rowspan 纵表头为colspan
    public hideType: 'visible' | 'hideChildrenHeight' | 'hideAll' | 'hideAll-tree' | 'hideSelf';
    public hideTypeTemporary: 'visible' | 'hideChildrenHeight' | 'hideAll' | 'hideAll-tree' | 'hideSelf';
    constructor(param: CellContainerInterface) {
        super(param);
    }

    public initBeforeSetData(paramClone?: any): void {
        super.initBeforeSetData(paramClone);
        this.cell = new BaseCell({ $parent: this });
        this.$rootParent = paramClone.$rootParent;
        this.paddingLeftNum = paramClone.paddingLeftNum;
        this.config = _.clone(this.$dragTableConfig.CellContainerConfig);
        _.objectSet(paramClone, this.$dragTableConfig.cellContainer, 'union');
    }



    public setContainerData(containerData: CellContainerInterface, containerData2?: CellContainerInterface, weight1?: object, weight2?: object, callBack?: any) {

        const conditionHandle = (key: string, value: any) => {
            // debugger
            if (/^cell$/.test(key)) {
                this.setCell(value);
                return;
            }
            if (callBack && typeof callBack === 'function') {
                callBack(key, value);
            } else {
                this.setProperty(key, value);
            }
        };
        super.setContainerData(containerData, containerData2, weight1, weight2, conditionHandle);

    }


    /**
     * checkStatus
     */
    public checkStatus(key: string): any {
        let result: any;
        const rootParent: any = this.$rootParent;
        if (this[key] !== undefined) {
            result = this[key];
        } else if (rootParent) {
            if (rootParent[key] !== undefined) {
                result = rootParent[key];
            }
        }
        return result;
    }




    /**
     *
     * 设置Cell
     * @param {BaseCell} cell
     * @memberof CellContainer
     */
    public setCell(cell: BaseCellInterface): void {
        if (this.cell && typeof this.cell.setCellData === 'function') {
            this.cell.setCellData(cell);
        } else {
            cell.$parent = this;
            this.cell = new BaseCell(cell);
        }
    }

    /**
     * 点击事件
     *
     * @param {*} ev
     * @memberof CellContainer
     */
    public onClick(ev: any): void {
        this.rootParentSendMsg({
            ev_type: 'click',
            event: ev,
            data: {
                objectName: 'CellContainer',
                object: this,
            },
        });
    }

    /**
     * onMouseDown
     */
    public onMouseDown(ev: any): any {
        const msg: SubjectMsgInterface = {
            ev_type: 'mouseDown',
            event: ev,
            data: {
                objectName: 'CellContainer',
                object: this,
            },
        };
        if (ev.which === 3) {
            msg.ev_type = 'rightClick';
            // // 屏蔽右键
            // document.oncontextmenu = () => {
            //     return false;
            // };
            this.rootParentSendMsg(msg);
        } else if (ev.which === 2) {
            msg.ev_type = 'middleClick';
            this.rootParentSendMsg(msg);
        }

        if (!this.$positionManager.canFocus && this.$positionManager.$editContainer !== this) {
            super.onMouseDown(ev);
        }
    }

    /**
     * setWidthOrHeight
     */
    public setWidthOrHeight(type: 'width' | 'height', side1: number): void {
        // debugger
        let indexContainer: any;
        for (let i = 0; i < this.side1; i++) {
            const position: PositionInterface = _.clone(this.position);
            if (type === 'width') {
                position.colStr = _.getA_Z(position.colNum + i + 1);
                indexContainer = this.getTopIndexContainer(this.position, 'source');
            } else if (type === 'height') {
                position.rowStr = position.rowNum + i + 1;
                indexContainer = this.getLeftIndexContainer(this.position, 'source');
            }
            if (isNaN(side1) || !indexContainer) {
                return;
            }
            side1 = Number(side1);
            indexContainer.style[type] = side1 + 'px';
            indexContainer[type + 'SelfNum'] = indexContainer[type + 'Num'] = side1;
        }
        this.$positionManager.saveLastPositionMap(this.position);
        this.rootParentSendMsg({
            ev_type: 'beforeRender',
            render: true,
            event: null,
            data: {
                objectName: '',
                object: null
            }
        });
    }

    /**
     * delThisRow
     */
    public delThisRow(delType: 'row' | 'col'): void {
        this.$rootTable.delOneRowCol(delType, this);
    }



    /**
     * 粘贴事件
     *
     * @param {*} e
     * @param {*} container
     * @memberof BaseTable
     */
    public onPaste(ev: any): string {
        let pastedText: any;
        if (ev.clipboardData && ev.clipboardData.getData) { // IE
            pastedText = ev.clipboardData.getData('Text');
        } else {
            pastedText = ev.originalEvent.clipboardData.getData('Text'); // e.clipboardData.getData('text/plain');
        }
        if (this.cell) {
            this.cell.value = pastedText;
            const msg: SubjectMsgInterface = {
                ev_type: 'paste',
                render: true,
                event: ev,
                data: {
                    objectName: 'CellContainer',
                    object: this,
                },
            };
            if (this.$rootParent) {
                this.rootParentSendMsg(msg);
            }
        }
        return pastedText;
    }

    /**
     * subjectSend
     */
    public rootParentSendMsg(msg: SubjectMsgInterface): any[] {
        let resultList = [];
        if (this.$rootParent) {
            resultList = this.$rootParent.subjectSend(msg);
        } else if (this.$rootTable) {
            resultList = this.$rootTable.subjectSend(msg);
        }
        return resultList;
    }


}

