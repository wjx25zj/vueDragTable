
import { BaseTheadConfig } from '../config/BaseTheadConfig';
import { BaseTableConfig } from '../config/BaseTableConfig';
import { BaseContainerConfig } from '../config/BaseContainerConfig';
import { IndexTheadConfig } from './IndexTheadConfig';
import { BaseTableListConfig } from './BaseTableListConfig';
import { BaseTbodyConfig } from './BaseTbodyConfig';
import { CellContainerConfig } from './CellContainerConfig';
import { TheadContainerConfig } from './TheadContainerConfig';
import { BaseCellConfig } from './BaseCellConfig';
import { BaseCellConfigIneterface } from '../interface/config/BaseCellConfig';
export class DefaultConfig {
    public static instances: object = {

    };
    /**
     * getInstance
     */
    public static getInstance(id: any) {
        let res: DefaultConfig;
        if (this.instances.hasOwnProperty(id)) {
            res = this.instances[id];
        } else {
            res = this.instances[id] = new DefaultConfig();
        }
        return res;
    }

    public tableList?: BaseTableConfig = new BaseTableListConfig(); // BaseTable类配置
    public table?: BaseTableConfig = new BaseTableConfig(); // BaseTable类配置
    public topThead?: BaseTheadConfig = new BaseTheadConfig(); // 上表头theadTopEntity配置
    public leftThead?: BaseTheadConfig = new BaseTheadConfig(); // 左表头theadLeftEntity配置
    public topIndexThead?: BaseTheadConfig = new IndexTheadConfig(); // 上表头theadTopEntity配置
    public leftIndexThead?: BaseTheadConfig = new IndexTheadConfig(); // 左表头theadLeftEntity配置
    public baseTbody?: BaseTbodyConfig = new BaseTbodyConfig(); // tbody配置
    public baseCell: BaseCellConfigIneterface = new BaseCellConfig(); // Cell配置
    public cellContainer?: CellContainerConfig = new CellContainerConfig(); // 基础Cell容器
    public baseContainer?: BaseContainerConfig = new BaseContainerConfig(); // 基础容器
    public theadContainer?: TheadContainerConfig = new TheadContainerConfig(); // 基础容器

    constructor() {
        this.leftIndexThead.style.width = '80px';
    }
}
