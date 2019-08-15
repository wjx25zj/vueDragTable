
import * as _ from '../../utils';
import { BaseCellInterface, DisplayClassInterface, SelectOptionInterface, VerificationInterface } from '../../interface/viewModule/cell/BaseCellInterface';
import { CellContainer } from '../container/CellContainer';
import { Formula } from '../../module/formula/Formula';
import { TheadContainer } from '../../viewModule/container/TheadContainer';
import { TbodyContainer } from '../../viewModule/container/TbodyContainer';
import { BaseThead } from '../thead/BaseThead';
import { BaseTbody } from '../tbody/BaseTbody';
import { IndexThead } from '../thead/IndexThead';
import { DragTableConfig } from '../../config/DragTableConfig';
export class BaseCell implements BaseCellInterface {
    public $groupId: string;
    public nullReplace: string = '';
    public content: any; // 内容
    public selectionStart: number;
    public readonly: boolean;
    public oldValue: string;
    public title: any;
    public status: 'normal' | 'dbclick' | 'readonly';
    public displayType: 'text' | 'select' | 'input';
    public $parent: CellContainer; // 父级（TheadContainer 或者TbodyContainer）
    // 用户自定义
    public userData: any = {};
    // 展示类
    public displayClass: DisplayClassInterface;
    // 格式
    public formatter: string;

    // 公式
    public formula = {
        hasFormula: false,
        tmpValue: '',
        canClickAdd: true,
    };
    // 样式
    public style: any = {};
    // 验证
    public verification: VerificationInterface;
    // 选择框
    public select = {
        selectOption: null,
        optionList: [],
    };

    public set value(value: any) {
        this.$renderState.hasrendered = false;
        this._value = value;
    }
    public get value() {
        return this._value;
    }

    // 配置文件
    public config: BaseCellInterface = {};
    public $dragTableConfig: DragTableConfig;
    private _value: any; // 存储内容
    private $warningMessage: string[] = [];
    // 渲染状态
    private $renderState = {
        inRender: false, // 渲染中？
        hasrendered: false,// 渲染过？
    };
    private $ICObject: any = {}; // index-Container-对应;

    constructor(param: BaseCellInterface) {
        const paramClone = _.keepClone(param);
        this.initBeforeSetData(paramClone);
        // 设置一遍 默认配置config的参数
        _.objectSet(this, this.config, 'union');
        this.setCellData(paramClone);
    }

    public initBeforeSetData(paramClone: BaseCellInterface) {
        this.value = paramClone.value || '';
        this.$groupId = paramClone.$groupId;
        this.$parent = paramClone.$parent as CellContainer;
        this.$dragTableConfig = DragTableConfig.getInstance(this.$groupId);
        const config = _.clone(this.$dragTableConfig.BaseCellConfig);
        _.objectSet(this.config, config, 'union');
        _.objectSet(paramClone, this.$dragTableConfig.baseCell, 'union');
    }


    /**
     * 通用设置配置
     *
     * @param {*} config
     * @memberof BaseCellInterface
     */
    public setConfig(config: BaseCellInterface): void {
        const configCopy = _.clone(config);
        try {
            if (configCopy) {
                _.objectSet(this.config, configCopy, 'union');
                _.objectSet(this.style, configCopy.style, 'union');
                _.objectSet(this, this.config);// 不加union
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * doVerify
     */
    public doVerify(): boolean {
        this.$warningMessage = [];
        let res = true;
        this.verification.state = true;
        let content: any = this.content + '';
        const percentReg = /(^\d+(\.\d+)*)%$/;
        content = content.replace(percentReg, (match: any, group1: string) => {
            return Number(group1) * 0.01;
        });
        if (this.verification.hasVerification) {
            this.verification.vTypes.forEach((vType: string) => {
                res = true;
                if (vType === 'number' && content) {
                    res = !isNaN(content);
                } else if (vType === 'date' && content) {
                    const reg = /((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)/;
                    res = reg.test(content);
                } else if (vType === 'integer' && content) {
                    const reg = /^[+]{0,1}(\d+)$/;
                    res = res && (reg.test(content));
                } else if (/decimal/.test(vType) && content) {
                    const mathObj = vType.match(/%[0-9]+/);
                    let num = 0;
                    if (mathObj !== null) {
                        num = Number(mathObj[0].replace('%', ''));
                    }
                    let reg: any;
                    if (num === 0) {
                        reg = /^\d+(\.\d+)*$/;
                    } else {
                        reg = new RegExp('^\\d+(\\.\\d{1,' + num + '})?$');
                    }
                    res = res && (reg.test(content));
                    // 构造提示信息
                    {
                        let ex = '';
                        for (let i = 0; i < num; i++) {
                            ex += '1';
                        }
                        this.verification.message[vType] = this.verification.message[vType] || '您好请输入最多' + num + '位小数:例如 3.' + ex;
                    }

                } else if (vType === 'notNull') {
                    res = (content !== '' && content !== undefined && content !== null);
                }

                if (!res) {
                    this.$warningMessage.push(vType);
                }
                this.verification.state = this.verification.state && res;
            });


        }
        return res;
    }

    /**
     * format
     */
    public format(): void {
        const fType = this.formatter;
        let content: any = this.content + '';
        let res = true;
        const percentReg = /(^\d+(\.\d+)*)%$/;
        content = content.replace(percentReg, (match: any, group1: string) => {
            return /percent/.test(fType) ? group1 : Number(group1) * 0.01;
        });
        if (this.formatter && !isNaN(content) && content && this.verification.state) {
            if (fType === 'date') {
                const reg = /((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)/;
                this.content = reg.test(content) ? content : '1990-01-01';
            } else if (fType === 'integer') {
                const reg = /^[+]{0,1}(\d+)$/;
                this.content = reg.test(content) ? content : Math.round(content);
            } else if (/decimal|percent/.test(fType)) {
                const mathObj = fType.match(/%[0-9]+/);
                let num = 0;
                if (mathObj !== null) {
                    const tmp = Number(mathObj[0].replace('%', ''));
                    num = tmp;
                }
                let reg: any;
                if (num === 0) {
                    reg = /^\d+(\.\d+)*$/;
                } else {
                    reg = new RegExp('^\\d+\\.\\d{' + num + '}$');
                }
                // content = /percent/.test(fType) ? Formula.simpleEval(content + '*100') + '' : content;
                res = reg.test(content);

                let repairRes = content;
                if (!res) {

                    const dotIndex = content.indexOf('.');
                    let zeroCount = 0;
                    if (dotIndex !== -1) {
                        const nowBit = content.split('.')[1].length;
                        zeroCount = num - nowBit;
                    } else {
                        repairRes += (num === 0 ? '' : '.');
                        zeroCount = num;
                    }
                    if (zeroCount > 0) {
                        repairRes += new Array(zeroCount).fill(0).join('');
                    } else {
                        repairRes = Math.round(content * Math.pow(10, num)) / (Math.pow(10, num) * 1.0);
                    }
                }
                this.content = /percent/.test(fType) ? repairRes + '%' : repairRes;
            }
        }
    }



    /**
     * 设置数据
     *
     * @param {BaseCellInterface} cellData
     * @memberof BaseCell
     */
    public setCellData(cellData: BaseCellInterface): void {

        const self: any = this;
        for (const key in cellData) {
            // 2018/11/23将 if (containerData.hasOwnProperty(key))修改为 if (this.hasOwnProperty(key))
            if (this.hasOwnProperty(key) || key === 'value') {
                const _value: any = (cellData as any)[key];
                // 对私有属性(_)和不需要保存属性($)特殊处理
                if (key.indexOf('$') !== -1 || _value === undefined) {
                    continue;
                } else if (key === 'displayClass') {
                    _.objectSet(this.displayClass, _value, 'union');
                    _.objectSet(this, this.displayClass[this.status]);
                } else if (typeof _value === 'object' && !Array.isArray(_value)) {
                    _.objectSet(self[key], _value, 'union');
                } else {
                    this.setProperty(key, _value);
                }
            }
        }

    }

    /**
     * 设置属性
     *
     * @param {string} key
     * @param {*} val
     * @returns
     * @memberof BaseCell
     */
    public setProperty(key: string, val: any): void {
        if (val === undefined) {
            return;
        }
        (this as any)[key] = val;
        this.$renderState.hasrendered = false;
    }

    public clone(excludeReg?: RegExp, keepReg?: RegExp, withFunction?: boolean): BaseCellInterface {
        return _.myObejctClone(this, excludeReg, keepReg, withFunction);
    }
    /**
     * onFocus
     */
    public onFocus(ev: any): void {
        const res = this.checkHasFormula();
        this.checkLastCharStatus(ev);
    }

    /**
     * onMouseOver
     */
    public onMouseOver(ev: any): any {
        switch (this.displayType) {
            case 'input':
                ev.srcElement.focus();
                break;
        }
    }

    /**
     * click
     */
    public onClick(ev: any): void {
        ev.stopPropagation();
        const displayType = this.displayClass[this.status].displayType;
    }
    /**
     * onMouseUp
     */
    public onMouseUp(ev: any): any {
        this.checkLastCharStatus(ev);
    }
    /**
     * onBlur
     */
    public inputOnBlur(ev: any, update?: boolean): void {
        // debugger
        this.status = 'normal';
        this.onBlur(ev);
        const parentContainer = this.$parent;
        this.render();
        if (!this.verification.state) {
            this.$warningMessage.forEach((vType: string) => {
                this.warning(this.verification.message[vType]);
            });
        }
        if (parentContainer) {
            if (update) {
                const sourceContainer = parentContainer.getContainer(parentContainer.position);
                sourceContainer.setCell(this);
                sourceContainer.cell.render();
                parentContainer.$positionManager.canFocus = true;
                parentContainer.$positionManager.$editContainer = null;
            }
            (parentContainer as TheadContainer | TbodyContainer).rootParentSendMsg({
                ev_type: 'blur',
                render: true,
                event: ev,
                data: {
                    objectName: 'Cell',
                    object: this,
                },
            });
        }
    }
    /**
     * onInput
     */
    public onInput(ev: any): void {
        this.checkLastCharStatus(ev);
    }


    public onDbClick(ev: any): void {
        if (!(this.status === 'readonly')) {
            this.status = 'dbclick';
            _.objectSet(this, this.displayClass[this.status], 'union');
        }
        const parentContainer = this.$parent;
        if (parentContainer) {
            (parentContainer as TheadContainer | TbodyContainer).rootParentSendMsg({
                ev_type: 'dbclick',
                event: ev,
                data: {
                    objectName: 'Cell',
                    object: this,
                },
            });
        }
        // ev.target.focus();
    }

    /**
     * onBlur
     */
    public onBlur(ev: any): void {
        if (!(this.status === 'readonly')) {
            this.status = 'normal';
            this.oldValue = this._value;
            _.objectSet(this, this.displayClass[this.status]);
        }

    }

    /**
     * warning
     */
    public warning(msg: string): void {
        alert(msg);
    }

    /**
     * onKeyDown
     * 回车失去焦点
     */
    public onKeyDown(ev: any): void {
        // debugger
        if (ev.key === 'Enter') {
            ev.target.blur();
        } else if (ev.key === 'Escape') {
            this._value = this.oldValue;
            ev.target.blur();
        }
    }
    /**
     * onChange事件
     *
     * @param {*} e
     * @memberof BaseCell
     */
    public onChange(ev: any): void {
        if (!(this.status === 'readonly')) {
            this.status = 'normal';
        }
        this.$renderState.hasrendered = false;
        switch (this.displayType) {
            case 'select':
                const selectedIndex = ev.target.selectedIndex;
                this.select.selectOption = this.select.optionList[selectedIndex];
                break;
        }
        const parentContainer = this.$parent;
        if (parentContainer) {
            (parentContainer as TheadContainer | TbodyContainer).rootParentSendMsg({
                ev_type: 'change',
                render: true,
                event: ev,
                data: {
                    objectName: 'Cell',
                    object: this,
                },
            });
        }

    }

    /**
     * checkStatus
     */
    public checkStatus() {
        let readonly: boolean = false;
        const parnetContainer: CellContainer = this.$parent;
        if (this.readonly !== undefined) {
            readonly = this.readonly;
        } else if (parnetContainer) {
            const rootParent: BaseThead | BaseTbody | IndexThead = parnetContainer.$rootParent;
            if (parnetContainer.readonly !== undefined) {
                readonly = parnetContainer.readonly;
            } else if (rootParent) {
                if (rootParent.readonly !== undefined) {
                    readonly = rootParent.readonly;
                }
            }
        }
        if (readonly === true) {
            this.status = 'readonly';
        } else {
            this.status = 'normal';
        }
    }

    /**
     * render
     * 渲染
     */
    public render(): void {
        const parentContainer: any = this.$parent;
        if (parentContainer) {
            this.style.width = parentContainer.widthSelfNum - 2 + 'px';
            this.style.height = parentContainer.heightSelfNum - 2 + 'px';
            this.style.lineHeight = parentContainer.style.height;
        }
        if (this.$renderState.hasrendered && !this.formula.hasFormula) {
            // debugger;
            return;
        } else if (this.$renderState.inRender) {
            this.content = 0;
            const position = parentContainer.position;
            console.error('重复引用:table' + position.table + '!' + position.colStr + position.rowStr);
        } else {
            this.$renderState.inRender = true;
            this.checkHasFormula();
            if (parentContainer && this.formula.hasFormula) {
                const posiitonReg = /([\u4e00-\u9fa5_a-zA-Z0-9_]+!)?[A-Z]+[0-9]+/g;
                let formulaContent = this._value.replace(/^=/, ''); // 拷贝一份不带'='的，用于计算

                let valueBack: string = this._value; // 拷贝一份带'='的，用于替换
                {
                    // 处理百分号计算
                    formulaContent = Formula.percentHandle(formulaContent);
                    // 处理花括号计算
                    formulaContent = Formula.curlyBracesHandle(formulaContent, parentContainer);
                }

                const ICObject: any = {}; // 新建一个对象存储对应信息
                const regObj = formulaContent.match(posiitonReg);
                (regObj || []).forEach((item: string) => {
                    // 获得position 如果没有table则默认为同表操作
                    const position = Formula.cellStr2Position(item);
                    position.table = position.table || parentContainer.position.table;
                    const tmpNameStr = position.table + '!' + position.colStr + position.rowStr;

                    let result: CellContainer;
                    // 2019/4/2因为时间不够 逻辑未明确 所以注释该语句，解决$ICObject所存数据未及时更新bug，但
                    // 产生的后果是，公式中单元格位置变动时，不能自动更新公式 

                    // ICObject = this.$ICObject;
                    if (ICObject.hasOwnProperty(tmpNameStr)) {
                        result = ICObject[tmpNameStr];
                        if (result) {
                            const newPositonStr = ((result.position.table === parentContainer.position.table) ? '' : result.position.table + '!') + result.position.colStr + result.position.rowStr;
                            ICObject[tmpNameStr] = result;
                            valueBack = _.replaceAll(valueBack, item, 'back_' + tmpNameStr);
                            if (valueBack.search('back_' + tmpNameStr) !== -1) {
                                valueBack = _.replaceAll(valueBack, 'back_' + tmpNameStr, newPositonStr);
                            } else {
                                // debugger
                                // valueBack = _.replaceAll(valueBack, item, tmpNameStr);
                            }
                        } else {
                            console.error('cell:render() result为空');
                        }
                    } else {
                        result = parentContainer.getContainer(position);
                        ICObject[tmpNameStr] = result;
                    }
                    if (result && result.cell) {
                        result.cell.render();
                        formulaContent = formulaContent.replace(item, result.cell.content || 0);
                        // console.log(formulaContent);
                    }
                });
                this._value = valueBack;
                this.$ICObject = ICObject;

                formulaContent = Formula.complexEval(formulaContent);
                this.content = formulaContent;

            } else {
                this.content = (this._value === '' || this._value === null || this._value === undefined) ? this.nullReplace : this._value;
            }
            this.$renderState.inRender = false;

        }
        this.doVerify();
        this.format();
        this.checkStatus();
    }

    /**
     * check
     */
    private checkLastCharStatus(ev: any): void {
        this.selectionStart = ev.target.selectionStart;
        const lastCharIndex = this.selectionStart - 1;
        const char = (this._value + '').substr(lastCharIndex, 1);
        const parentContainer = this.$parent;
        console.log('char:' + char);

        if (/^[\+\-\*\/\=]$/.test(char)) {
            // debugger
            this.formula.canClickAdd = true;
            parentContainer.$positionManager.canFocus = false;
            parentContainer.$positionManager.$editContainer = parentContainer;
            this.formula.tmpValue = this._value;
        } else {
            this.formula.canClickAdd = false;
            parentContainer.$positionManager.canFocus = true;
            parentContainer.$positionManager.$editContainer = null;
        }
    }


    /**
     * checkHasFormula
     */
    private checkHasFormula(): boolean {
        if (this.$parent) {
            const regStart = /^=/;
            if (regStart.test(this._value)) {
                this.formula.hasFormula = true;
                const regEnd = /[A-Z]+[0-9]+$/g;
                if (regEnd.test(this._value)) {
                    this.formula.canClickAdd = true;
                } else {
                    this.formula.canClickAdd = false;
                }
                this.formula.canClickAdd = true;
            } else {
                this.formula.hasFormula = false;
            }
        }
        return this.formula.hasFormula;
    }

}

