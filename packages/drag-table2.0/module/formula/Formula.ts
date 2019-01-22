import { CellContainer } from '../../viewModule/container/CellContainer';
import * as _ from '../../utils/index';
import { PositionInterface } from '../../interface/PositionInterface';


export class Formula {
    // 复杂的计算方法（包含括号）
    public static complexEval(str: string) {
        if (str == null) {
            return '';
        }
        if (typeof str !== 'string') {// 转化成字符串
            str = str + '';
        }
        str = (str + '').replace(/[\s]/g,'');
        const reg = '[\(][^\(]*?[\)]';
        let multObj = str.match(reg); // 匹配括号
        // 不断计算最底层括号的数据
        while (null != multObj) {
            const content = multObj[0] + '';

            const result = this.simpleEval(content.substr(1, content.length - 2));
            str = str.replace(multObj[0], result);
            multObj = str.match(reg);
        }

        return this.simpleEval(str);
    }
    // 简单的计算方法，只有加减乘除
    public static simpleEval(str: string) {
        if (str == null) {
            return '';
        }
        if (typeof str !== 'string') {// 转化成字符串
            str = str + '';
        }

        let valueArray = new Array(); // 值的数组
        let markArray = new Array(); // 符号的数组
        let tempValue: any = 0;
        const ch = str.split('');
        let isOper = false;
        // debugger 
        for (let i = 0; i < ch.length; i++) {
            if (ch[i] === '+' || ch[i] === '-' || ch[i] === '*' || ch[i] === '/') {// 符号
                let dv = tempValue * 1;
                if (isOper) {
                    const value = valueArray.pop();
                    const mark = markArray.pop();
                    dv = this.simpleTwoEval(mark, value, dv);
                }
                valueArray.push(dv);
                markArray.push(ch[i]);
                tempValue = 0;
                isOper = false;
                if (ch[i] === '*' || ch[i] === '/') {
                    isOper = true;
                }

            } else {
                tempValue += ch[i] + '';
                if (i === ch.length - 1) {// 最后一位
                    let dv = tempValue * 1;
                    if (isOper) {
                        const dv1 = valueArray.pop();
                        const mark = markArray.pop();
                        const result = this.simpleTwoEval(mark, dv1, tempValue);
                        dv = result;
                    }
                    valueArray.push(dv);
                }
            }
        }

        valueArray = this.reverseArray(valueArray);
        markArray = this.reverseArray(markArray);
        while (valueArray.length > 1) {
            const v1 = valueArray.pop();
            const v2 = valueArray.pop();
            const mark = markArray.pop();
            valueArray.push(this.simpleTwoEval(mark, v1, v2));
        }
        return valueArray[0] || 0;

    }

    // 两个数的加减乘除
    public static simpleTwoEval(mark: string, value1: number, value2: number) {
        if (mark === '+') {
            return value1 + value2;
        } else if (mark === '-') {
            return value1 - value2;
        } else if (mark === '*') {
            return value1 * value2;
        } else if (mark === '/') {
            return value1 / value2;
        }
        return 0;
    }

    // 反转数组
    public static reverseArray(oldArray: any[]) {
        const newArray = new Array();
        const size = oldArray.length;
        for (let i = 0; i < size; i++) {
            newArray.push(oldArray.pop());
        }
        return newArray;

    }

    /**
     * name
     */
    public static cellStr2Position(cellStr: string): PositionInterface {
        const res: PositionInterface = {
            table: (/[0-9]+(?=!)/.exec(cellStr) || [null])[0],
            colStr: (/[^!]?([A-Z])+/.exec(cellStr) || [null])[0],
            rowStr: (/[0-9]+$/.exec(cellStr) || [null])[0],
        };
        return res;
    }

    public static curlyBracesHandle(str: string, container: CellContainer) {
        const reg = '[\{][^\{]*?[\}]';
        let regObj = str.match(reg);
        while (null != regObj) {
            (regObj || []).forEach((item: string) => {
                const rowNum = container.position.rowNum + '';
                if (/sr/.test(item)) {
                    let formula = item.replace(/sr/g, rowNum);
                    formula = formula.replace(/[{}]/g, '');
                    const res = Formula.complexEval(formula);
                    str = str.replace(item, res + 1);
                } else if (/sc/.test(item)) {
                    const selfCol = container.position.colNum + '';
                    let formula = item.replace(/sc/g, selfCol);
                    formula = formula.replace(/[{}]/g, '');
                    const res = Formula.complexEval(formula);
                    str = str.replace(item, _.getA_Z(res));
                }
            });
            regObj = str.match(reg);
        }
        return str;
    }
}
