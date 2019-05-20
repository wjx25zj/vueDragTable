
import { baseClone } from './base/clone';
import { UtilsConfig } from './base/config';
export function keepClone(obj: any, excludeReg?: RegExp, keepReg?: RegExp, withFunction?: boolean) {
    keepReg = keepReg || UtilsConfig.keepReg;
    return baseClone(obj, excludeReg, keepReg, withFunction);
}