import { SubjectMsgInterface } from "./SubjectMsgInterface";

export interface SubjectInterface {
    subscribe(callback: (msg: SubjectMsgInterface) => void, self: any): void;
    unsubscribe(callback: (msg: SubjectMsgInterface) => void, self: any): void;
    sendMsg(msg: SubjectMsgInterface): void
}