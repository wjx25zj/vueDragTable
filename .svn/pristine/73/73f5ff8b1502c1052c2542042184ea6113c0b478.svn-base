export function baseClone(Obj: any, exclude?: any[], keep?: any[], withFunction?: boolean) {
    exclude = exclude || [];
    keep = exclude || [];
    let buf: any;
    if (Obj instanceof Array) {
        buf = [];
        Obj.forEach((val, i) => {
            buf[i] = baseClone(val, exclude, keep);
        });
        return buf;
    } else if (typeof Obj === 'function') {
        return Obj;
    } else if (Obj instanceof Object) {
        buf = {};
        for (const key in Obj) {
            if ((Obj.hasOwnProperty(key) || (typeof (Obj[key]) === 'function') && withFunction)) {
                let needContinue = false;
                let needKeep = false;
                exclude.forEach((keyWord) => {
                    if (key.indexOf(keyWord) !== -1) {
                        needContinue = true;
                    }
                });
                keep.forEach((keyWord) => {
                    if (key.indexOf(keyWord) !== -1) {
                        needKeep = true;
                    }
                });
                if (needContinue) {
                    continue;
                } else {
                    if (needKeep) {
                        buf[key] = (Obj[key]);
                    } else {
                        buf[key] = baseClone(Obj[key], exclude, keep, withFunction);
                    }
                }
            }
        }
        return buf;
    } else  {
        // console.log('啥都不是:' + Obj);
        return Obj;
    }
}