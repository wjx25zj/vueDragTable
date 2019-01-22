
import { baseSlice } from './baseSlice';
export function drop(array: any[], n?: number) {
    const length = array == null ? 0 : array.length; // 数组长度
    if (!length) {// 如果为空数组，返回空数组
        return [];
    }
    n = n === undefined ? 1 : n;
    return baseSlice(array, n < 0 ? 0 : n, length); // 调用baseSlice对数组从n位置进行切割，并返回切好的数组
}
