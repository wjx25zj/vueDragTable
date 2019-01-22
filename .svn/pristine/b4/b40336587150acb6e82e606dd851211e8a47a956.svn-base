/**
 * 将序号转换成A、B、C
 *
 * @private
 * @param {number} index
 * @returns {string}
 * @memberof DefaultTable
 */
export function getA_Z(index: number): string {
    const shang = Math.floor(index / 26);
    const yushu = index % 26;
    let res = '';
    if (shang > 0) {
        res += String.fromCharCode(shang + 65 - 1);
    }
    res += String.fromCharCode(yushu + 65);
    return res;
}
