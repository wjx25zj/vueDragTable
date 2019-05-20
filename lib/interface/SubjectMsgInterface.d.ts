export interface SubjectMsgInterface {
    ev_type: 'click' | 'dbclick' | 'change' | 'blur' | 'drop' | 'paste' | 'dragStart' | 'mouseDown' | 'middleClick' |
    'rightClick' | 'theadAdd' | 'theadMove' | 'theadDelete' | 'theadMoveReplace' | 'theadAddReplace' |
    'addSum' | 'delOneRowCol' | 'addParent' | 'open' | 'close' | 'error' | 'beforeRender';
    render?: boolean;
    event: any;
    data: {
        objectName: string,
        object: any,
    };
}
