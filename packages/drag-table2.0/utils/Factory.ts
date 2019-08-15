import { TreeContainer } from "../viewModule/container/TreeContainer";
import * as _ from './index';
import { TheadContainer } from '../viewModule/container/TheadContainer';
import { SelfContainer } from '../viewModule/container/SelfContainer';
export class ContainerFactory {
    // 工厂方法
    public static create(type: string, param: any): any {
        const paramClone = _.keepClone(param);
        let createContainer = null;
        if (/inner/.test(type)) {
            createContainer = new TreeContainer(paramClone);
        } else if (/thead|Thead/.test(type)) {
            createContainer = new TheadContainer(paramClone);
        } else if (/selfContainer/.test(type)) {
            createContainer = new SelfContainer(paramClone);
        } else if (/treeContainer/.test(type)) {
            createContainer = new TreeContainer(paramClone);
        }

        return createContainer;
    }
}
