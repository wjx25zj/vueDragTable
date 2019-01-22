export function replaceAll(targetString: string, oldStr: string, newStr: string) {
    const reg = new RegExp(oldStr, 'g');
    const res = targetString.replace(reg, newStr);
    return res;
}