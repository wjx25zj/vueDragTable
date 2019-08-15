/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

export function baseSlice(array: any[], start: number, end: number) {
    let index = -1;
    let length = array.length;
    start = start == null ? 0 : (+start || 0);
    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : (+end || 0);
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    const result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
