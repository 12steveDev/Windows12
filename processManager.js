// processManager.js
const ProcessManager = {
    procs: {},
    splitCmdLine(cmdLine){
        const args = [];
        let curr = "";
        let inQuote = false;
        let escape = false;
        for (const c of cmdLine){
            // console.log(`${c}\t| Quote: ${inQuote}\t| Escape: ${escape}\t| Curr: ${curr}`);
            // Comilla sola es especial
            if (c === '"'){
                if (escape){
                    curr += '"';
                    escape = false;
                } else {
                    if (inQuote && curr=="") args.push(""); // JAJA, SOLUCIONES PEDORRAS PERO EFECTIVAS✅✅✅✅✅✅📈📈📈📈📈📈
                    inQuote = !inQuote;
                }
                continue;
            }
            // Espacio fuera de comillas es fin de un arg
            if (c === " " && !inQuote){
                if (curr){
                    args.push(curr);
                    curr = "";
                }
                continue;
            }
            // El maldito backslash
            if (c === "\\"){
                if (escape){
                    curr += "\\";
                    escape = false;
                } else {
                    escape = true;
                }
                continue;
            }
            if (escape){
                curr += "\\";
                escape = false;
            }
            curr += c;
        }
        if (escape) curr += "\\";
        if (curr) args.push(curr);
        return args;
    },
    createProcess(cmdLine, parentPcb={cwd:"C:/"}){
        const [path, ...args] = this.splitCmdLine(cmdLine);
        if (debug.procs) console.log(`\x1b[35m[PROCESS] ${path} ${JSON.stringify(args)} (${cmdLine})`);
        const f = FS.readFile(parentPcb, path);
        if (isError(f)) return f;
        
        // validar header
        if (!f.startsWith(ECSE_HEADER)) return makeError(ERROR.BAD_EXE_FORMAT, `ECSE Header inválido`);
        // leer exe (json con complejos de ejecutable)
        let exe;
        try {
            exe = JSON.parse(f.slice(ECSE_HEADER.length));
        } catch {
            return makeError(ERROR.BAD_EXE_FORMAT, `Is not a valid Win32 application`);
        }
        console.log(exe) // !!! AQUÍ ME QUEDE !!! //

        const pcb = {
            pid: 12,
            path: path,
            cmdLine: cmdLine,
            cwd: FS.getParentFromPath(path),   // NUEVO!!
            dllUsed: exe, // { "USER32.DLL": ["MessageBox", "CreateWindow"] } (se actualiza leyendo el .idata del ejecutable antes de crear el PCB)
            argv: ["C:/Windows/Desktop/miProg.exe", "--param1", "--param2=jeje"],
            argc: 3,
            res: exe[".rsrc"], // el programa podrá acceder a sus rsrc
            format: exe[".header"].format,
            arch: exe[".header"].arch,
            exports: exe[".edata"],
            scopes: [{ // scopes para mantener uno global y otros locales (vars modificables globalmente desde una función, etc...)
                vars: exe[".data"] ?? {},
                funcs: {},
            }],
            state: "running" // "running" | "idle" | "terminated"
        }
    }
}
const PM = ProcessManager;