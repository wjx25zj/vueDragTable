import { BaseContainerInterface } from "./BaseContainer";
import { TheadContainerInterface } from "./TheadContainer";

export interface SelfContainerInterface extends BaseContainerInterface {
    show?: boolean;
    $parent?: TheadContainerInterface,
    svg?: any | {
        tips?: {
            paths: string[]
        }
    };
}