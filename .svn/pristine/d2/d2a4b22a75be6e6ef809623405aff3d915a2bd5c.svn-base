import { SubjectMsgInterface } from "./SubjectMsgInterface";

export interface SubjectInterface {
    subscribe(callback: (msg: any) => void, self: any): void;
    unsubscribe(callback: (msg: any) => void, self: any): void;
    sendMsg(msg: SubjectMsgInterface): void
}