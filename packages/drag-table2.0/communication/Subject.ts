
export class Subject {
    private callbackList: any[] = new Array();
    public subscribe(callback: (msg: any) => void, self: any) {
        this.callbackList.push({
            fun: callback,
            arg: self,
        });
    }
    public unsubscribe(callback: (msg: any) => void, self: any) {
        let index = -1;
        this.callbackList.forEach((item: any, i: number) => {
            if (item === {
                fun: callback,
                arg: self,
            }) {
                index = i;
            }
        });
        // const index = this.callbackList.indexOf(callback);
        if (index > -1) {
            this.callbackList.splice(index, 1);
        }
    }

    public sendMsg(msg: any) {
        this.notify(msg);
    }

    private notify(msg: any) {
        this.callbackList.forEach((obj) => {
            obj.fun.call(obj.arg, msg);
        });
    }
}