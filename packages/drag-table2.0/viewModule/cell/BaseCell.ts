
import * as _ from '../../utils';
import { BaseCellInterface, DisplayClassInterface, SelectOptionInterface, VerificationInterface } from '../../interface/viewModule/cell/BaseCellInterface';
import { CellContainer } from '../container/CellContainer';
import { Formula } from '../../module/formula/Formula';
import { TheadContainer } from '../../viewModule/container/TheadContainer';
import { TbodyContainer } from '../../viewModule/container/TbodyContainer';
import { BaseCellConfig } from '../../config/BaseCellConfig';
import { BaseThead } from '../thead/BaseThead';
import { BaseTbody } from '../tbody/BaseTbody';
import { IndexThead } from '../thead/IndexThead';
import { DefaultConfig } from '../../config/DefaultConfig';
export class BaseCell {
    public content: any = ''; // 内容
    public selectionStart: number = 0;
    public set value(value: any) {
        this.renderState.hasrendered = false;
        this._value = value;
    }
    public get value() {
        return this._value;
    }
    public oldValue: string = '';
    public title: any = '';
    public status: 'normal' | 'dbclick' | 'readonly' = 'normal';
    public readonly: boolean = false;
    public displayType: 'text' | 'select' | 'input' = 'text';
    public EPI_READY: boolean = true; // 是否拥有clone和setData的 开盒即用标识
    public $parent: CellContainer; // 父级（TheadContainer 或者TbodyContainer）
    // 用户自定义
    public userData: any = {};
    // 展示类
    public displayClass: DisplayClassInterface = {
        normal: {
            displayType: 'text',
        },
        dbclick: {
            displayType: 'input',
            select: {
                optionList: [
                ],
            },
        },
        readonly: {
            displayType: 'text'
        }
    };
    public $defConfigId: string = 'defConfig';

    // 公式
    public formula = {
        hasFormula: false,
        tmpValue: '',
        canClickAdd: true,
    };
    // 样式
    public style: any = {};
    // 验证
    public verification: VerificationInterface = {
        state: true,
        hasVerification: false,
        vTypes: [], //
        message: {
            integer: '必须输入整型',
            notNull: '该项是必填项',
            number: '您好请输入数字类型:例如 123|32|3.5....',
            date: '您好请输入正确时间:例如 2019-01-01',
            decimal: '您好请输入正确数字'
        }
    };
    // 选择框
    public select = {
        selectOption: null,
        optionList: [],
    };
    // 配置文件
    public config: BaseCellConfig = new BaseCellConfig();
    private _value: any; // 存储内容
    private warningMessage: string[] = [];
    private $defaultConfig: DefaultConfig;
    // 渲染状态
    private renderState = {
        inRender: false, // 渲染中？
        hasrendered: false,// 渲染过？
    };

    private $ICObject: any = {}; // index-Container-对应;

    constructor(param: BaseCellInterface) {
        this.value = param.value || '';
        this.$parent = param.$parent as CellContainer;
        this.$defConfigId = param.$defConfigId || this.$defConfigId;
        this.$defaultConfig = DefaultConfig.getInstance(this.$defConfigId);
        this.setConfig( this.$defaultConfig.baseCell);
        if (param.config) {
            this.setConfig(param.config);
        }
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
    public doVerify(repair: boolean) {
        this.warningMessage = [];
        let res = true;
        this.verification.state = true;
        let content: any = this.content + '';
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
                } else if (vType.indexOf('decimal') !== -1 && content) {
                    // debugger
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
                    res = res && reg.test(content);
                    if (res) {
                        const dotIndex = content.indexOf('.');
                        let zeroCount = 0;
                        if (dotIndex !== -1) {
                            const nowBit = content.split('.')[1].length;
                            zeroCount = num - nowBit;
                        } else {
                            content += num === 0 ? '' : '.';
                            zeroCount = num;
                        }
                        content += new Array(zeroCount).fill(0).join('');
                    }

                    let ex = '';
                    for (let i = 0; i < num; i++) {
                        ex += '1';
                    }

                    this.verification.message[vType] = this.verification.message[vType] || '您好请输入最多' + num + '位小数:例如 3.' + ex;
                } else if (vType === 'notNull') {
                    res = (content !== '' && content !== undefined && content !== null);
                }

                if (!res) {
                    this.warningMessage.push(vType);
                }

                if (repair) {
                    if (vType === 'date' && !res) {
                        this._value = content = '1990-01-01';
                    }
                    this.content = content;
                }
                this.verification.state = this.verification.state && res;
            });


        }
        return res;
    }

    /**
     * 设置数据
     *
     * @param {BaseCellInterface} cellData
     * @memberof BaseCell
     */
    public setCellData(cellData: BaseCellInterface) {

        const self: any = this;
        for (const key in cellData) {
            // 2018/11/23将 if (containerData.hasOwnProperty(key))修改为 if (this.hasOwnProperty(key))
            if (this.hasOwnProperty(key) || key === 'value') {
                const _value: any = (cellData as any)[key];
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
        this.renderState.hasrendered = false;
    }

    public getProperty(key: string) {
        return this[key];
    }



    public clone(exclude?: string[], keep?: string[], withFunction?: boolean) {
        return _.myObejctClone(this, exclude, keep, withFunction);
    }
    /**
     * onFocus
     */
    public onFocus(ev: any) {
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
     * onMouseUp
     */
    public onMouseUp(ev: any): any {
        this.checkLastCharStatus(ev);
    }

    /**
     * check
     */
    public checkLastCharStatus(ev: any) {
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
     * onInput
     */
    public onInput(ev: any) {
        this.checkLastCharStatus(ev);
    }

    /**
     * checkHasFormula
     */
    public checkHasFormula() {
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
    /**
     * click
     */
    public click(ev: any) {
        ev.stopPropagation();
        const displayType = this.displayClass[this.status].displayType;
        switch (displayType) {
            case 'button':
                if (this.$parent) {
                    (this.$parent as TheadContainer | TbodyContainer).rootParentSendMsg({
                        ev_type: 'click',
                        event: ev,
                        data: {
                            objectName: 'button',
                            object: this,
                        },
                    });
                }
                break;
        }
    }

    public onDbClick(ev: any): void {
        if (!this.readonly) {
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
    public inputOnBlur(ev: any, update?: boolean): void {


        this.status = 'normal';
        this.onBlur(ev);
        const parentContainer = this.$parent;
        this.render();
        if (!this.verification.state) {
            this.warningMessage.forEach((vType: string) => {
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
                event: ev,
                data: {
                    objectName: 'Cell',
                    object: this,
                },
            });
        }


    }

    /**
     * onBlur
     */
    public onBlur(ev: any): void {
        if (!this.readonly) {
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
        // this.style.backgroundColor = 'red';
        // setTimeout(() => {
        //     this.style.backgroundColor = 'transparent';
        // }, 3 * 1000);
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
        if (!this.readonly) {
            this.status = 'normal';
        }
        this.renderState.hasrendered = false;
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
        const parnetContainer: CellContainer = this.$parent;
        if (this.config.readonly !== undefined) {
            this.readonly = this.config.readonly;
        } else if (parnetContainer) {
            const rootParent: BaseThead | BaseTbody | IndexThead = parnetContainer.$rootParent;
            if (parnetContainer.config.readonly !== undefined) {
                this.readonly = parnetContainer.config.readonly;
            } else if (rootParent) {
                if (rootParent.config.readonly !== undefined) {
                    this.readonly = rootParent.config.readonly;
                }
            }
        }
        if (this.readonly === true) {
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
        const parentContainer = this.$parent;
        if (parentContainer) {
            this.style.width = parentContainer.style.width;
            this.style.height = parentContainer.style.height;
            this.style.lineHeight = parentContainer.style.height;
        }

        if (this.renderState.hasrendered && !this.formula.hasFormula) {
            // debugger;
            return;
        } else if (this.renderState.inRender) {
            this.content = 0;
            const position = parentContainer.position;
            console.error('重复引用:table' + position.table + '!' + position.colStr + position.rowStr);
        } else {
            this.renderState.inRender = true;
            this.checkHasFormula();
            if (parentContainer && this.formula.hasFormula) {
                const posiitonReg = /(table[0-9]+!)?[A-Z]+[0-9]+/g;
                let formulaContent = this._value.replace(/^=/, ''); // 拷贝一份用于计算
                let valueBack: string = this._value; // 拷贝一份用于替换
                formulaContent = Formula.curlyBracesHandle(formulaContent, parentContainer);
                const ICObject: any = {}; // 新建一个对象存储对应信息
                // console.log(formulaContent);

                const regObj = formulaContent.match(posiitonReg);
                (regObj || []).forEach((item: string) => {
                    // 获得position 如果没有table则默认为同表操作
                    const position = Formula.cellStr2Position(item);
                    position.table = position.table || parentContainer.position.table;

                    // console.log(this.$ICObject);
                    let result: CellContainer;
                    if (this.$ICObject.hasOwnProperty(item)) {
                        result = this.$ICObject[item];
                        if (result) {
                            const newPositonStr = (position.table === parentContainer.position.table ? '' : 'table' + result.position.table + '!') + result.position.colStr + result.position.rowStr;
                            ICObject[newPositonStr] = result;
                            valueBack = _.replaceAll(valueBack, newPositonStr, 'back_' + newPositonStr);
                            if (valueBack.search('back_' + item) !== -1) {
                                valueBack = _.replaceAll(valueBack, 'back_' + item, newPositonStr);
                            } else {
                                valueBack = _.replaceAll(valueBack, item, newPositonStr);
                            }
                        } else {
                            console.error('cell:render() result为空');
                        }
                    } else {
                        result = parentContainer.getContainer(position);
                        this.$ICObject[item] = result;
                        ICObject[item] = result;
                    }
                    if (result && result.cell) {
                        result.cell.render();
                        formulaContent = formulaContent.replace(item, result.cell.content || 0);
                        // console.log(formulaContent);
                    }
                });
                this._value = valueBack;
                this.$ICObject = ICObject;

                // console.log(formulaContent);
                formulaContent = Formula.complexEval(formulaContent);
                // console.log(formulaContent);
                this.content = formulaContent;

            } else {
                this.content = (this._value || '');
            }
            this.renderState.inRender = false;

        }
        // this.renderState.hasrendered = true;
        this.doVerify(true);
        this.checkStatus();

        // debugger
        // 

    }
}
