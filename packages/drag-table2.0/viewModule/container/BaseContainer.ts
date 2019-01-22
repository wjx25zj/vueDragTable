import { BaseContainerInterface } from '../../interface/BaseContainer';
import * as _ from '../../utils/index';
import { DefaultConfig } from '../../config/DefaultConfig';
import { PositionManager } from '../../module/positionManager/PositionManager';
import { PositionInterface } from '../../interface/PositionInterface';
import { TheadContainer } from './TheadContainer';
import { TbodyContainer } from './TbodyContainer';
import { IndexContainer } from './IndexContainer';
import { BaseCellConfig } from '../../config/BaseCellConfig';
import { Subject } from '../../communication/Subject';
import { SubjectMsgInterface } from 'packages/drag-table2.0/interface/SubjectMsgInterface';

// 只有对于容器来说才有相对位置
export class BaseContainer {
    public id: any = null;
    public EPI_READY = true; // 是否可以快速导出和恢复
    public config: BaseCellConfig = {};
    public style: any = {};
    public position: PositionInterface = {
        table: 0,
        colNum: 0,
        rowNum: 0,
    };
    public userData: any = {};
    public $subject: Subject = new Subject(); //  订阅事件
    public $defaultConfig: DefaultConfig;
    public $positionManager: PositionManager; // 位置记录器
    public $defConfigId: string = 'defConfig';
    public $positionManagerId: string = 'single-table';

    constructor(param: BaseContainerInterface) {
        this.id = param.id;
        this.$defConfigId = param.$defConfigId || this.$defConfigId;
        this.$positionManagerId = param.$positionManagerId || this.$positionManagerId;
        this.$defaultConfig = DefaultConfig.getInstance(param.$defConfigId);
        // this.setConfig(this.$defaultConfig.baseContainer);
        // 设置positionManager
        this.$positionManager = PositionManager.getInstance(param.$positionManagerId);

    }

    /**
     * setContainerData
     */
    public setContainerData(param: BaseContainerInterface) {
        _.objectSet(this, param);
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
                _.objectSet(this.config, configCopy, 'union');
                _.objectSet(this.style, configCopy.style, 'union');
                _.objectSet(this, this.config);// 不加union
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
    public setProperty(key: string, val: any) {
        if (val === undefined) {
            return;
        }
        (this as any)[key] = val;
    }

    public onClick(ev: any): void {
        console.log('click');
    }

    /**
     * subjectSend
     */
    public subjectSend(msg: SubjectMsgInterface): void {
        this.$subject.sendMsg(msg);
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
    public saveLastPositionMap(position: PositionInterface) {
        return this.$positionManager.saveLastPositionMap(position);
    }
}