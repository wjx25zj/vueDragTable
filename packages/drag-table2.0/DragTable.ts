import { BaseTableConfigInterface } from './interface/config/BaseTableConfig';
import { BaseTable } from './viewModule/table/BaseTable';
import { DefaultConfigInterface } from './interface/config/DefaultConfig';
import { DefaultConfig } from './config/DefaultConfig';
import { PositionManager } from './module/positionManager/PositionManager';
import * as _ from './utils/index';
import { TableContainerInterface } from './interface/viewModule/container/TableContainer';
import { BaseTableInterface } from './interface/viewModule/table/BaseTable';
import { PositionInterface } from './interface/PositionInterface';
import { TheadContainerInterface } from './interface/viewModule/container/TheadContainer';
import { TbodyContainerInterface } from './interface/viewModule/container/TbodyContainer';
import { IndexContainerInterface } from './interface/viewModule/container/IndexContainer';

export class DragTable {
    public id: any;
    public $defaultConfig: DefaultConfig = new DefaultConfig();
    public readonly version: string = '0.1.18';
    public tableList = [];
    public $positionManager: PositionManager; // 位置记录器
    public currentTable: BaseTable | undefined;


    constructor(id: any, defConfig?: DefaultConfigInterface) {
        this.id = id;
        this.setDefaultConfig(defConfig);
        this.$positionManager = PositionManager.getInstance(id);
    }

    /**
     * addTable
     */
    public addTable(table: BaseTableInterface) {
        let hasTable = false;
        let insertIndex = 0;
        this.tableList.forEach((tmpTable: BaseTable, index: number) => {
            if (tmpTable.id === table.id) {
                hasTable = true;
                insertIndex = index;
            }
        });
        if (!hasTable) {
            table.position.table = this.tableList.length;
            this.tableList.push(table);
        } else {
            this.tableList.splice(insertIndex, 1, table);
            table.position.table = insertIndex;
        }
        this.resize();
    }
    /**
     * createTable
     */
    public createTable(param: BaseTableInterface) {
        const defTableConfig: BaseTableConfigInterface = this.$defaultConfig.table;
        defTableConfig.tableGroupId = this.id;
        const table: BaseTable = new BaseTable(param);
        table.setDefaultConfig(this.$defaultConfig);
        return table;
    }

    /**
     * deleteTable
     */
    public deleteTable(index: number) {
        try {
            this.tableList.splice(index, 1);
        } catch (error) {
            console.error('deleteTable');
        }
        this.resize();
    }

    /**
     * setConfig
     */
    public setDefaultConfig(defConfig: DefaultConfigInterface): void {
        try {
            _.objectSet(this.$defaultConfig, defConfig, 'union');
        } catch (error) {
            console.error('initDefaultConfig error');
        }
    }

    /**
     * render
     */
    public render() {
        this.tableList.forEach((tmpTable: BaseTable) => {
            tmpTable.render();
        });
    }

    /**
     * resize
     */
    public resize() {
        this.tableList.forEach((table: BaseTable, i: number) => {
            table.position.table = i;
        });
    }

    /**
     * serialize
     */
    public serialize() {
        const jsonList = new Array();
        this.tableList.forEach((table: BaseTable, i: number) => {
            jsonList.push(table.serialize());
        });
        return jsonList;
    }

    /**
     * deserialize
     */
    public deserialize(jsonList: BaseTableInterface[]) {
        jsonList.forEach((table: BaseTableInterface, i: number) => {
            const tmpTable = this.createTable({});
            tmpTable.deserialize(table);
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
}