export function toReg(param: string[] | string): RegExp {
    const specialCharacters = ['\\$'];
    const regStr = Array.isArray(param) ? param.join('|') : param;
    specialCharacters.forEach((spRegStr: string) => {
        const spReg = new RegExp(''+spRegStr, 'g');
        regStr.replace(spReg, spRegStr);
    });
    const reg = new RegExp(regStr || '绝对匹配不上！');
    return reg;
}