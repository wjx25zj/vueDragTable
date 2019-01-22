import { BaseCell } from '../cell/BaseCell';
import { CellContainerInterface } from '../../interface/viewModule/container/CellContainer';
import { CellContainer } from './CellContainer';
import * as _ from '../../utils';
import { IndexContainer } from './IndexContainer';
import { PositionInterface } from '../../interface/PositionInterface';
import { TheadContainerInterface } from '../../interface/viewModule/container/TheadContainer';
import { BaseThead } from '../thead/BaseThead';
import { IndexThead } from '../thead/IndexThead';
import { BaseStyle } from '../style/Style';

// 只有对于容器来说才有相对位置
export class TheadContainer extends CellContainer {
    public canSum: boolean = false;// 是否可以合计
    public canExpand: boolean = false; // 是否可以展开
    public canDragResize: boolean = false; // 是否可以拖拽重塑
    
    public dragType: number = 0; // 是否可以拖拽重塑
    public draggable: boolean = true;// 是否可以拖动
    public positionCheck: boolean = true; // 是否需要位置检查
    public childrenShow: boolean = true;// 子节点是否隐藏

    public children: TheadContainer[] = []; // 子容器
    public $parent: TheadContainer; // 父容器
    public $lastTopIndexContainer: IndexContainer; // 容器
    public $lastLeftIndexContainer: IndexContainer; // 容器

    public mergeList: TheadContainer[] = []; // 合并单元格list
    public theadPosition: any[] = new Array(); // 相对于根节点的职位
    public $rootParent: BaseThead | IndexThead;
    public type: 'top' | 'left' | 'top-index' | 'left-index';
    public side2Name = 'height';
    public side1Name = 'width';


    public tbodyConfig = {
        weight: {
            cell: {
                displayClass: {
                    normal: 100,
                    dbclick: 100,
                },
            },
        },
        container: {
        },
    };

    constructor(param: TheadContainerInterface) {
        super(param);
        if (/^top/.test(this.type)) {
            this.side1Name = 'width';
            this.side2Name = 'height';

        } else if (/^left/.test(this.type)) {
            this.side1Name = 'height';
            this.side2Name = 'width';
        }
        if (!this.isRootParent) {
            super.setConfig(this.$defaultConfig.theadContainer);
            this.setConfig(param.config);
        }
        // debugger
        this.span1 = param.span1 == undefined ? 1 : param.span1;
        this.span2 = param.span2 == undefined ? 1 : param.span1;
    }


    /**
     * 设置父级容器 截止2018-10-9暂未使用
     *
     * @param {TheadContainer} parent
     * @memberof TheadContainer
     */
    public setParent(parent: TheadContainer) {
        this.$parent = parent;
    }


    /**
     * 设置Cell属性
     *
     * @param {BaseCell} cell
     * @memberof TheadContainer
     */
    public setCell(cell: BaseCell) {
        this.cell = cell;
    }

    /**
     * 设置container属性 部分属性特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TheadContainer
     */
    public setContainerData(containerData: CellContainerInterface) {
        const self: any = this;
        for (const key in containerData) {
            // 2018/11/23将 if (containerData.hasOwnProperty(key))修改为 if (this.hasOwnProperty(key))

            if (self.hasOwnProperty(key)) {
                const value: any = (containerData as any)[key];
                if (key === 'userData') {
                    // debugger
                } else if (key === 'children') {
                    const children = Array();
                    value.forEach((item: any) => {
                        if (item && item.EPI_READY) {
                            const tmpTheadContainer = this.createContain(item);
                            children.push(tmpTheadContainer);
                        }
                    });
                    this.setProperty(key, children);
                } else if (key === 'tbodyConfig' && value) {
                    this.setProperty(key, value);
                } else if (key === 'cell' && value) {
                    const cell = new BaseCell({ $parent: this });
                    cell.setCellData(value);
                    this.setProperty(key, cell);
                } else if (typeof value === 'object' && !Array.isArray(value) && key.indexOf('$') === -1) {
                    _.objectSet(self[key], value, 'union');
                } else {
                    this.setProperty(key, value);
                }
            }
        }
    }




    /**
     * 自动递归计算容器长宽，以及span、theadPosition等属性值
     *
     * @param {any[]} [leafIndexList]
     * @memberof TheadContainer
     */
    public resize(leafIndexList?: any[], leafIndexList2?: any[]) {
        // debugger
        //    if(this.id ==='')
        this.resetByIndexContainer();
        let selfStyleSide2 = Number(this.style[this.side2Name].replace('px', ''));
        this[this.side2Name + 'Num'] = Number(this.style[this.side2Name].replace('px', ''));
        this[this.side1Name + 'Num'] = Number(this.style[this.side1Name].replace('px', ''));
        this.span2 = 1;
        this.side2 = 1;
        if (this.style.display === 'none') {
            this.span1 = 1;
            this.span2 = 0;
            this.side1 = 1;
            this.side2 = 0;
            this[this.side2Name + 'Num'] = 0;
            selfStyleSide2 = 0;
        }
        if (this.isRootParent) {
            this.span1 = 0;
            this.span2 = 0;
            this.side1 = 0;
            this.side2 = 0;
            selfStyleSide2 = 0;
        }

        let span1 = 0;
        let maxGridSide2 = 0; // 孩子的最大高度
        let sumStyleSide1 = 0;
        let maxStyleSide2 = 0;

        if (this.children.length !== 0) {

            // const deep = this.theadPosition.length - 1;
            // if (leafIndexList2 && deep >= 0 && this.cell && this.span2 === 1) {
            //     leafIndexList2[deep] = this;
            // }

            this.children.forEach((child: TheadContainer, i) => {
                const childPosition: any[] = this.theadPosition.concat(i);
                child.theadPosition = childPosition;
                if (this.childrenShow === false) {
                    child.style.display = 'none';
                    child.childrenShow = false;
                } else {
                    delete child.style.display;
                }

                child.resize(leafIndexList, leafIndexList2);

                span1 += child.side1;
                maxGridSide2 = child.side2 > maxGridSide2 ? child.side2 : maxGridSide2;

                sumStyleSide1 += child[this.side1Name + 'Num'];
                maxStyleSide2 = child[this.side2Name + 'Num'] > maxStyleSide2 ? child[this.side2Name + 'Num'] : maxStyleSide2;
            });

            this.side1 = span1;
            this[this.side1Name + 'Num'] = sumStyleSide1;
            this.span1 = span1;
            this.style[this.side1Name] = sumStyleSide1 + 'px';
            {
                this[this.side2Name + 'ChildNum'] = maxStyleSide2;
            }
            {
                this.side2 = maxGridSide2 + this.side2; // 孩子最大高度加上自己高度
                this[this.side2Name + 'Num'] = maxStyleSide2 + selfStyleSide2;
            }
            this.makeChildrenSameSide2(maxGridSide2, maxStyleSide2);

        } else if (this.mergeList.length !== 0) {
            // do notihng
        } else {
            if (leafIndexList && !this.isRootParent) {
                leafIndexList.push(this);
            }
            // 为了获得span2 === 1的侧边 叶子节点 算法今后可以优化
            {
                const deep = this.theadPosition.length - 1;
                if (leafIndexList2 && deep >= 0 && this.side2 !== 0 && this.span2 === 1) {
                    const lastTHC: TheadContainer = leafIndexList2[deep];
                    if (!lastTHC || (this.theadPosition.length > lastTHC.theadPosition.length)) {
                        leafIndexList2[deep] = this;
                    }

                }
            }
        }
        // 为什么要Render?
        if (this.cell) {
            this.cell.render();
        }
    }


    /**
     * resetByIndexContainer
     */
    public resetByIndexContainer() {
        // if(this.id === '模块编码'){
        //     debugger
        // }
        const topIndexContainer = this.$positionManager.getTopIndexContainer(this.position, 'last');
        if (topIndexContainer) {
            // debugger
            this.style.width = topIndexContainer.widthNum + 'px';
        }
        const leftIndexContainer = this.$positionManager.getLeftIndexContainer(this.position, 'last');
        if (leftIndexContainer) {
            this.style.height = leftIndexContainer.heightNum + 'px';
        }
    }

    /**
     * addChild
     * 备注：添加子节点
     * @param child: BaseCell 要添加的子节点
     * @param targetIndex?: number 添加的位置
     */
    public addChild(child: TheadContainer, targetIndex?: number): any {
        targetIndex = (targetIndex === undefined || targetIndex === null) ? this.children.length : targetIndex;
        if (!child.id) {
            child.id = 'def_' + _.guid();
        }
        this.children.splice(targetIndex, 0, child);
        return child.id;
    }
    /**
     * deletChild
     * 备注：删除子节点
     * @param count: number 要删除的个数 默认为1
     * @param targetIndex?: number 删除的位置
     * @param needDeleteItChildren?: boolean 是否连同该被 要删除的节点A 和A的子节点都删除
     */
    public deletChild(targetIndex: number, count?: number, needDeleteItChildren?: boolean) {
        count = count == null ? 1 : count;
        if (needDeleteItChildren) {
            this.children.splice(targetIndex, count);
        } else {
            const childrenList: any[] = []; // 临时存被删除BaseTheadCell的孩子们
            let childrenStartIndex = targetIndex + count;
            for (let index = targetIndex; index < targetIndex + count; index++) {
                this.children[index].children.forEach((child: TheadContainer, i: number) => {
                    this.addChild(child, childrenStartIndex);
                    childrenStartIndex++;
                });
            }
            this.children.splice(targetIndex, count);
            // this.children = this.children.concat(childrenList);
        }
    }

    /**
     * replaceChild
     * 备注：替换子节点
     * @param count: number 要删除的个数 默认为1
     * @param targetIndex?: number 删除的位置
     * @param needDeleteItChildren?: boolean 是否连同该被 要删除的节点A 和A的子节点都删除
     */
    public replaceChild(newChild: TheadContainer, targetIndex: number, needDeleteItChildren?: boolean) {
        if (!newChild.id) {
            newChild.id = 'def_' + _.guid();
        }
        if (needDeleteItChildren) {
            this.children.splice(targetIndex, 1, newChild);
        } else {
            const childrenList: any[] = []; // 临时存被删除BaseTheadCell的孩子们
            this.children[targetIndex].children.forEach((child: TheadContainer, i: number) => {
                childrenList.push(child);
            });
            this.children.splice(targetIndex, 1, newChild);
            newChild.children = newChild.children.concat(childrenList);
        }
    }

    /**
     * getTopList
     * 备注：顶部表头转换为view数组函数
     * @param list?: any[]
     */
    public getTopList(list: any[], p: PositionInterface) {
        try {
            this.position = _.clone(p);
            this.position.colStr = _.getA_Z(p.colNum);
            this.position.rowStr = p.rowNum + 1;
            const container = this.clone([], ['$', 'userData'], true); // 之前为什么要拷贝？因为要区分该源container与页面上显示的Container
            this.$positionManager.setPositionMap(this.position, this, 'source');
            this.$positionManager.setPositionMap(this.position, container, 'clone');
            list[0].push(container);
            const cloneP: PositionInterface = _.clone(p);
            if (this.children.length !== 0) {
                this.children.forEach((child: TheadContainer) => {
                    const tmpP = _.clone(p);
                    tmpP.rowNum = p.rowNum + this.span2;
                    tmpP.colNum = cloneP.colNum;
                    child.getTopList(_.drop(list), tmpP);
                    cloneP.colNum += child.side1;
                });
            }
        } catch (error) {
            // do nothing
        }

    }


    /**
     * getLeftList
     * 备注：左侧表头转换为view数组函数
     * @param parentList?: any[]
     */
    public getLeftList(parentList: any, p: PositionInterface) {
        this.position = _.clone(p);
        this.position.colStr = _.getA_Z(p.colNum);
        this.position.rowStr = p.rowNum + 1;

        // console.log(this.id + this.position.colStr + this.position.rowStr);

        const container = this.clone([], ['$', 'userData'], true);
        this.$positionManager.setPositionMap(this.position, this, 'source');
        this.$positionManager.setPositionMap(this.position, container, 'clone');

        let childrenList: any = [[]];
        if (_.last(this.theadPosition) === 0) {
            parentList[0].push(container);
        } else {
            childrenList[0].push(container);
        }
        const cloneP: PositionInterface = _.clone(p);
        this.children.forEach((child: TheadContainer, i) => {
            let tmpList: any;
            const tmpP = _.clone(cloneP);
            tmpP.colNum = p.colNum + this.span2;
            tmpP.rowNum = cloneP.rowNum;
            tmpList = child.getLeftList(childrenList[0].length > 0 ? childrenList : parentList, tmpP);
            try {
                childrenList = JSON.stringify(childrenList) === '[[]]' ? [] : childrenList;
            } catch (error) {
                try {
                    tmpList = JSON.stringify(tmpList) === '[[]]' ? [] : tmpList;
                } catch (error) {
                    // do nothing
                }
            }
            childrenList = childrenList.concat(tmpList);
            cloneP.rowNum += child.side1;
        });
        return childrenList;
    }



    /**
     * 创建容器
     *
     * @private
     * @param {ContainerInterface} data
     * @returns
     * @memberof BaseThead
     */
    public createContain(data?: TheadContainerInterface) {
        const $positionManagerId = this.$positionManagerId;
        const $defConfigId = this.$defConfigId;
        const container = new TheadContainer(
            {
                type: this.type,
                side1: 1,
                side2: 1,
                $rootTable: this.$rootTable,
                $rootParent: this.$rootParent,
                $positionManagerId,
                $defConfigId,
                config: this.$rootParent.config
            });
        // container.setConfig(this.$rootParent.config);
        if (data) {
            container.setContainerData(data);
        }
        if (!container.cell) {
            const cell = new BaseCell({ $parent: this });
            container.setCell(cell);
        }
        return container;
    }

    /**
     * onMouseMove
     */
    public onMouseMove(ev: any) {
        if (this.$rootTable.config.canResizeWidth && this.dragType === 0 && this.side1 === 1) {
            BaseStyle.removeBorder(ev.currentTarget);
            const bear = BaseStyle.checkBearing(ev, { bottom: 10, right: 10 });
            if (bear === 'right' && this.type !== 'left-index') {
                ev.srcElement.style.cursor = 'e-resize';
                BaseStyle.addBorder(ev.currentTarget, bear);
                this.canDragResize = true;
                this.draggable = false;
            } else if (bear === 'bottom' && this.type !== 'top-index') {
                ev.srcElement.style.cursor = 's-resize';
                BaseStyle.addBorder(ev.currentTarget, bear);
                this.canDragResize = true;
                this.draggable = false;
            } else {
                ev.srcElement.style.cursor = 'auto';
            }
        }
    }


    /**
     * 当鼠标划出单元格 取消边框和鼠标样子
     *
     * @param {*} ev
     * @param {*} th
     * @memberof BaseTable
     */
    public onMouseOut(ev: any) {
        ev.currentTarget.style.cursor = 'auto';
        BaseStyle.removeBorder(ev.currentTarget);
        this.canDragResize = false;
        this.draggable = true;
    }

    /**
     * 当鼠标按下时 开始拖拽控制大小
     *
     * @param {*} ev
     * @param {*} th
     * @memberof BaseTable
     */
    public onMouseDown(ev: any): void {
        if (ev.which === 1 && this.$rootTable.config.canResizeWidth && this.canDragResize) {
            this.dragType = ev.srcElement.style.cursor === 'e-resize' ? 1 : 2;
            this.draggable = false;
            this.$rootTable.$selectBoxEntity.clear();
            const targetDom: any = {};
            targetDom.initMouseLeftX = ev.pageX; // 鼠标起始X位置
            targetDom.initMouseTopY = ev.pageY; // 鼠标起始Y位置
            targetDom.initWidth = ev.target.clientWidth; // dom原来的宽度
            targetDom.initHeight = ev.target.clientHeight; // dom原来的高度
            targetDom.initLeft = ev.pageX - targetDom.initWidth;
            targetDom.initTop = ev.pageY - targetDom.initHeight;
            targetDom.x = targetDom.initLeft;
            targetDom.y = targetDom.initTop;
            let delSide1 = 0;
            let oneColRowObj: any;
            const sideName = this.dragType === 1 ? 'width' : 'height';
            // console.log(sideName);

            const mousemove = (e: any) => {
                // debugger
                const x = (e.pageX - targetDom.initMouseLeftX);
                if (x * -1 > this.style.minWidth) {
                    return;
                }

                const y = (e.pageY - targetDom.initMouseTopY);
                if (y * -1 > targetDom.initHeight) {
                    return;
                }

                if (this.dragType === 1) {
                    delSide1 = x;
                    oneColRowObj = this.getColObj(this.position, 'clone');
                } else if (this.dragType === 2) {
                    // debugger
                    delSide1 = y;
                    oneColRowObj = this.getRowObj(this.position, 'clone');
                }


                for (const key in oneColRowObj) {
                    if (oneColRowObj.hasOwnProperty(key)) {
                        const container: CellContainer = oneColRowObj[key];
                        if (container) {
                            // debugger

                            const oldSide = container[sideName + 'Num'] - container[sideName + 'ChildNum'];
                            container.style[sideName] = (oldSide + delSide1) + 'px';
                            container.cell.style[sideName] = (oldSide + delSide1) + 'px';
                            if (sideName === 'height') {
                                container.cell.style.lineHeight = oldSide + delSide1 + 'px';
                            }
                        }
                    }
                }

            };
            const mouseup = (e: any) => {
                // debugger;
                document.removeEventListener('mouseup', mouseup);
                document.removeEventListener('mousemove', mousemove);
                if (this.dragType === 1) {
                    oneColRowObj = this.getColObj(this.position, 'source');
                } else if (this.dragType === 2) {
                    oneColRowObj = this.getRowObj(this.position, 'source');
                }
                for (const key in oneColRowObj) {
                    if (oneColRowObj.hasOwnProperty(key)) {
                        const container = oneColRowObj[key];
                        if (container) {
                            let oldSide = container[sideName + 'Num'];
                            if (/index/.test(container.type)) {
                                const theadContainer = (container as IndexContainer).$theadContainer;
                                if (theadContainer) {
                                    oldSide = theadContainer[sideName + 'Num'] - theadContainer[sideName + 'ChildNum'];
                                    theadContainer.style[sideName] = (oldSide + delSide1) + 'px';
                                    theadContainer.cell.style[sideName] = (oldSide + delSide1) + 'px';
                                }
                            }
                            container.style[sideName] = (oldSide + delSide1) + 'px';
                            container[sideName + 'Num'] = (oldSide + delSide1);
                        }

                    }
                }
                this.$positionManager.saveLastPositionMap(this.position);
                this.$positionManager.render();
                this.draggable = true;
                this.dragType = 0;
                ev.srcElement.style.cursor = 'auto';
            };
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        }
        super.onMouseDown(ev);
    }

    /**
     * increaseTheLastChildHeight
     * 备注：增加叶子节点BaseTheadCell的高度
     * @param diff: number 需要增加的高度
     */
    private increaseTheLeafChildHeight(diffGrid: number, diffStyle: number) {
        // debugger
        if (this.children.length !== 0 && this.childrenShow) {
            this.children.forEach((child: TheadContainer) => {
                child.increaseTheLeafChildHeight(diffGrid, diffStyle);
            });
            this.side2 += diffGrid;
        } else if (this.side2 !== 0) {
            const selfStyleSide2 = Number(this.style[this.side2Name].replace('px', ''));
            this.style[this.side2Name] = selfStyleSide2 + diffStyle + 'px';
            this[this.side2Name + 'Num'] = selfStyleSide2 + diffStyle;
            this.span2 += diffGrid;
            this.cell.render();
            this.side2 += diffGrid;
        }

        // const selfStyleSide2 = Number(this.style[this.side2Name].replace('px', ''));
        // this.style[this.side2Name] = selfStyleSide2 + diffStyle + 'px';

    }
    /**
     * makeChildrenSameHeight
     * 备注：使所有自己的孩子BaseTheadCell 高度一致
     * @param maxHeight: number 孩子中最大高度
     */
    private makeChildrenSameSide2(maxGridSide2: number, maxStyleSide2: number) {
        this.children.forEach((child: TheadContainer) => {
            const diffGrid = maxGridSide2 - child.side2;
            const diffStyle = maxStyleSide2 - child[child.side2Name + 'Num'];
            if (diffGrid > 0 || diffStyle > 0) {
                child.increaseTheLeafChildHeight(diffGrid, diffStyle);
            } else {
                // debugger
                const deep = child.theadPosition.length - 1;
                if (this.$rootParent.leafIndexList2 && deep >= 0 && child.span2 === 1) {
                    this.$rootParent.leafIndexList2[deep] = child;
                }
            }
        });
    }







}

