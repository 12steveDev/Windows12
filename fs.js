// fs.js
const FS = {
    drives: {
        "C:": {
            name: "C:",
            volumeLabeL: "LocalMachine",
            type: "dir",
            children: {
                "WINDOWS": {
                    name: "Windows",
                    type: "dir",
                    creationTime: Date.now(),
                    lastModified: Date.now(),
                    attrs: 0b0000,
                    children: {
                        "DESKTOP": {
                            name: "Desktop",
                            type: "dir",
                            creationTime: Date.now(),
                            lastModified: Date.now(),
                            attrs: 0b0000,
                            children: {}
                        }
                    }
                }
            }
        }
    },
    splitPath(path, pcb={ cwd: "C:/" }){
        // filtrar "/" repetidos y "\"'s
        let parts = path.replace(/\\/g, "/").split("/").filter(p => p);
        const resultPath = [];
        // ruta absoluta con unidad
        if (/^[A-Z]:/i.test(path)){ // !!! HACIENDO ESTO!!!
            // nada we, parts ya está absoluto
            parts[0] = parts[0].toUpperCase();
        } else if (path.startsWith("/")){ // ruta absoluta a la unidad actual
            parts = [pcb.cwd.split("/")[0], ...parts];
        } else {
            // es relativa
            parts = [...pcb.cwd.replace(/\\/g, "/").split("/").filter(p => p), ...parts];
        }
        // resolver "." y ".."
        for (const d of parts){
            if (d === ".") continue;
            if (d === ".."){
                if (resultPath.length > 1) resultPath.pop();
                continue;
            }
            resultPath.push(d);
        }
        // retornar jeje, qué esperabas
        return resultPath;
    },
    _navigateTo(path, presserveLastMissing=false, pcb={ cwd: "C:/" }){
        const parts = this.splitPath(path, pcb);
        const drive = parts.shift();
        let curr = FS.drives[drive];
        let parent = FS.drives[drive]
        if (!curr) return makeError(ERROR.INVALID_DRIVE, `Unidad no existe: ${drive}`);
        for (let i = 0; i < parts.length; i++){
            const cuteNameDir = parts[i];
            const dir = cuteNameDir.toUpperCase();
            if (curr.type !== "dir") return makeError(ERROR.PATH_NOT_FOUND, `No es un directorio: ${curr.name}`);
            if (!curr.children[dir]){
                if ((i === parts.length - 1) && presserveLastMissing){
                    return { parent: curr, name: dir, exists: false }; // !!! AQUI ME QUEDE !!! //
                }
                return makeError(ERROR.PATH_NOT_FOUND, `No existe: ${cuteNameDir}`);
            }
            parent = curr;
            curr = curr.children[dir];
        }
        return { parent: parent, target: curr, exists: true };
    },
    ls(path, pcb={ cwd: "C:/" }){ // findFirstFile && findNextFile reference!???🗣️👀‼️‼️‼
        const path = this.splitPath(path);
        // TODO: esto we
    }
}