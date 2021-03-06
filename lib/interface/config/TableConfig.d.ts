import { BaseTableInterface } from "../viewModule/table/BaseTable";
import { BaseTheadInterface } from "../viewModule/thead/BaseThead";
import { IndexTheadInterface } from "../viewModule/thead/IndexThead";
import { BaseTbodyInterface } from "../viewModule/tbody/BaseTbody";
import { BaseCellInterface } from "../viewModule/cell/BaseCellInterface";
import { CellContainerInterface } from "../viewModule/container/CellContainer";
import { BaseContainerInterface } from "../viewModule/container/BaseContainer";
import { TheadContainerInterface } from "../viewModule/container/TheadContainer";


export interface TableConfigInterface {
    table?: BaseTableInterface;// BaseTable类配置
    topThead?: BaseTheadInterface; // 上表头theadTopEntity配置
    leftThead?: BaseTheadInterface; // 左表头theadLeftEntity配置
    topIndexThead?: IndexTheadInterface; // 上表头theadTopEntity配置
    leftIndexThead?: IndexTheadInterface; // 左表头theadLeftEntity配置
    baseTbody?: BaseTbodyInterface;  // tbody配置
}
