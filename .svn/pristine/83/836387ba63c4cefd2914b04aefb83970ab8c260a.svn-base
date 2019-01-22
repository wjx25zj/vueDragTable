
import { baseSlice } from './baseSlice';
export function dropRight(array: any[], n?: number) {
    const length = array == null ? 0 : array.length; // 数组长度
    if (!length) {// 如果为空数组，返回空数组
        return [];
    }
    n = n === undefined ? 1 : n;
    n = length - n;
    return baseSlice(array, 0, n < 0 ? 0 : n); // 调用baseSlice对数组从n位置进行切割，并返回切好的数组
}
