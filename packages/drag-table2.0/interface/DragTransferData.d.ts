import { DragStartDataInterface } from './DragStartData';
import { TheadContainerInterface } from './viewModule/container/TheadContainer';

export interface DragTransferDataInterface {
    target: {
        containerData: TheadContainerInterface;
        withChildren?: boolean;
    }
    source: {
        containerData: TheadContainerInterface;
        withChildren?: boolean;
    }
    operationType: 'add' | 'move' | 'add-replace' | 'move-replace';
    targetBearing: 'top' | 'right' | 'bottom' | 'left' | 'inner' | 'other';
}
