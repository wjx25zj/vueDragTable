import { TheadContainerInterface } from './viewModule/container/TheadContainer';

export interface ParamTheadAdd {
    type: 'top' | 'left' | 'top-index' | 'left-index'; // 选择要操作表头类型
    sourceContainerData?: TheadContainerInterface; // 要插入（添加）的数据
    targetParentPosition: any[]; // 父级容器的位置
    insertIndex?: number; // 插入位置
}
export interface ParamTheadMove {
    type: 'top' | 'left' | 'top-index' | 'left-index'; // 选择要操作表头类型
    sourceContainerData: TheadContainerInterface; // 要插入（添加）的数据
    targetParentPosition: any[]; // 父级容器的位置
    withChildren?: boolean; // 是否连同子节点一同移动
    insertIndex?: number; // 插入位置
}
export interface ParamTheadAddReplace {
    type: 'top' | 'left' | 'top-index' | 'left-index'; // 选择要操作表头类型
    sourceContainerData: TheadContainerInterface; // 要插入（替换）的数据
    targetContainerPosition: any[]; // 要覆盖的容器位置
    withChildren?: boolean; // 是否连同子节点一同移动
}

export interface ParamTheadMoveReplace {
    type: 'top' | 'left' | 'top-index' | 'left-index'; // 选择要操作表头类型
    targetContainerPosition: any[]; // 要覆盖的目标位置
    sourceContainerData: TheadContainerInterface; //  要移动(替换)的数据
    withChildren?: boolean;// 是否连同子节点一同删除
}

export interface ParamTheadDelete {
    type: 'top' | 'left' | 'top-index' | 'left-index'; // 选择要操作表头类型
    targetContainerPosition: any[];
    withChildren?: boolean;
}
export interface ProcessTheadInterface {
    operationType: 'add' | 'move' | 'add-replace' | 'move-replace' | 'delete';
    param: ParamTheadAdd | ParamTheadMove | ParamTheadAddReplace | ParamTheadMoveReplace | ParamTheadDelete;
}
