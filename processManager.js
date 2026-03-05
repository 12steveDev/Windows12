// processManager.js
const ProcessManager = {
    procs: {},
    nextPid: 1,
    splitCmdLineArgs(cmdLine){
        const args = [];
        let currArg = "";
        let quoteMode = false;
        let escape = false
        for (const char of cmdLine){
            if (escape){ // ¿hubo un "\" antes?
                currArg += char;
                escape = false;
                continue;
            } else if (char === "\\"){ // el pinche backslash jeje te kero
                escape = true;
            } else if (char === '"'){ // la pinshe comilla destruye-inspiración
                if (quoteMode){
                    args.push(currArg);
                    currArg = "";
                }
                quoteMode = !quoteMode; // por momentos me siento tony stark
            } else if (char === " "){ // el separador 🗣
                if (quoteMode){ // dentro de las comillas puede haber espacios, obvio
                    currArg += char;
                } else {
                    // quitar espacios internos
                    if (currArg.length === 0) continue;
                    args.push(currArg);
                    currArg = "";
                }
            } else {
                currArg += char;
            }
            // console.log(`(curr:${char}) ${escape?"(escape)":"        "} ${quoteMode?"(quote)":"       "}`, currArg) // descomentar para ver las entrañas de un parser, supongo XD
        }
        if (currArg) args.push(currArg);
        return args;
    },
    createProcess(path){
        // TODO: Actualizar esto al nuevo formato ({icons: {}, code: []})
        console.log(`[PROCESS]`, path);
        const args = this.splitCmdLineArgs(path);
        const currProgram = args.shift();
        console.log(`[PROGRAM]`, currProgram, `[ARGS]`, args);
        const content = FS.readFile(currProgram);
        try {
            const code = JSON.parse(content);
            const pid = this.nextPid++;
            // TODO: Agregar los íconos que tenga al proceso (para que el programa pueda accederlos)
            const procData = {
                pid: pid,
                path: path,
                vars: {},
                funcs: {},
                icons: code.icons ?? [],
                argc: args.length + 1, // "+1" por el programa (había hecho shift())
                argv: [currProgram, ...args],
                status: "running"
            }
            this.procs[pid] = procData;
            try {
                EXEC.expr(procData, code.code ?? code);
                this.kill(pid);
            } catch(e){
                console.error(`Process ${pid} crashed:`, e);
                this.kill(pid);
            }
        } catch(e){
            MessageBox.showAlert({
                title: currProgram,
                content: `${currProgram} is not a valid Win32 application.`,
                icon: MessageBox.ICON_ERROR,
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