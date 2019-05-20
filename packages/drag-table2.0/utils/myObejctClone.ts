import { keepClone } from './keepClone';
export function myObejctClone(Obj: any, excludeReg?: RegExp, keepReg?: RegExp, withFunction?: boolean) {
    const object: any = Object.create({});
    for (const key in Obj) {
        if (Obj.hasOwnProperty(key) || (withFunction && typeof Obj[key] === 'function')) {
            if (key === '_value') {
                Object.defineProperty(object, 'value', {
                    get() {
                        return this._value;
                    },
                    set(value) {
                        this.$renderState.hasrendered = false;
                        this._value = value;
                    }
                });
            }
            const tmpObject: any = Obj[key];
            let val: any = null;
            const needContinue = excludeReg ? (excludeReg.test(key) ? true : false) : false;
            const needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
            if (needContinue) {
                continue;
            } else if (needKeep) {
                val = Obj[key];
            } else if (Array.isArray(tmpObject)) {
                val = [];      
                tmpObject.forEach((item: any) => {
                    if ( typeof item.clone === 'function') {
                        val.push(item.clone(excludeReg, keepReg, withFunction));
                    } else {
                        val.push(keepClone(item, excludeReg, keepReg, withFunction));
                    }
                });
            } else if (typeof Obj[key] === 'object') {
                if (tmpObject && typeof tmpObject.clone === 'function') {
                    val = tmpObject.clone(excludeReg, keepReg, withFunction);
                } else {
                    val = (keepClone(tmpObject, excludeReg, keepReg, withFunction));
                }
            } else {
                val = Obj[key];
            }
            object[key] = val;
        }
    }
    return object;
}