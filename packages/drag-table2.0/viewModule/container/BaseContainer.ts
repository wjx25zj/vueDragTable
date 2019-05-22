import { BaseContainerInterface } from '../../interface/viewModule/container/BaseContainer';
import * as _ from '../../utils/index';
import { DragTableConfig } from '../../config/DragTableConfig';
import { PositionManager } from '../../module/positionManager/PositionManager';
import { PositionInterface } from '../../interface/PositionInterface';
import { TheadContainer } from './TheadContainer';
import { TbodyContainer } from './TbodyContainer';
import { IndexContainer } from './IndexContainer';
import { Subject } from '../../communication/Subject';
import { SubjectMsgInterface } from '../../interface/SubjectMsgInterface';
import { UtilsConfig } from '../../utils/base/config';
import { BaseTable } from '../table/BaseTable';

// 只有对于容器来说才有相对位置
export abstract class BaseContainer {
    public id: any;
    public config: any;
    public style: any;
    public type: 'top' | 'left' | 'top-index' | 'left-index' | 'inner' | 'tbody' | 'table';
    public position: PositionInterface;
    public children: BaseContainer[]; // 子容器
    public userData: any;
    public $groupId: string;
    public $subject: Subject = new Subject(); //  订阅事件
    public $dragTableConfig: DragTableConfig;
    public $positionManager: PositionManager; // 位置记录器
    public $rootTable: BaseTable; // 根容器
    public $parent: any;
    public $inSystem: boolean;
    public widthNum: number;
    public heightNum: number;
    public widthChildNum: number;
    public heightChildNum: number;
    public widthSelfNum: number;
    public heightSelfNum: number;
    public paddingLeftNum: number;
    public paddingRightNum: number;

    constructor(param: BaseContainerInterface) {
        const paramClone = _.keepClone(param);
        // 1、预先初始化，包括默认配置config
        // 2、并将dragTableConfig融合到用户参数param里获得param2；
        this.initBeforeSetData(paramClone);
        // 设置一遍 默认配置config的参数
        _.objectSet(this, this.config, 'union');
        // 设置用户设置param
        this.setContainerData(paramClone);
        // this.config = null;
    }
    /**
     * initBeforeConstructor
     */
    public initBeforeSetData(paramClone: any): void {
        // 初始化默认配置
        this.id = paramClone.id || 'def_' + _.guid();
        this.config = {};
        this.$groupId = paramClone.$groupId;
        this.$rootTable = paramClone.$rootTable;
        this.$positionManager = PositionManager.getInstance(this.$groupId);
        this.$dragTableConfig = DragTableConfig.getInstance(this.$groupId);
        // dragtable设置注入
        this.config = _.clone(this.$dragTableConfig.BaseContainerConfig);
        // _.objectSet(this.config, this.$dragTableConfig.BaseContainerConfig, 'union');
        _.objectSet(paramClone, this.$dragTableConfig.baseContainer, 'union');
        this.type = paramClone.type || 'top';
    }

    /**
     * setContainerData
     */
    public setContainerData(containerData: BaseContainerInterface, containerData2?: BaseContainerInterface, weight1?: object, weight2?: object, callBack?: any): void {
        const paramClone = _.keepClone(containerData);
        const paramClone2 = _.keepClone(containerData2);
        const self: any = this;
        try {
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    // if(key === 'hideType'){
                    //     console.log(containerData.hideType);
                    // }
                    const value = this.getDataByWeight(key, paramClone, paramClone2, weight1, weight2);
                    if (value === null || value === undefined) {
                        this.setProperty(key, value);
                        continue;
                    } else if (/(^\$)|cell|bodyData|Entity|treeContainer|tipContainer/.test(key)) {
                        // debugger
                        // do nothing; 
                    } else if (typeof value === 'object' && !Array.isArray(value)) {
                        if (self[key] && typeof self[key].setContainerData === 'function') {
                            self[key].setContainerData(value);
                            continue;
                        } else {
                            _.objectSet(self[key], value, 'union', /\$/);
                            continue;
                        }
                    } else if (key === 'children') {
                        this.setChildren(value);
                        continue;
                    }

                    if (callBack && typeof callBack === 'function') {
                        callBack(key, value);
                    } else {
                        this.setProperty(key, value);
                    }
                }
            }
        } catch (error) {
            console.error('setContainerData 中出现出错');
            console.error(error);
        }

    }

    /**
     * setChirldren
     */
    public setChildren(children: any[]) {
        this.children = new Array();
        children.forEach((item: any) => {
            const child = this.createContain(item);
            this.addChild(child);
        });
    }
    /**
     * createContain
     */
    public createContain(data: any): any {
        // do nothing
    }
    /**
     * addChild
     * 备注：添加子节点
     * @param child: BaseCell 要添加的子节点
     * @param targetIndex?: number 添加的位置
     */
    public addChild(child: BaseContainer, targetIndex?: number): any {
        targetIndex = (targetIndex === undefined || targetIndex === null) ? this.children.length : targetIndex;
        this.children.splice(targetIndex, 0, child);
        child.$parent = this;
        return child.id;
    }
    /**
     * deletChild
     * 备注：删除子节点
     * @param count: number 要删除的个数 默认为1
     * @param targetIndex?: number 删除的位置
     * @param needDeleteItChildren?: boolean 是否连同该被 要删除的节点A 和A的子节点都删除
     */
    public deletChild(targetIndex: number, count?: number, needDeleteItChildren?: boolean): void {
        let hasDeleteContainer = [];
        count = count == null ? 1 : count;
        if (needDeleteItChildren) {
            hasDeleteContainer = this.children.splice(targetIndex, count);
        } else {
            const childrenList: any[] = []; // 临时存被删除BaseTheadCell的孩子们
            let childrenStartIndex = targetIndex + count;
            for (let index = targetIndex; index < targetIndex + count; index++) {
                this.children[index].children.forEach((child: BaseContainer, i: number) => {
                    this.addChild(child, childrenStartIndex);
                    childrenStartIndex++;
                });
            }
            hasDeleteContainer = this.children.splice(targetIndex, count);
        }
        hasDeleteContainer.forEach((container: BaseContainer) => {
            container.$inSystem = false;
        });
    }

    /**
     * replaceChild
     * 备注：替换子节点
     * @param count: number 要删除的个数 默认为1
     * @param targetIndex?: number 删除的位置
     * @param needDeleteItChildren?: boolean 是否连同该被 要删除的节点A 和A的子节点都删除
     */
    public replaceChild(newChild: BaseContainer, targetIndex: number, needDeleteItChildren?: boolean): void {
        if (!newChild.id) {
            newChild.id = 'def_' + _.guid();
        }
        if (targetIndex > this.children.length - 1) {
            this.addChild(newChild, targetIndex);
        } else {
            newChild.position = this.children[targetIndex].position;
            if (needDeleteItChildren) {
                this.children.splice(targetIndex, 1, newChild);
            } else {
                const childrenList: any[] = []; // 临时存被删除BaseTheadCell的孩子们
                this.children[targetIndex].children.forEach((child: BaseContainer, i: number) => {
                    childrenList.push(child);
                });
                this.children.splice(targetIndex, 1, newChild);
                newChild.children = newChild.children.concat(childrenList);
            }
        }
        newChild.$parent = this;
    }
    /**
     * clone
     */
    public clone(excludeReg?: RegExp, keepReg?: RegExp, withFunction?: boolean): any {
        keepReg = keepReg || UtilsConfig.keepReg;
        // return _.myObejctClone(this, excludeReg, keepReg, withFunction);
        const object: any = Object.create({});
        const Obj = this;
        for (const key in Obj) {
            if (Obj.hasOwnProperty(key) || (withFunction && typeof Obj[key] === 'function')) {
                const tmpObject: any = Obj[key];
                let val: any = null;
                const needContinue = excludeReg ? (excludeReg.test(key) ? true : false) : false;
                const needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
                if (needContinue) {
                    continue;
                } else if (needKeep) {
                    val = Obj[key];
                } else if (Array.isArray(tmpObject)) {
                    val = [];
                    tmpObject.forEach((item: any) => {
                        if (typeof item.clone === 'function') {
                            val.push(item.clone(excludeReg, keepReg, withFunction));
                        } else {
                            val.push(_.keepClone(item, excludeReg, keepReg, withFunction));
                        }
                    });
                } else if (typeof Obj[key] === 'object') {
                    if (tmpObject && typeof tmpObject.clone === 'function') {
                        val = tmpObject.clone(excludeReg, keepReg, withFunction);
                    } else {
                        val = (_.keepClone(tmpObject, excludeReg, keepReg, withFunction));
                    }
                } else {
                    val = Obj[key];
                }
                object[key] = val;
            }
        }
        return object;
    }
    /**
     * 通用设置配置
     *
     * @param {*} config
     * @memberof BaseContainer
     */
    public setConfig(config: any): void {
        const configCopy = _.clone(config);
        try {
            if (configCopy) {
                _.objectSet(this, configCopy, 'union');
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 设置属性
     *
     * @param {string} key
     * @param {*} val
     * @returns
     * @memberof BaseContainer
     */
    public setProperty(key: string, val: any): void {
        if (val === undefined) {
            return;
        }
        (this as any)[key] = val;
    }

    public onClick(ev: any): void {
        if (this.$rootTable) {
            this.$rootTable.subjectSend({
                ev_type: 'click',
                event: ev,
                data: {
                    objectName: 'BaseContainer',
                    object: this,
                },
            });
        }
    }

    /**
     * 鼠标按下
     *
     * @param {*} ev
     * @param {*} th
     * @memberof BaseTable
     */
    public onMouseDown(ev: any): any {
        ev.stopPropagation();
        // 现代浏览器阻止默认事件
        if (ev && ev.preventDefault) {
            ev.preventDefault();
        } else {
            // 阻止IE
            (window as any).event.returnValue = false;
        }
        return false;
    }
    /**
     * onBlur
     */
    public onBlur(ev: any): void {
    }


    /**
     * 滚动事件 调整scrollTop scrollLeft
     *
     * @private
     * @param {*} ev
     * @memberof BaseTable
     */
    public onScroll(ev: any): void {
        this.style.scrollTop = ev.srcElement.scrollTop;
        this.style.scrollLeft = ev.srcElement.scrollLeft;
    }

    /**
     * subjectSend
     */
    public subjectSend(msg: SubjectMsgInterface): any[] {
        return this.$subject.sendMsg(msg);
    }

    /** 获得容器
     * getContainer
     */
    public getContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): TheadContainer | TbodyContainer | IndexContainer {
        return this.$positionManager.getContainer(position, type);
    }

    /**
     * getTopIndexContainer
     */
    public getTopIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): TheadContainer | TbodyContainer | IndexContainer {
        return this.$positionManager.getTopIndexContainer(position, type);
    }

    /**
     * getTopIndexContainer
     */
    public getLeftIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): TheadContainer | TbodyContainer | IndexContainer {
        return this.$positionManager.getLeftIndexContainer(position, type);
    }
    /**
     * getTopIndexContainer
     */
    public getRowObj(position: PositionInterface, type?: 'clone' | 'source' | 'last'): object {
        return this.$positionManager.getRowObj(position, type);
    }
    /**
     * getColObj
     */
    public getColObj(position: PositionInterface, type?: 'clone' | 'source' | 'last'): object {
        return this.$positionManager.getColObj(position, type);
    }

    /**
     * saveLastPositionMap
     */
    public saveLastPositionMap(position: PositionInterface): object {
        return this.$positionManager.saveLastPositionMap(position);
    }

    /**
     * parpare
     */
    protected getDataByWeight(key: string, data1?: any, data2?: any, weight1?: any, weight2?: any): any {
        const dk1 = data1 ? (data1[key]) : undefined;
        const dk2 = data2 ? data2[key] : undefined;
        const wk1 = weight1 ? weight1[key] : undefined;
        const wk2 = weight2 ? weight2[key] : undefined;
        let resData: any;
        if (dk1 !== undefined && dk2 !== undefined) {
            if (wk1 && wk2) {
                if (!isNaN(wk1) && !isNaN(wk2)) {
                    resData = wk1 > wk2 ? dk1 : dk2;
                } else if (!isNaN(wk1) && isNaN(wk2)) {
                    resData = dk1;
                } else if (isNaN(wk1) && !isNaN(wk2)) {
                    resData = dk2;
                } else if (typeof wk1 === 'object' && typeof wk2 === 'object') {
                    resData = {};
                    for (const sonKey in dk1) {
                        if (dk1.hasOwnProperty(sonKey) && !resData.hasOwnProperty(sonKey)) {
                            const sonValue = this.getDataByWeight(sonKey, dk1, dk2, wk1, wk2);
                            resData[sonKey] = sonValue;
                        }
                    }
                    for (const sonKey in dk2) {
                        if (dk2.hasOwnProperty(sonKey) && !resData.hasOwnProperty(sonKey)) {
                            const sonValue = this.getDataByWeight(sonKey, dk1, dk2, wk1, wk2);
                            resData[sonKey] = sonValue;
                        }
                    }
                }
            } else if (wk1 && !wk2) {
                resData = dk1;
            } else if (!wk1 && wk2) {
                resData = dk2;
            } else if (!wk1 && !wk2) {
                resData = dk1;
            }
        } else if (dk1 === undefined && dk2 !== undefined) {
            resData = dk2;
        } else if (dk1 !== undefined && dk2 === undefined) {
            resData = dk1;
        } else if (dk1 === undefined && dk2 === undefined) {
            //
        }
        return resData;
    }
}
