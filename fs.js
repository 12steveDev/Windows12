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
    splitPath(path, pcb){
        // filtrar "/" repetidos y "\"'s
        let parts = path.replace(/\\/g, "/").split("/").filter(p => p);
        const resultPath = [];
        // ruta absoluta con unidad
        if (/^[A-Z]:/i.test(path)){ // !!! HACIENDO ESTO!!!
            // nada we, parts ya está absoluto
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
    }
}