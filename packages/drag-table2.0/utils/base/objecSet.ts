import { clone } from '..';

export function objectSet(targetObect: any, sourceObject: any, setType?: 'union' | 'intersection', keepReg?: RegExp) {
    const sourceObjectClone = clone(sourceObject, undefined, keepReg);
    setType = setType || 'intersection';
    if (targetObect && sourceObjectClone) {
        for (const key in sourceObjectClone) {
            if (targetObect.hasOwnProperty(key) || (setType === 'union' && sourceObjectClone.hasOwnProperty(key))) {
                const value: any = targetObect[key];
                const needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
                if (typeof value === 'object' && !Array.isArray(value) && !needKeep) {
                    objectSet(targetObect[key], sourceObjectClone[key], setType);
                } else if (sourceObjectClone[key] !== undefined) {
                    targetObect[key] = sourceObjectClone[key];
                }
            }
        }
    }
    return targetObect;
}
