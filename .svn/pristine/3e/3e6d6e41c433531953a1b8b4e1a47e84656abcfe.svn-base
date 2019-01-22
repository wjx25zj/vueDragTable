export class BaseStyle {
    public static addBackgroundColor(dom: any, color: string) {
        dom.style['background-color'] = color;
    }
    public static removeBackgroundColor(dom: any) {
        dom.style.removeProperty('background-color');

    }
    public static addBorder(dom: any, borderBearing: string, width?: number, borderColor?: string) {
        let style = 'solid ';
        if (width) {
            style += width + 'px ';
        }
        if (borderColor) {
            style += borderColor + ' ';
        }
        dom.style['border-' + borderBearing] = style;
    }
    public static removeBorder(dom: any) {
        dom.style.removeProperty('border-left');
        dom.style.removeProperty('border-right');
        dom.style.removeProperty('border-top');
        dom.style.removeProperty('border-bottom');
    }

    public static checkBearing(ev: any, rule?: {
        top?: number,
        right?: number,
        bottom?: number,
        left?: number
    }): 'top' | 'right' | 'bottom' | 'left' | 'inner' | 'other' {
        let res: any = 'inner';
        if (ev.currentTarget) {
            const dragoverTarget = ev.currentTarget;
            // const X1of4 = this.getOffsetLeftByBody(dragoverTarget) + dragoverTarget.offsetWidth * 0.25;
            // const X3of4 = this.getOffsetLeftByBody(dragoverTarget) + dragoverTarget.offsetWidth * 0.75;
            // const Y1of4 = this.getOffsetTopByBody(dragoverTarget) + dragoverTarget.offsetHeight * 0.25;
            // const Y3of4 = this.getOffsetTopByBody(dragoverTarget) + dragoverTarget.offsetHeight * 0.75;
            let xLeft = ev.target.offsetWidth * 0.25;
            let xright = ev.target.offsetWidth * 0.75;
            let yTop = ev.target.offsetHeight * 0.25;
            let yBottom = ev.target.offsetHeight * 0.75;
            // debugger
            if (rule) {
                xLeft = rule.left || xLeft;
                xright = ev.target.offsetWidth - rule.right || xright;
                yTop = rule.top || yTop;
                yBottom = ev.target.offsetHeight - rule.bottom || yBottom;
            }
            if (ev.offsetY < yTop) {
                res = 'top';
            }
            if (ev.offsetY > yBottom) {
                res = 'bottom';
            }
            if (ev.offsetX < xLeft) {
                res = 'left';
            }
            if (ev.offsetX > xright) {
                res = 'right';
            }
        }
        return res;
    }



    public static getOffsetTopByBody(el: any) {
        let offsetTop = 0;
        while (el && el.tagName !== 'BODY') {
            offsetTop += el.offsetTop;
            el = el.offsetParent;
        }
        return offsetTop;
    }

    public static getOffsetLeftByBody(el: any) {
        let offsetLeft = 0;
        while (el && el.tagName !== 'BODY') {
            offsetLeft += el.offsetLeft;
            el = el.offsetParent;
        }
        return offsetLeft;
    }

}