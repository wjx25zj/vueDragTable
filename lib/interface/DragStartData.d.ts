import { TheadContainerInterface } from './viewModule/container/TheadContainer';
export interface DragStartDataInterface {
    containerData: TheadContainerInterface;
    withChildren?: boolean;
    operationType: 'add' | 'move' | 'add-replace' | 'move-replace';
}
