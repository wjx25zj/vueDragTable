import { TbodyContainerInterface } from "../container/TbodyContainer";
import { IndexContainerInterface } from "../container/IndexContainer";
import { CellContainerInterface } from "../container/CellContainer";
import { TheadContainerInterface } from "../container/TheadContainer";



export interface AddDataPostionInterface {
    type?: 'top' | 'left',
    targetParentPosition?: number[]; // 父级容器的位置
    sourceContainerData?: TheadContainerInterface; // 要插入（添加）的数据
    insertIndex?: number; // 插入位置
}

export interface BaseTbodyInterface extends TbodyContainerInterface {
    topLeafList?: IndexContainerInterface[];
    leftLeafList?: IndexContainerInterface[];
    bodyData?: any;
}