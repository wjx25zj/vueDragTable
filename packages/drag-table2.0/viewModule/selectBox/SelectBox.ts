import { CellContainer } from '../container/CellContainer';
import { TableContainer } from '../container/TableContainer';
import { IndexContainer } from '../container/IndexContainer';
import { TheadContainer } from '../container/TheadContainer';
export class SelectBox<T> {

    public static instances: any = {};
    /**
     * getInstance
     */
    public static getInstance(type: string, baseTable: TableContainer) {
        let instance = this.instances[type];
        if (!instance) {
            this.instances[type] = instance = new SelectBox(type, baseTable);
        }
        return instance;
    }

    public type: string;
    public selectMap: Map<string, any> = new Map();
    public selectList: any[] = new Array();
    public $TableContainer: TableContainer;
    public currentCotanier: CellContainer | null;
    public size: number = 0;
    public stlye: any = {
        position: 'absolute',
        zIndex: 98,
    };
    constructor(type: string, $TableContainer: TableContainer) {
        this.type = type;
        this.$TableContainer = $TableContainer;
    }


    /**
     * createSelectCell
     */
    public createSelectContainer(dom: any, cellContainer: CellContainer): any {
        // debugger;
        // const container: any = cellContainer.clone([], ['$', 'userData'], true);
        const rootTable = cellContainer.$rootTable;
        const container: any = cellContainer.clone();
        container.selectBoxType = 'main';
        let zIndex = 98;
        switch (cellContainer.type) {


            case 'top':
            case 'top-index':
                zIndex = 100;
                container.selectBoxType = rootTable.hasTopFixedTable ? 'top' : 'main';
                if (rootTable.hasTopFixedTable && rootTable.hasLeftFixedTable) {
                    const theadContainer: TheadContainer = (cellContainer as IndexContainer).$theadContainer;
                    if (theadContainer && !new RegExp(theadContainer.type).test(cellContainer.type)) {
                        container.selectBoxType = 'top-left';
                        zIndex = 101;
                    }
                }
                break;
            case 'left':
            case 'left-index':
                zIndex = 100;
                container.selectBoxType = rootTable.hasLeftFixedTable ? 'left' : 'main';
                if (rootTable.hasTopFixedTable && rootTable.hasLeftFixedTable) {
                    const theadContainer: TheadContainer = (cellContainer as IndexContainer).$theadContainer;
                    if (theadContainer && !new RegExp(theadContainer.type).test(cellContainer.type)) {
                        container.selectBoxType = 'top-left';
                        zIndex = 101;
                    }
                }
                break;
            case 'tbody':
                zIndex = 96;
                container.selectBoxType = 'main';
                break;
        }

        const width = dom.offsetWidth - 2;
        const height = dom.clientHeight - 2;
        container.topStyle = {
            position: 'absolute',
            left: 0 + 'px',
            top: 0 + 'px',
            width: width + 'px',
            borderBottom: '2px solid blue',
            boxSizing: 'border-box',
            zIndex,
        };
        container.bottomStyle = {
            position: 'absolute',
            left: 0 + 'px',
            top: height + 'px',
            width: width + 'px',
            boxSizing: 'border-box',
            borderTop: '2px solid blue',
            zIndex,
        };
        container.leftStyle = {
            position: 'absolute',
            left: 0 + 'px',
            top: 0 + 'px',
            height: height + 'px',
            borderLeft: '2px solid blue',
            boxSizing: 'border-box',
            zIndex,
        };
        container.rightStyle = {
            position: 'absolute',
            left: (width - 1) + 'px',
            top: 0 + 'px',
            height: height + 'px',
            borderLeft: '2px solid blue',
            boxSizing: 'border-box',
            zIndex,
        };
        const style: any = container.style = {};
        style.left = dom.offsetLeft;
        style.top = dom.offsetTop;
        style.position = 'relative';
        style.zIndex = zIndex;
        return container;
    }
    /**
     * add
     */
    public add(container: CellContainer): any {
        this.currentCotanier = container;
        const res = this.selectMap.set(container.id, container);
        this.render();
        return res;
    }
    /**
     * has
     */
    public has(container: CellContainer): boolean {
        let hasSet = false;
        this.selectList.forEach((sc: CellContainer) => {
            if (JSON.stringify(sc.id) === JSON.stringify(container.id)) {
                hasSet = true;
            }
        });
        return hasSet;
    }

    /**
     * delete
     */
    public delete(container: CellContainer): boolean {
        const res = this.selectMap.delete(container.id);
        this.render();
        return res;
    }

    public clear(): any {
        this.currentCotanier = null;
        const res = this.selectMap.clear();
        this.render();
        return res;
    }

    /**
     * forEach
     */
    public forEach(callbackfn: any, thisArg?: any): void {
        this.selectMap.forEach(callbackfn, thisArg);
    }

    /**
     * render
     */
    public render(): void {
        // debugger
        this.selectList = [];
        this.selectMap.forEach((val, key) => {
            this.selectList.push(val);
        });
        this.size = this.selectMap.size;
        // console.log( this.size );
    }

    /**
     * convert
     */
    public convert(): any[] {
        return this.selectList;
    }
}
