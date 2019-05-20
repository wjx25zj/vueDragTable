export function baseClone(Obj: any, excludeReg?: RegExp, keepReg?: RegExp, withFunction?: boolean) {
    let buf: any;
    if (Obj instanceof Array) {
        buf = [];
        Obj.forEach((val, i) => {
            buf[i] = baseClone(val, excludeReg, keepReg);
        });
        return buf;
    } else if (typeof Obj === 'function') {
        return Obj;
    } else if (Obj instanceof Object) {
        buf = {};
        for (const key in Obj) {
            if ((Obj.hasOwnProperty(key) || (typeof (Obj[key]) === 'function') && withFunction)) {
                const needContinue = excludeReg ? (excludeReg.test(key) ? true : false) : false;
                const needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
                if (needContinue) {
                    continue;
                } else {
                    if (needKeep) {
                        buf[key] = (Obj[key]);
                    } else {
                        buf[key] = baseClone(Obj[key], excludeReg, keepReg, withFunction);
                    }
                }
            }
        }
        return buf;
    } else {
        // console.log('啥都不是:' + Obj);
        return Obj;
    }
}