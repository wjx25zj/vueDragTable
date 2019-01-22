import { CellContainer } from '../container/CellContainer';
import { TableContainer } from '../container/TableContainer';
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
    public selectSet = new Set();
    public selectList = new Array();
    public $TableContainer: TableContainer;
    public currentCotanier: CellContainer | null;
    public size = 0;
    public stlye = {
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
    public createSelectContainer(dom: any, cellContainer: CellContainer) {
        const container: any = cellContainer.clone([], ['$', 'userData'], true);
        let zIndex = 98;
        switch (cellContainer.type) {
            case 'top':
                zIndex = 100;
                container.fixTop = true;
                break;
            case 'left':
            
                zIndex = 100;
                container.fixLeft = true;
                break;
            case 'tbody':
                zIndex = 96;
                break;
        }

        // console.log('zIndex:' + zIndex);

        container.topStyle = {
            position: 'absolute',
            left: dom.offsetLeft + 'px',
            top: dom.offsetTop + 'px',
            width: dom.offsetWidth + 'px',
            borderBottom: '2px solid blue',
            boxSizing: 'border-box',
            zIndex,
        };
        container.bottomStyle = {
            position: 'absolute',
            left: dom.offsetLeft + 'px',
            top: dom.offsetTop + dom.clientHeight + 'px',
            width: dom.offsetWidth + 'px',
            boxSizing: 'border-box',
            borderTop: '2px solid blue',
            zIndex,
        };
        container.leftStyle = {
            position: 'absolute',
            left: dom.offsetLeft + 'px',
            top: dom.offsetTop + 'px',
            height: dom.offsetHeight + 'px',
            borderLeft: '2px solid blue',
            boxSizing: 'border-box',
            zIndex,
        };
        container.rightStyle = {
            position: 'absolute',
            left: dom.offsetLeft + dom.clientWidth + 'px',
            top: dom.offsetTop + 'px',
            height: dom.offsetHeight + 'px',
            borderLeft: '2px solid blue',
            boxSizing: 'border-box',
            zIndex,
        };
        const style: any = container.style;
        style.position = 'absolute';
        style.zIndex = zIndex;
        style.width = dom.offsetWidth + 'px';
        style.height = dom.offsetHeight + 'px';
        style.left = dom.offsetLeft + 'px';
        style.top = dom.offsetTop + 'px';
        return container;
    }
    /**
     * add
     */
    public add(container: CellContainer) {
        this.currentCotanier = container;
        const res = this.selectSet.add(container);
        this.render();
        return res;
    }
    /**
     * has
     */
    public has(container: CellContainer) {
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
    public delete(container: CellContainer) {
        const res = this.selectSet.delete(container);
        this.render();
        return res;
    }

    public clear() {
        this.currentCotanier = null;
        const res = this.selectSet.clear();
        this.render();
        return res;
    }

    /**
     * forEach
     */
    public forEach(callbackfn: any, thisArg?: any) {
        this.selectSet.forEach(callbackfn, thisArg);
    }

    /**
     * render
     */
    public render() {
        this.selectList = Array.from(this.selectSet);
        this.size = this.selectList.length;
        // console.log( this.size );
    }

    /**
     * convert
     */
    public convert() {
        return this.selectList;
    }
}
