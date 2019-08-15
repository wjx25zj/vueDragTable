import { CellContainerInterface } from "../container/CellContainer";

export interface SelectOptionInterface {
    text?: any;
    value?: any;
}
export interface DisplayOptionInterface {
    displayType: 'text' | 'select' | 'input' | string;
    select?: {
        optionList: SelectOptionInterface[],
    };
}

export interface DisplayClassInterface {
    normal?: DisplayOptionInterface;
    dbclick?: DisplayOptionInterface;
    readonly readonly?: DisplayOptionInterface
}

export interface VerificationInterface {
    state?: boolean,
    hasVerification?: boolean,
    vTypes?: string[],
    message?: any
}

export interface BaseCellInterface {
    $groupId?: string;
    value?: any;
    content?: any;
    oldValue?: any;
    $parent?: CellContainerInterface;
    $defConfigId?: string;
    userData?: any;
    style?: any,
    config?: BaseCellInterface;
    displayType?: string;
    displayClass?: DisplayClassInterface;
    verification?: VerificationInterface;
}
