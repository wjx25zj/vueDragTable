
import { BaseCell } from '../cell/BaseCell';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import { BaseContainer } from './BaseContainer';
import { BaseTable } from '../table/BaseTable';
import * as _ from '../../utils';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
// 只有对于容器来说才有相对位置
export class CellContainer extends BaseContainer implements CellContainerInterface {
    public cell: BaseCell = new BaseCell({ $parent: this });
    public isRootParent = false;
    public type: string;
    public $rootTable: BaseTable; // 根容器
    public $rootParent: any;
    public side1: number; // 横表头 为width 纵表头为height
    public side2: number; // 纵表头 为width 横表头为height
    public span1: number = 1; // 横表头 为colspan 纵表头为rowspan
    public span2: number = 1; // 横表头 为rowspan 纵表头为colspan
    public widthNum: number = 0;
    public heightNum: number = 0;
    public widthChildNum: number = 0;
    public heightChildNum: number = 0;
    public tips = {
        style: {
            width: '12px',
            height: '12px',
            // position: 'absolute',
            marginTop: '-6px',
            top: '50%',
            right: '2px',
        }
    };

    constructor(param: CellContainerInterface) {
        super(param);
        this.type = param.type;
        this.side1 = param.side1 == null ? 1 : param.side1;
        this.side2 = param.side2 == null ? 1 : param.side2;
        if (this.side1 === 0 && this.side2 === 0) {
            this.isRootParent = true;
        }
        this.$rootTable = param.$rootTable as BaseTable;
        this.$rootParent = param.$rootParent;
        if (this.isRootParent) {
            this.$rootParent = this;
        } else {
            // debugger
            super.setConfig(this.$defaultConfig.cellContainer);
            this.setConfig(param.config);
        }
    }



    /**
     *
     * 设置Cell
     * @param {BaseCell} cell
     * @memberof CellContainer
     */
    public setCell(cell: BaseCell) {
        this.cell = cell;
    }


    /**
     * 点击事件
     *
     * @param {*} ev
     * @memberof CellContainer
     */
    public onClick(ev: any): void {
        // debugger
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
     * onBlur
     */
    public onBlur(ev: any): void {
        // this.rootParentSendMsg({
        //     ev_type: 'blur',
        //     event: ev,
        //     data: {
        //         objectName: 'CellContainer',
        //         object: this,
        //     },
        // });
    }

    /**
     * clone
     */
    public clone(exclude?: string[], keep?: string[], withFunction?: boolean) {
        return _.myObejctClone(this, exclude, keep, withFunction);
    }


    /**
     * onMouseDown
     */
    public onMouseDown(ev: any): any {
        // console.log(1111);

        // debugger;
        const msg = {
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
            // debugger
            // 现代浏览器阻止默认事件
            if (ev && ev.preventDefault) {
                ev.preventDefault();
            } else {
                // 阻止IE
                (window as any).event.returnValue = false;
            }
            return false;
        }
    }

    /**
     * clearCell
     */
    public clearCell() {
        if (this.cell) {
            const nowCell = this.cell;
            this.cell = new BaseCell({ $parent: this });
        }
    }

    /**
     * delThisRow
     */
    public delThisRow(delType: 'row' | 'col') {
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
            // this.cell.setProperty('value', pastedText);
            this.cell.value = pastedText;
            const msg = {
                ev_type: 'paste',
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
    public rootParentSendMsg(msg: SubjectMsgInterface): void {
        if (this.$rootParent) {
            this.$rootParent.subjectSend(msg);
        } else if (this.$rootTable) {
            this.$rootTable.subjectSend(msg);
        }
    }



}
