import { CellContainerInterface } from "../container/CellContainer";
import { BaseCellConfigIneterface } from "../../config/BaseCellConfig";

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
    value?: any;
    $parent?: CellContainerInterface;
    $defConfigId?:string;
    userData?: any;
    style?: any,
    config?: BaseCellConfigIneterface;
    displayType?: string;
    displayClass?: DisplayClassInterface;
    verification?: VerificationInterface
}
