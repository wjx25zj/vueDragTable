import { BaseTable } from './viewModule/table/BaseTable';
import { DragTableConfigInterface } from './interface/config/DragTableConfig';
import { DragTableConfig } from './config/DragTableConfig';
import { PositionManager } from './module/positionManager/PositionManager';
import * as _ from './utils/index';
import { BaseTableInterface } from './interface/viewModule/table/BaseTable';
import { PositionInterface } from './interface/PositionInterface';
import { TheadContainerInterface } from './interface/viewModule/container/TheadContainer';
import { TbodyContainerInterface } from './interface/viewModule/container/TbodyContainer';
import { IndexContainerInterface } from './interface/viewModule/container/IndexContainer';
import { SubjectMsgInterface } from './interface/SubjectMsgInterface';
import { Subject } from './communication/Subject';

export class DragTable {
    public id: string = null;
    public $subject: Subject = new Subject();
    public $config: DragTableConfig = {};// 总体设置
    public readonly version: string = '0.2.18';
    public tableList: BaseTable[] = [];
    public tableMap: Map<any, BaseTable> = new Map();
    public $positionManager: PositionManager; // 位置记录器
    public currentTable: BaseTable;
    constructor(id: any, defConfig?: DragTableConfigInterface) {
        this.id = id;
        this.$config = DragTableConfig.getInstance(id);
        this.setConfig(defConfig);
        this.$positionManager = PositionManager.getInstance(id);
    }

    /**
     * addTable
     */
    public addTable(table: BaseTable): PositionInterface {
        if (this.tableMap.has(table.id)) {
            this.deleteTable(table.id);
            console.log('重复表格id:' + table.id);
        }
        table.$groupId = this.id;
        this.tableMap.set(table.id, table);
        table.$parent = this;
        this.currentTable = table;
        this.resize();
        table.$subject.subscribe(this.ontableChange, this);
        return table.position;
    }


    /**
     * createTable
     */
    public createTable(param: BaseTableInterface): BaseTable {
        const unionParam = _.keepClone(param);
        unionParam.$groupId = this.id;
        _.objectSet(unionParam, this.$config.table);
        const table: BaseTable = new BaseTable(unionParam);
        return table;
    }

    /**
     * deleteTable
     */
    public deleteTable(key: any) {
        try {
            this.tableMap.delete(key);
            this.$positionManager.clearPositionMapById(key);
        } catch (error) {
            console.error(error);
        }
        this.resize();
    }


    /**
     * setConfig
     */
    public setConfig(config: DragTableConfigInterface): void {
        try {
            if (config) {
                _.objectSet(this.$config, config, 'union');
            }
        } catch (error) {
            console.error('initDefaultConfig error');
        }
    }

    /**
     * render
     */
    public render(): void {
        this.tableList.forEach((tmpTable: BaseTable) => {
            tmpTable.render();
        });
    }



    /**
     * serialize
     */
    public serialize(): BaseTableInterface[] {
        const jsonList: BaseTableInterface[] = new Array();
        this.tableList.forEach((table: BaseTable, i: number) => {
            jsonList.push(table.clone());
        });
        return jsonList;
    }

    /**
     * deserialize
     */
    public deserialize(jsonList: BaseTableInterface[]): void {
        jsonList.forEach((table: BaseTableInterface, i: number) => {
            const tmpTable = this.createTable(table);
            this.addTable(tmpTable);
        });
    }


    /** 获得容器
     * getContainer
     */
    public getContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): TheadContainerInterface | TbodyContainerInterface | IndexContainerInterface {
        return this.$positionManager.getContainer(position, type);
    }

    /**
     * getTopIndexContainer
     */
    public getTopIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): TheadContainerInterface | TbodyContainerInterface | IndexContainerInterface {
        return this.$positionManager.getTopIndexContainer(position, type);
    }

    /**
     * getTopIndexContainer
     */
    public getLeftIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): TheadContainerInterface | TbodyContainerInterface | IndexContainerInterface {
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

    /**
     * ontableChange
     */
    private ontableChange(msg: SubjectMsgInterface) {
        if (msg.render) {
            this.render();
        }
        return this.$subject.sendMsg(msg);
    }

    /**
     * resize
     */
    private resize(): void {
        this.tableList = [];
        this.tableMap.forEach((table: BaseTable, i: number) => {
            this.tableList.push(table);
        });
    }

}