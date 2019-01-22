export interface SubjectMsgInterface {
    ev_type: string;
    event: any;
    data: {
        objectName: string,
        object: any,
    };
}
