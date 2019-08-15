import { CellContainer } from './CellContainer';
import * as _ from '../../utils';
import { PositionInterface } from '../../interface/PositionInterface';
import { TheadContainerInterface } from '../../interface/viewModule/container/TheadContainer';
import { BaseThead } from '../thead/BaseThead';
import { BaseStyle } from '../style/Style';
import { TbodyContainerInterface } from '../../interface/viewModule/container/TbodyContainer';
import { TreeContainer } from './TreeContainer';
import { ContainerFactory } from '../../utils/Factory';
import { DragStartDataInterface } from '../../interface/DragStartData';
import { DragTransferDataInterface } from '../../interface/DragTransferData';
import { SelfContainer } from './SelfContainer';

// 只有对于容器来说才有相对位置
export class TheadContainer extends CellContainer {
    // overwrite
    public type: 'top' | 'left' | 'top-index' | 'left-index';
    public $rootParent: BaseThead;
    public $treeParent: TreeContainer;
    public children: TheadContainer[]; // 子容器

    public canSum: boolean;// 是否可以合计
    public addByTree: boolean;
    public treeContainer: TreeContainer; // 树形展开容器
    public selfContainers: SelfContainer[]; // 提示容器
    public $resizeChildren: TheadContainer[]; // 子容器
    public canDragResize: boolean; // 是否可以拖拽重塑
    public draggable: boolean;// 是否可以拖动
    public theadPosition: any[]; // 相对于根节点的职位
    public tbodyConfig: {
        container?: TbodyContainerInterface
        weight?: any
    };
    public $positionCheck: string[]; // 位置检查
    private side1Name: 'height' | 'width';
    private side2Name: 'height' | 'width';
    private $dragType: 'width' | 'height' | 'none' = 'none'; // 拖拽重塑类型
    constructor(param: TheadContainerInterface) {
        super(param);
    }

    public initBeforeSetData(paramClone?: any) {
        super.initBeforeSetData(paramClone);
        const attachParam = {
            $parent: this,
            $rootParent: this.$rootParent,
            $rootTable: this.$rootTable,
            $groupId: this.$groupId
        };
        this.treeContainer = ContainerFactory.create('treeContainer', attachParam);

        const config = _.clone(this.$dragTableConfig.TheadContainerConfig);
        _.objectSet(this.config, config, 'union');
        _.objectSet(paramClone, this.$dragTableConfig.theadContainer, 'union');
        delete this.config.style.width;
        delete this.config.style.height;
    }

    /**
     * selfContainers
     */
    public setSelfContainers(selfContainers: SelfContainer[]) {
        this.selfContainers = new Array();
        selfContainers.forEach((value: any) => {
            // debugger
            const attachParam = {
                $parent: this,
                $rootParent: this.$rootParent,
                $rootTable: this.$rootTable,
                $groupId: this.$groupId
            };
            _.objectSet(value, attachParam, 'union', /\$/);
            const selfContainer = ContainerFactory.create('selfContainer', value);
            this.selfContainers.push(selfContainer);
        });
    }

    /**
     * 设置container属性 部分属性特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TheadContainer
     */
    public setContainerData(containerData: TheadContainerInterface, containerData2?: TheadContainerInterface, weight1?: object, weight2?: object, callBack?: any): void {
        const conditionHandle = (key: string, value: any) => {
            // debugger
            if (key === 'tbodyConfig') {
                this.setProperty(key, value);
            } else if (key === 'treeContainer') {
                _.objectSet(value, this.$dragTableConfig.treeContainer);
                if (this.treeContainer && typeof this.treeContainer.setContainerData === 'function') {
                    this.treeContainer.setContainerData(value);
                } else {
                    this.treeContainer = ContainerFactory.create('treeContainer', value);
                }
                return;
            } else if (key === 'selfContainers') {
                // debugger
                this.setSelfContainers(value);
                return;
            }
            this.setProperty(key, value);

        };
        super.setContainerData(containerData, containerData2, weight1, weight2, conditionHandle);
        if (/^top/.test(this.type)) {
            this.side1Name = 'width';
            this.side2Name = 'height';
        } else if (/^left/.test(this.type)) {
            this.side1Name = 'height';
            this.side2Name = 'width';
        }
    }


    public addChild(child: TheadContainer, targetIndex?: number): any {
        super.addChild(child, targetIndex);
        if (child.treeContainer) {
            child.treeContainer.init();
        }
        return child.id;
    }
    /**
     * 自动递归计算容器长宽，以及span、theadPosition等属性值
     *
     * @param {any[]} [$leafIndexListTmp]
     * @memberof TheadContainer
     */
    public resize(): any {

        if (!/visible|tree/.test(this.hideType)) {
            this.$positionManager.hideContainerMap.set(this.id, this);
        }
        // debugger
        const hideTypeTemporary = this.hideTypeTemporary || this.hideType;

        this.$inSystem = true;
        this.resetByIndexContainer();
        this.$resizeChildren = [];

        if (hideTypeTemporary === 'hideSelf') {
            // debugger
            this.span1 = 0;
            this.span2 = 0;
            this.side1 = 0;
            this.side2 = 0;
            this[this.side2Name + 'Num'] = 0;
            this[this.side1Name + 'Num'] = 0;
            this[this.side2Name + 'SelfNum'] = 0;
            this[this.side1Name + 'SelfNum'] = 0;
            // return;
        } else if (/hideAll/.test(hideTypeTemporary)) {
            this.span1 = 0;
            this.span2 = 0;
            this.side1 = 0;
            this.side2 = 0;
            this[this.side2Name + 'Num'] = 0;
            this[this.side1Name + 'Num'] = 0;
            // this[this.side2Name + 'SelfNum'] = 0;
            // this[this.side1Name + 'SelfNum'] = 0;
            return [];
        } else if (this.hideTypeTemporary === 'hideChildrenHeight') {
            this.span1 = 1;
            this.span2 = 0;
            this.side1 = 1;
            this.side2 = 0;
            this[this.side2Name + 'Num'] = 0;
            this[this.side2Name + 'SelfNum'] = 0;
        }

        if (this.isRootParent) {
            this.span1 = 0;
            this.span2 = 0;
            this.side1 = 0;
            this.side2 = 0;
            this[this.side2Name + 'SelfNum'] = 0;
        }


        let maxGridSide2 = 0; // 孩子的最大高度
        let maxStyleSide2 = 0;// 孩子的最大高度px   
        let sumGridSide1 = 0; // 孩子合计宽度
        let sumStyleSide1 = 0;// 孩子合计宽度px

        let resizeChildren = [];
        if (this.children.length !== 0) {

            this.children.forEach((child: TheadContainer, i) => {
                const childPosition: any[] = this.theadPosition.concat(i);
                child.theadPosition = childPosition;
                if (hideTypeTemporary === 'hideChildrenHeight') {
                    child.hideTypeTemporary = 'hideChildrenHeight';
                }
                const res = child.resize();
                child.hideTypeTemporary = null;
                resizeChildren = resizeChildren.concat(res);
                sumGridSide1 += child.side1;
                maxGridSide2 = child.side2 > maxGridSide2 ? child.side2 : maxGridSide2;

                sumStyleSide1 += child[this.side1Name + 'Num'];
                maxStyleSide2 = child[this.side2Name + 'Num'] > maxStyleSide2 ? child[this.side2Name + 'Num'] : maxStyleSide2;
            });
            // 宽度至少等于自己之前的宽度
            this.side1 = sumGridSide1 || this.side1;
            this[this.side1Name + 'Num'] = this[this.side1Name + 'SelfNum'] = this[this.side1Name + 'ChildNum'] = sumStyleSide1 || this[this.side1Name + 'SelfNum'];

            this.span1 = sumGridSide1;
            this.style[this.side1Name] = sumStyleSide1 + 'px';
            {
                this[this.side2Name + 'ChildNum'] = maxStyleSide2;
            }
            {
                this.side2 = maxGridSide2 + this.side2; // 孩子最大高度加上自己高度
                this[this.side2Name + 'Num'] = maxStyleSide2 + this[this.side2Name + 'SelfNum'];
            }
        } else {
        }

        this.style[this.side1Name] = this[this.side1Name + 'SelfNum'] + 'px';
        this.style[this.side2Name] = (this[this.side2Name + 'SelfNum']) + 'px';

        this.$resizeChildren = resizeChildren;
        this.makeChildrenSameSide2(maxGridSide2, maxStyleSide2);

        if (this.treeContainer) {
            this.innerContainerRender();
        }
        this.selfContainerRender();
        if (this.cell) {
            this.cell.render();
            this.cell.style.paddingLeft = this.paddingLeftNum + 'px';
            this.cell.style.paddingRight = this.paddingRightNum + 'px';
        }

        if (hideTypeTemporary === 'hideSelf') {
            return resizeChildren;
        }
        let otherRes = [this];
        if (resizeChildren.length === 0 && this.hideType !== 'hideChildrenHeight') {
            if (hideTypeTemporary === 'hideChildrenHeight') {
                otherRes = [];
            }
            if (this.$rootParent && !this.isRootParent && sumGridSide1 === 0) {
                this.$rootParent.$leafIndexListTmp.push(this);
            }
        }
        return otherRes;


    }
    /**
     * changePro
     */
    public changeEveryChildProperty(containerData: TheadContainerInterface) {
        this.setContainerData(containerData);
        this.children.forEach((th: TheadContainer) => {
            th.changeEveryChildProperty(containerData);
        });
    }
    /**
     *  innerContainerRender
     */
    public innerContainerRender() {
        this.treeContainer.$parent = this;
        this.treeContainer.resize();
        this.paddingLeftNum = this.treeContainer.widthNum;
    }

    /**
     *  selfContainerRender
     */
    public selfContainerRender() {
        this.paddingRightNum = 0;
        this.selfContainers.forEach((sc: SelfContainer) => {
            sc.resize();
            if (sc.show) {
                this.paddingRightNum = sc.widthNum > this.paddingRightNum ? sc.widthNum : this.paddingRightNum;
            }
        });
    }

    /**
     * getTopList
     * 备注：顶部表头转换为view数组函数
     * @param list?: any[]
     */
    public getTopList(list: any[], p: PositionInterface): void {
        try {
            this.position = _.clone(p);
            this.position.colStr = _.getA_Z(p.colNum);
            this.position.rowStr = p.rowNum + 1;
            const container = this.clone(undefined, /\$|userData|treeContainer/, true); // 之前为什么要拷贝？因为要区分该源container与页面上显示的Container
            this.$positionManager.setPositionMap(this.position, this, 'source');
            this.$positionManager.setPositionMap(this.position, container, 'clone');
            list[0].push(container);
            const cloneP: PositionInterface = _.clone(p);
            if (this.$resizeChildren.length !== 0) {
                this.$resizeChildren.forEach((child: TheadContainer) => {
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
     * loop
     */
    public getLeftList(index: number, p: PositionInterface) {
        // debugger
        const list = this.$rootParent.$tableHeadLeft;
        this.position = _.clone(p);
        this.position.colStr = _.getA_Z(p.colNum);
        this.position.rowStr = p.rowNum + 1;
        const container = this.clone(undefined, /\$|userData|treeContainer/, true);
        this.$positionManager.setPositionMap(this.position, this, 'source');
        this.$positionManager.setPositionMap(this.position, container, 'clone');
        list[index].push(container);
        const cloneP: PositionInterface = _.clone(p);
        cloneP.colNum = cloneP.colNum + this.span2;
        this.$resizeChildren.forEach((child) => {
            const tmpP = _.clone(cloneP);
            child.getLeftList(index, tmpP);
            cloneP.rowNum = cloneP.rowNum + child.side1;
            index += child.side1;
        });
    }

    /**
     * 创建容器
     *
     * @private
     * @param {ContainerInterface} data
     * @returns
     * @memberof BaseThead
     */
    public createContain(data?: TheadContainerInterface): TheadContainer {
        // if(data.id === 'row1'){
        //     debugger
        // }
        const dataClone = _.clone(data, /\$/);
        _.objectSet(dataClone, {
            type: this.type,
            side1: 1,
            side2: 1,
            $rootTable: this.$rootTable,
            $rootParent: this.$rootParent,
            $groupId: this.$groupId,
            // config: this.$rootParent.config
        }, 'union', /\$/);
        const container = new TheadContainer(dataClone);
        return container;
    }

    /**
     * onMouseMove
     */
    public onMouseMove(ev: any): void {
        if (this.$rootTable.canDragResize && this.$dragType === 'none') {
            let dom = ev.currentTarget;
            BaseStyle.removeBorder(dom);
            const bear = BaseStyle.checkBearing(ev, { bottom: 10, right: 10 });
            if (bear === 'right' && this.type !== 'left-index' && this.side1 === 1) {
                dom.style.cursor = 'e-resize';
                BaseStyle.addBorder(dom, bear);
                this.canDragResize = true;
                this.draggable = false;
            } else if (bear === 'bottom' && this.type !== 'top-index' && this.side2 === 1) {
                dom.style.cursor = 's-resize';
                BaseStyle.addBorder(dom, bear);
                this.canDragResize = true;
                this.draggable = false;
            } else {
                dom.style.cursor = 'auto';
                this.canDragResize = false;
                this.draggable = true;
            }
            dom = null;
        }

    }

    /**
     * 当鼠标划出单元格 取消边框和鼠标样子
     *
     * @param {*} ev
     * @param {*} th
     * @memberof BaseTable
     */
    public onMouseOut(ev: any): void {
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
        let currentTargetDom = ev.currentTarget;
        if (ev.which === 1 && this.$rootTable.canDragResize && this.canDragResize) {
            this.$dragType = currentTargetDom.style.cursor === 'e-resize' ? 'width' : 'height';
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
            const sideName = this.$dragType === 'width' ? 'width' : 'height';
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

                if (this.$dragType === 'width') {
                    delSide1 = x;
                    oneColRowObj = this.getColObj(this.position, 'clone');
                } else if (this.$dragType === 'height') {
                    // debugger
                    delSide1 = y;
                    oneColRowObj = this.getRowObj(this.position, 'clone');
                }


                for (const key in oneColRowObj) {
                    if (oneColRowObj.hasOwnProperty(key)) {
                        const container: CellContainer = oneColRowObj[key];
                        if (container) {
                            // debugger
                            const oldSide = container[sideName + 'SelfNum'];
                            container.style[sideName] = (oldSide + delSide1) + 'px';
                            container.cell.style[sideName] = (oldSide + delSide1) + 'px';
                            if (sideName === 'height') {
                                container.cell.style.lineHeight = oldSide + delSide1 + 'px';
                                const treeContainer = (container as any).treeContainer;
                                if (treeContainer) {
                                    treeContainer.style.height = container.cell.style.lineHeight;
                                }
                                ((container as TheadContainer).selfContainers || []).forEach((sc: SelfContainer) => {
                                    sc.style.height = container.cell.style.lineHeight;
                                });
                            }
                        }
                    }
                }

            };
            const mouseup = (e: any) => {
                // debugger;
                document.removeEventListener('mouseup', mouseup);
                document.removeEventListener('mousemove', mousemove);
                const side1 = this[this.$dragType + 'SelfNum'] + delSide1;
                this.setWidthOrHeight(this.$dragType as 'width' | 'height', side1);
                this.draggable = true;
                this.canDragResize = false;
                this.$dragType = 'none';
                currentTargetDom.style.cursor = 'auto';
                currentTargetDom = null;
            };
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        }
        super.onMouseDown(ev);
    }

    /**
     * 通用dragStart
     *
     * @param {*} ev
     * @param {CellContainer} target
     * @memberof BaseThead
     */
    public dragStart?(ev: any): void {
        const dragStartData: DragStartDataInterface = {
            operationType: 'move',
            containerData: this,
        };
        const rootParent = this.$rootParent;
        const draggable = this.checkStatus('draggable');
        if (rootParent && draggable) {
            rootParent.dragStartData = dragStartData;
            ev.dataTransfer.setData('dragStartData', JSON.stringify(_.clone(dragStartData, /\$/)));
            this.rootParentSendMsg(
                {
                    ev_type: 'dragStart',
                    event: ev,
                    data: {
                        object: dragStartData,
                        objectName: 'dragStartData',
                    },
                });
        }
    }

    /**
     * 通用dragover
     *
     * @param {*} ev
     * @param {target} th 
     * @memberof BaseThead
     */
    public dragOver?(ev: any): void {
        const resultList = this.rootParentSendMsg(
            {
                ev_type: 'dragOver',
                event: ev,
                data: {
                    object: this,
                    objectName: 'TheadContainer',
                },
            });
        if (/cancel/.test(resultList.join('-'))) {
            return;
        }
        const draggable = this.checkStatus('draggable');
        const rootParent = this.$rootParent;
        if (rootParent && draggable && (!rootParent.dragStartData || rootParent.dragStartData.containerData !== this)) {
            const targetDom = ev.currentTarget;
            this.resetDragOverStyle(targetDom);
            const bearing = BaseStyle.checkBearing(ev);
            if (this.$positionCheck.indexOf(bearing) !== -1) {
                if (bearing === 'inner') {
                    BaseStyle.addBackgroundColor(targetDom, 'red');
                }
                BaseStyle.addBorder(targetDom, bearing, 3, '#000');
                ev.preventDefault();
            }
        }
    }

    /**
     * 横表专用drop
     *
     * @param {*} ev
     * @param {CellContainer} item
     * @memberof BaseThead
     */
    public drop(ev: any): void {
        // debugger
        const rootParent = this.$rootParent;
        try {
            const stringData = ev.dataTransfer.getData('dragStartData');
            const dragStartData: DragStartDataInterface = rootParent.dragStartData ? rootParent.dragStartData : JSON.parse(stringData || '{}');
            let dragTsData: DragTransferDataInterface;
            let targetContainer = this;
            if (this.$positionCheck && this.$positionCheck.length !== 0) {
                const bear = BaseStyle.checkBearing(ev);
                targetContainer = this.getContainerByTheadPosition(this.theadPosition);
                dragTsData = {
                    target: {
                        containerData: targetContainer
                    },
                    targetBearing: bear,
                    source: {
                        containerData: dragStartData.containerData,
                        withChildren:dragStartData.withChildren,
                    },
                    operationType: dragStartData.operationType
                };
            } else {
                dragTsData = {
                    target: {
                        containerData: targetContainer
                    },
                    targetBearing: 'other',
                    source: {
                        containerData: dragStartData.containerData,
                    },
                    operationType: dragStartData.operationType
                };
            }
            let targetDom = ev.currentTarget;
            this.resetDragOverStyle(targetDom);
            this.rootParentSendMsg(
                {
                    ev_type: 'drop',
                    event: ev,
                    data: {
                        object: dragTsData,
                        objectName: 'DragTsData',
                    },
                });
            rootParent.dragStartData = null;
            targetDom = null;
        } catch (error) {
            console.error(error);
        }

    }

    /**
     * dragEnd
     */
    public dragEnd(ev: any): void {
        // debugger
        const rootParent = this.$rootParent;
        if (rootParent) {
            rootParent.dragStartData = null;
            this.rootParentSendMsg(
                {
                    ev_type: 'dragEnd',
                    event: ev,
                    data: {
                        object: this,
                        objectName: 'TheadContainer',
                    },
                });

        }
    }

    public dragLeave(ev: any) {
        const resultList = this.rootParentSendMsg(
            {
                ev_type: 'dragLeave',
                event: ev,
                data: {
                    object: this,
                    objectName: 'TheadContainer',
                },
            });
        if (/cancel/.test(resultList.join('-'))) {
            return;
        }
        const targetDom = ev.currentTarget;
        BaseStyle.addBackgroundColor(targetDom, this.style.background);
        this.resetDragOverStyle(targetDom);
    }

    public dragEnter(ev: any) {
        const resultList = this.rootParentSendMsg(
            {
                ev_type: 'dragEnter',
                event: ev,
                data: {
                    object: this,
                    objectName: 'TheadContainer',
                },
            });
        if (/cancel/.test(resultList.join('-'))) {
            return;
        }
    }

    /**
     * getContainerByTheadPosition
     * 备注：获得子容器
     * @param position: Position 相对于根容器的位置
     *
     */
    public getContainerByTheadPosition(position: number[]) {
        const rootParent = this.$rootParent;
        if (rootParent) {
            let res: any = rootParent;
            (position || []).forEach((index: number) => {
                res = res.children[index];
            });
            return res;
        }
    }

    public clone(excludeReg?: RegExp, keepReg?: RegExp, withFunction?: boolean): any {
        const obj = super.clone(excludeReg, keepReg, withFunction);
        const children = [];
        obj.children.forEach((th: TheadContainerInterface) => {
            if (!th.addByTree) {
                children.push(th);
            }
        });
        obj.children = children;
        return obj;
    }

    /**
     * resetByIndexContainer
     */
    protected resetByIndexContainer(): void {
        if (this.id === 'top-left') {
            return;
        }
        const topIndexContainer = this.$positionManager.getTopIndexContainer(this.position, 'last');
        if (topIndexContainer) {
            this.widthNum = this.widthSelfNum = topIndexContainer.widthNum;
        } else {
            this.widthSelfNum = this.config.widthSelfNum;
            this.widthNum = this.widthSelfNum;
        }
        const leftIndexContainer = this.$positionManager.getLeftIndexContainer(this.position, 'last');
        if (leftIndexContainer) {
            this.heightNum = this.heightSelfNum = leftIndexContainer.heightNum;
        } else {
            this.heightSelfNum = this.config.heightSelfNum;
            this.heightNum = this.heightSelfNum;
        }

        this.span1 = this.config.span1;
        this.span2 = this.config.span2;
        this.side1 = this.config.side1;
        this.side2 = this.config.side2;
    }
    /**
     * increaseTheLastChildHeight
     * 备注：增加叶子节点BaseTheadCell的高度
     * @param diff: number 需要增加的高度
     */
    private increaseTheLeafChildHeight(diffGrid: number, diffStyle: number): void {

        if (this.$resizeChildren.length !== 0) {
            this.$resizeChildren.forEach((child: TheadContainer) => {
                child.increaseTheLeafChildHeight(diffGrid, diffStyle);
            });
            this.side2 += diffGrid;
        } else if (this.side2 !== 0) {
            const selfStyleSide2 = Number(this.style[this.side2Name].replace('px', ''));
            this.style[this.side2Name] = selfStyleSide2 + diffStyle + 'px';
            this[this.side2Name + 'SelfNum'] = selfStyleSide2 + diffStyle;
            this[this.side2Name + 'Num'] = selfStyleSide2 + diffStyle;
            if (this.treeContainer) {
                this.innerContainerRender();
            }
            this.selfContainerRender();
            this.span2 += diffGrid;
            this.cell.render();
            this.side2 += diffGrid;

        }
    }
    /**
     * makeChildrenSameHeight
     * 备注：使所有自己的孩子BaseTheadCell 高度一致
     * @param maxHeight: number 孩子中最大高度
     */
    private makeChildrenSameSide2(maxGridSide2: number, maxStyleSide2: number): void {
        this.$resizeChildren.forEach((child: TheadContainer) => {
            const diffGrid = maxGridSide2 - child.side2;
            const diffStyle = maxStyleSide2 - child[child.side2Name + 'Num'];
            if (diffGrid > 0 || diffStyle > 0) {
                child.increaseTheLeafChildHeight(diffGrid, diffStyle);
            }
        });
    }

    private resetDragOverStyle?(targetDom: any) {
        BaseStyle.removeBorder(targetDom);
        BaseStyle.removeBackgroundColor(targetDom);
        BaseStyle.addBackgroundColor(targetDom, this.style.background);
    }

}

