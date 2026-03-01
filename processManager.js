// processManager.js
const ProcessManager = {
    procs: {},
    nextPid: 1,
    createProcess(path){
        const content = FS.readFile(path);
        try {
            const code = JSON.parse(content);
            const pid = this.nextPid++;
            const procData = {
                pid: pid,
                path: path,
                vars: {},
                status: "running"
            }
            this.procs[pid] = procData;

            try {
                EXEC.expr(procData, code);
                this.kill(pid);
            } catch(e){
                console.error(`Process ${pid} crashed:`, e);
                this.kill(pid)
            }
        } catch(e){
            Popup.showAlert({
                title: path,
                content: `${path} is not a valid Win32 application.`,
                icon: Popup.ICON_ERROR,
                buttons: [
                    { label: "OK", action:()=>{} }
                ],
                obligatory: true
            });
            return false;
        }
    },
    kill(pid){
        if (this.procs[pid]){
            this.procs[pid].status = "dead";
            delete this.procs[pid];
        }
        // TODO: Hacer un querySelectorAll a los elementos DOM con clase "window-pid-*" (no ventanas zombi BRO)
    }
}