import { PositionInterface } from '../../interface/PositionInterface';
import { CellContainer } from '../../viewModule/container/CellContainer';
import * as _ from '../../utils';
import { TreeContainer } from '../../viewModule/container/TreeContainer';


export class PositionManager {

    public static instances: any = {};
    /**
     * getInstance
     */
    public static getInstance(type: string) {
        let instance = this.instances[type];
        if (!instance) {
            this.instances[type] = instance = new PositionManager(type);
        }
        return instance;
    }
    public positionMap: object = {

    };

    public treeContainerMap: Map<any, TreeContainer> = new Map();
    public hideContainerMap: Map<any, CellContainer> = new Map();
    public type: string;
    public $editContainer: CellContainer | null = null;
    public canFocus: boolean = true; // 是否可以获得焦点

    constructor(type: string) {
        this.type = type;
    }


    public clearPositionMapById(key: any): void {
        delete this.positionMap[key + 'clone'];
        delete this.positionMap[key + 'last'];
        delete this.positionMap[key + 'source'];
    }

    /**
     * getContainer
     */
    public getContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any {
        let res = null;
        try {
            if (position) {
                type = type || 'source';
                const copyPosition = _.clone(position);
                copyPosition.table = copyPosition.table + type;
                const tableObj = this.positionMap[copyPosition.table];
                if (tableObj) {
                    const colObj = tableObj[copyPosition.colStr];
                    if (colObj) {
                        res = colObj[copyPosition.rowStr];
                    }
                }
            }
        } catch (error) {
            console.error('getContainer发生错误');
            console.log(error);
        }

        return res;
    }



    public getTopIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any {
        type = type || 'source';
        const cloneP = _.clone(position);
        cloneP.rowStr = 0;
        return this.getContainer(cloneP, type);
    }

    public getLeftIndexContainer(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any {
        type = type || 'source';
        const cloneP = _.clone(position);
        cloneP.colStr = '@';
        return this.getContainer(cloneP, type);
    }

    /**
     * getColObj
     */
    public getColObj(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any {
        type = type || 'source';
        const copyPosition = _.clone(position);
        copyPosition.table = copyPosition.table + type;
        let res = null;
        const tableObj = this.positionMap[copyPosition.table];
        if (tableObj) {
            const colObj = tableObj[copyPosition.colStr];
            res = colObj;
        }
        return res;
    }

    /**
     * getRowObj
     */
    public getRowObj(position: PositionInterface, type?: 'clone' | 'source' | 'last'): any {
        type = type || 'source';
        const copyPosition = _.clone(position);
        copyPosition.table = copyPosition.table + type;
        let res = null;
        const tableObj = this.positionMap[copyPosition.table];
        if (tableObj) {
            res = {};
            for (const colStr in tableObj) {
                if (tableObj.hasOwnProperty(colStr)) {
                    const colObj = tableObj[colStr];
                    res[colStr] = colObj[copyPosition.rowStr];
                }
            }
        }
        return res;
    }

    /**
     * setPositionMap
     */
    public setPositionMap(position: PositionInterface, container: CellContainer, type?: 'clone' | 'source' | 'last'): void {
        type = type || 'source';
        const copyPosition = _.clone(position);
        copyPosition.table = copyPosition.table + type;
        if (!this.positionMap.hasOwnProperty(copyPosition.table)) {
            this.positionMap[copyPosition.table] = {};
        }
        const tableObj = this.positionMap[copyPosition.table];
        if (!tableObj.hasOwnProperty(copyPosition.colStr)) {
            tableObj[copyPosition.colStr] = {};
        }
        const colObj = tableObj[copyPosition.colStr];
        colObj[copyPosition.rowStr] = container;
    }

    /**
     * saveLastPositionMap
     */
    public saveLastPositionMap(position: PositionInterface): object {
        const copyPosition = _.clone(position);
        const tableClone = this.positionMap[copyPosition.table + 'source'];
        for (const colStr in tableClone) {
            if (tableClone.hasOwnProperty(colStr)) {
                const colObj = tableClone[colStr];

                for (const rowStr in colObj) {
                    if (colObj.hasOwnProperty(rowStr)) {
                        const container: CellContainer = colObj[rowStr];
                        const lastPosition = _.clone(copyPosition);
                        lastPosition.colStr = colStr;
                        lastPosition.rowStr = rowStr;
                        // debugger
                        this.setPositionMap(lastPosition, container.clone(), 'last');
                    }
                }

            }
        }
        return this.positionMap[copyPosition.table + 'last'];
    }
}
