import { baseClone } from './base/clone';
export function myObejctClone(Obj: any, exclude?: string[], keep?: string[], withFunction?: boolean) {
    const object: any = Object.create({});
    for (const key in Obj) {

        if (Obj.hasOwnProperty(key) || (withFunction && typeof Obj[key] === 'function')) {
            if (key === '_value') {
                Object.defineProperty(object, 'value', {
                    get() {
                        return this._value;
                    },
                    set(value) {
                        this.renderState.hasrendered = false;
                        this._value = value;
                    }
                });
            }
            const tmpObject: any = Obj[key];
            let val: any = null;
            let needContinue = false;
            let needKeep = false;
            (exclude || []).forEach((keyWord) => {
                if (key.indexOf(keyWord) !== -1) {
                    needContinue = true;
                }
            });
            (keep || []).forEach((keyWord) => {
                if (key.indexOf(keyWord) !== -1) {
                    needKeep = true;
                }
            });
            if (needContinue) {
                continue;
            } else if (needKeep) {
                val = Obj[key];
            } else if (Array.isArray(tmpObject)) {
                val = [];
                tmpObject.forEach((item: any) => {
                    if (item.EPI_READY && typeof item.clone === 'function') {
                        val.push(item.clone(exclude, keep, withFunction));
                    } else {
                        val.push(baseClone(item, exclude, keep, withFunction));
                    }
                });
            } else if (typeof Obj[key] === 'object') {
                if (tmpObject && tmpObject.EPI_READY && typeof tmpObject.clone === 'function') {
                    val = tmpObject.clone(exclude, keep, withFunction);
                } else {
                    val = (baseClone(tmpObject, exclude, keep, withFunction));
                }
            } else {
                val = Obj[key];
            }
            object[key] = val;
        }
    }
    return object;
}