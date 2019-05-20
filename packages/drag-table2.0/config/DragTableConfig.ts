import { BaseCellInterface } from '../interface/viewModule/cell/BaseCellInterface';
import { TheadContainerInterface } from '../interface/viewModule/container/TheadContainer';
import { BaseTableInterface } from '../interface/viewModule/table/BaseTable';
import { BaseTheadInterface } from '../interface/viewModule/thead/BaseThead';
import { IndexTheadInterface } from '../interface/viewModule/thead/IndexThead';
import { BaseTbodyInterface } from '../interface/viewModule/tbody/BaseTbody';
import { CellContainerInterface } from '../interface/viewModule/container/CellContainer';
import { BaseContainerInterface } from '../interface/viewModule/container/BaseContainer';
import { TreeContainerInterface } from '../interface/viewModule/container/TreeContainer';
import { BaseCellConfig } from './BaseCellConfig';
import { BaseContainerConfig } from './BaseContainerConfig';
import { CellContainerConfig } from './CellContainerConfig';
import { TheadContainerConfig } from './TheadContainerConfig';
import { TreeContainerConfig } from './TreeContainerConfig';
import { IndexContainerConfig } from './IndexContainerConfig';
import { BaseTheadConfig } from './BaseTheadConfig';
import { IndexTheadConfig } from './IndexTheadConfig';
import { BaseTableConfig } from './BaseTableConfig';
import { BaseTbodyConfig } from './BaseTbodyConfig';
import { IndexContainerInterface } from '../interface/viewModule/container/IndexContainer';
import { TbodyContainerConfig } from './TbodyContainerConfig';
import { TbodyContainerInterface } from '../interface/viewModule/container/TbodyContainer';
import { SelfContainerInterface } from '../interface/viewModule/container/SelfContainer';
import { SelfContainerConfig } from './SelfContainerConfig';

export class DragTableConfig {
    public static instances: object = {
    };
    /**
     * getInstance
     */
    public static getInstance(id: any) {
        let res: DragTableConfig;
        if (this.instances.hasOwnProperty(id)) {
            res = this.instances[id];
        } else {
            res = this.instances[id] = new DragTableConfig();
        }
        return res;
    }
    // public renderEvent?= ['blur', 'change', 'paste', 'render', 'theadAdd', 'afterDrop'];

    public BaseCellConfig?= new BaseCellConfig();
    public BaseContainerConfig?= new BaseContainerConfig();
    public CellContainerConfig?= new CellContainerConfig();
    public TheadContainerConfig?= new TheadContainerConfig();
    public TbodyContainerConfig?= new TbodyContainerConfig();
    public TreeContainerConfig?= new TreeContainerConfig();
    public SelfContainerConfig?= new SelfContainerConfig();
    public IndexContainerConfig?= new IndexContainerConfig();
    public BaseTheadConfig?= new BaseTheadConfig();
    public IndexTheadConfig?= new IndexTheadConfig();
    public BaseTbodyConfig?= new BaseTbodyConfig();
    public BaseTableConfig?= new BaseTableConfig();

    public baseCell?: BaseCellInterface = {}; // Cell配置
    public baseContainer?: BaseContainerInterface = {}; // 基础容器
    public cellContainer?: CellContainerInterface = {}; // 基础Cell容器
    public topThead?: BaseTheadInterface = {}; // 上表头theadTopEntity配置
    public leftThead?: BaseTheadInterface = {}; // 左表头theadLeftEntity配置
    public topIndexThead?: IndexTheadInterface = {}; // 上表头theadTopEntity配置
    public leftIndexThead?: IndexTheadInterface = {}; // 左表头theadLeftEntity配置
    public theadContainer?: TheadContainerInterface = {}; // 基础容器
    public topIndexContainer?: IndexContainerInterface = {}; // 行列标志容器
    public leftIndexContainer?: IndexContainerInterface = {
        style: {
            width: '80px'
        }
    }; // 行列标志容器
    public treeContainer?: TreeContainerInterface = {}; // 钻取容器
    public selfContainer?: SelfContainerInterface = {}; // 提示容器
    public tbodyContainer?: TbodyContainerInterface = {}; // tbody配置
    public baseTbody?: BaseTbodyInterface = {}; // tbody配置
    public table?: BaseTableInterface = {}; // BaseTable类配置



}
