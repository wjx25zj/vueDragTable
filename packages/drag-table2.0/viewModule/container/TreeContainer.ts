import * as _ from '../../utils';
import { TheadContainerInterface } from '../../interface/viewModule/container/TheadContainer';
import { TheadContainer } from './TheadContainer';
import { TreeContainerInterface } from '../../interface/viewModule/container/TreeContainer';
import { TreeContainerConfig } from '../../config/TreeContainerConfig';
import { ContainerFactory } from '../../utils/Factory';
import { SelfContainer } from './SelfContainer';

// 只有对于容器来说才有相对位置
export class TreeContainer extends SelfContainer {
    public $openStatus: 'close' | 'open' | 'loading';
    public children: TheadContainer[]; // 子容器
    public $treeParent: TreeContainer;
    public config: TreeContainerConfig;
    private allChildren: any[];
    private openChildrenCount: number;
    private nextStatus: 'close' | 'open';

    constructor(param: TreeContainerInterface) {
        super(param);
    }

    public initBeforeSetData(paramClone?: any) {
        super.initBeforeSetData(paramClone);
        this.$parent = paramClone.$parent;
        _.objectSet(this.config, this.$dragTableConfig.TreeContainerConfig, 'union');
        _.objectSet(paramClone, this.$dragTableConfig.treeContainer, 'union');
    }



    /**
     * 点击事件
     *
     * @param {*} ev
     * @memberof CellContainer
     */
    public onClick(ev: any): void {
        ev.stopPropagation();
        this.nextStatus = this.$openStatus === 'open' ? 'close' : 'open';
        try {
            const parnent = this.$parent;
            if (parnent) {
                parnent.rootParentSendMsg({
                    ev_type: this.nextStatus,
                    event: ev,
                    data: {
                        object: this,
                        objectName: 'TreeContainer',
                    },
                });
                if (this.$openStatus !== 'loading') {
                    this.$openStatus = this.nextStatus;
                    this.loop(this.$openStatus);
                    parnent.rootParentSendMsg({
                        ev_type: 'beforeRender',
                        render: true,
                        event: ev,
                        data: {
                            object: null,
                            objectName: 'innerContontainer',
                        },
                    });
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    /**
     * loop
     */
    public loop(type: 'close' | 'open') {
        if (type === 'close') {
            this.hideChildren();
        } else if (type === 'open') {
            this.checkAndChange();
        }
        this.children.forEach((child: TheadContainer) => {
            const childInnerContainer: TreeContainer = child.treeContainer;
            if (childInnerContainer) {
                childInnerContainer.loop(type);
            }
        });
    }



    /**
     * 设置container属性 部分属性特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TheadContainer
     */
    public setContainerData(containerData: TreeContainerInterface, containerData2?: TreeContainerInterface, weight1?: object, weight2?: object, callBack?: any) {
        super.setContainerData(containerData, containerData2, weight1, weight2, callBack);
    }

    /**
     * 自动递归计算容器长宽，以及span、theadPosition等属性值
     *
     * @param {any[]} [$leafIndexList]
     * @memberof TheadContainer
     */
    public resize(): void {
        let allChildren = new Array();
        let openChildrenCount = 0;
        const parent = this.$parent;
        // if (this.$parent.id == 'zdy') {
        //     debugger
        // }
        if (this.children.length !== 0) {
            this.show = true;
            this.children.forEach((child: TheadContainer, i: number) => {
                allChildren.push(child);
                const childInnerContainer: TreeContainer = child.treeContainer;
                if (childInnerContainer) {
                    childInnerContainer.resize();
                    allChildren = allChildren.concat(childInnerContainer.allChildren);
                    openChildrenCount += childInnerContainer.$openStatus === 'open' ? childInnerContainer.children.length : 0;
                    openChildrenCount += child.treeContainer.openChildrenCount;
                    childInnerContainer.$treeParent = this;
                }
            });
            this.widthNum = this.widthSelfNum + this.paddingLeftNum + 2;
        } else {
            this.widthNum = ((this.$treeParent || this.show) ? this.widthSelfNum : 0) + this.paddingLeftNum + 2;
        }
        this.style.paddingLeft = (this.paddingLeftNum) + 'px';
        this.style.width = this.widthSelfNum + 'px';
        this.heightSelfNum = this.$parent.heightSelfNum;
        this.style.height = this.heightSelfNum + 'px';

        if (this.$treeParent && parent) {
            if (/top/.test(this.$parent.type)) {
                // this.$positionCheck = ['bottom'];
                this.widthNum = this.widthSelfNum;
                this.style.paddingLeft = (0) + 'px';
                parent.cell.style.textAlign = parent.config.cell.style.textAlign;
            } else if (/left/.test(this.$parent.type)) {
                // this.$positionCheck = ['right'];
                parent.cell.style.textAlign = 'left';
            }
        }
        this.openChildrenCount = openChildrenCount;
        this.allChildren = allChildren;
    }


    /**
     * getContainerByTheadPositon
     */
    public getContainerByTheadPosition(position: number[]): TreeContainer {
        let res: any = this;
        (position || []).forEach((index: number) => {
            res = (res.children[index] as TheadContainer).treeContainer;
        });
        return res;
    }

    /**
     * check
     */
    public init() {
        const parnent = this.$parent;
        this.addChildren();
        this.openOrClose(this.$openStatus);
        this.$positionManager.treeContainerMap.set(parnent.id, this);
    }



    /**
     * name
     */
    public openOrClose(operation: string): void {
        if (operation === 'open') {
            this.showAndHide(this.children.length + this.openChildrenCount, 'show');
        } else {
            this.showAndHide(this.children.length + this.openChildrenCount, 'hide');
        }
    }

    /**
     * name
     */
    public checkAndChange() {
        this.children.forEach((th: TheadContainer) => {
            
            th.hideType = this.$openStatus === 'open' ? 'visible' : 'hideAll-tree';
        });
    }

    /**
     * check
     */
    public hideChildren() {
        this.children.forEach((child: TheadContainer) => {
            child.hideType = 'hideAll-tree';
        });
    }




    public addChildrenAsy(p: Promise<TheadContainerInterface[]>): void {
        this.$openStatus = 'loading';
        p.then((children?: TheadContainerInterface[]) => {
            this.$openStatus = this.nextStatus;
            this.addChildren(children);
            this.openOrClose(this.$openStatus);
            const thisParent = this.$parent;
            thisParent.rootParentSendMsg({
                ev_type: 'beforeRender',
                render: true,
                event: null,
                data: {
                    object: this,
                    objectName: 'null',
                },
            });
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
        // debugger
        const dataClone = _.keepClone(data);
        const parent = this.$parent;
        const param = _.objectSet(dataClone, {
            treeContainer: {
                paddingLeftNum: this.paddingLeftNum + 15,
            },
            side1: 1,
            side2: 1,
            $groupId: this.$groupId,
            type: parent.type,
            $parent : this,
            $rootTable: parent.$rootTable,
            $rootParent: parent.$rootParent
        }, 'union', /\$/);
        const container: TheadContainer = ContainerFactory.create('thead', param);
        return container;
    }

    /**
     * addAllChildren
     */
    private addChildren(children?: TheadContainerInterface[]): void {
        this.setContainerData({
            children
        });
        // debugger
        const thisParent = this.$parent;
        if (thisParent && thisParent.$parent) {
            const theadParent = thisParent.$parent;
            let insertIndex = theadParent.children.indexOf(thisParent) + 1;
            this.cleanChildrenInSystem();
            this.children.forEach((container: TheadContainer, i: number) => {
                const addContainer: TheadContainer = thisParent.createContain(container);
                // addContainer.hide = true;
                addContainer.treeContainer.resize();
                const delCount = addContainer.treeContainer.allChildren.length;
                theadParent.addChild(addContainer, insertIndex + i);
                insertIndex += delCount;
                this.children[i] = addContainer;
                addContainer.addByTree = true;
            });
        }
        this.resize();
    }


    private cleanChildrenInSystem(): void {
        this.children.forEach((container: TheadContainer) => {
            if (container.$inSystem) {
                this.$rootTable.theadDelete({
                    type: container.type,
                    targetContainerPosition: container.theadPosition,
                    withChildren: true,
                });
            }
        });
    }

    /**
     * showAndHide
     */
    private showAndHide(count: number, type: 'show' | 'hide'): void {
        this.allChildren.forEach((th: TheadContainer, i: number) => {
            // debugger
            const hideType = type === 'hide' ? 'hideAll-tree' : 'visible';
            if (count > 0 && hideType !== th.hideType) {
                th.hideType = hideType;
                count--;
            }
        });

    }


}

