// fs.js
const FS = {
    // Desired Access
    GENERIC_READ:       0x80000000,
    GENERIC_WRITE:      0x40000000,
    GENERIC_EXECUTE:    0x20000000,
    GENERIC_ALL:        0x10000000,
    // Creation Disposition
    CREATE_NEW:         1,
    CREATE_ALWAYS:      2,
    OPEN_EXISTING:      3,
    OPEN_ALWAYS:        4,
    TRUNCATE_EXISTING:  5,
    // Share Mode
    FILE_SHARE_READ:    0x00000001,
    FILE_SHARE_WRITE:   0x00000002,
    FILE_SHARE_DELETE:  0x00000004,
    // Attributes
    FILE_ATTR_READONLY: 0x00000001,
    FILE_ATTR_HIDDEN:   0x00000002,
    FILE_ATTR_SYSTEM:   0x00000004,
    FILE_ATTR_DIRECTORY:0x00000010,
    FILE_ATTR_ARCHIVE:  0x00000020, // ni en su casa lo conocen :'v
    FILE_ATTR_NORMAL:   0x00000080,
    drives: {
        "C:": {
            name: "C:",
            volumeLabel: "LocalMachine",
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
                            children: {
                                "README.TXT": {
                                    name: "Readme.txt",
                                    type: "file",
                                    creationTime: Date.now(),
                                    lastModified: Date.now(),
                                    attrs: 0b0000,
                                    size: 2,
                                    content: "Hi"
                                },
                                "MI CARPETA": {
                                    name: "Mi Carpeta",
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
    _navigate(path, preserveLastMissing=false, pcb={ cwd: "C:/" }){
        const parts = this.splitPath(path, pcb);
        const drive = parts.shift();
        let curr = FS.drives[drive];
        let parent = FS.drives[drive]
        if (!curr) return makeError(ERROR.INVALID_DRIVE, `Unidad no existe: ${drive}`);
        for (let i = 0; i < parts.length; i++){
            const cuteNameDir = parts[i];
            const dir = cuteNameDir.toUpperCase();
            if (curr.type !== "dir") return makeError(ERROR.DIRECTORY, `No es un directorio: ${curr.name}`);
            if (!curr.children[dir]){
                if ((i === parts.length - 1) && preserveLastMissing){
                    return { parent: curr, name: cuteNameDir, exists: false }; // !!! AQUI ME QUEDE !!! //
                }
                return makeError(ERROR.PATH_NOT_FOUND, `No existe: ${cuteNameDir}`);
            }
            parent = curr;
            curr = curr.children[dir];
        }
        return { parent: parent, target: curr, exists: true };
    },
    list(pcb, path){ // findFirstFile && findNextFile reference!???🗣️👀‼️‼️‼
        const result = this._navigate(path, false, pcb);
        if (isError(result)) return result;
        if (result.target.type !== "dir") return makeError(ERROR.DIRECTORY, `No es un directorio: ${result.target.name}`);
        return [...Object.values(result.target.children)];
    },
    writeFile(pcb, path, content, attrs=0b0000){
        const result = this._navigate(path, true, pcb);
        let target = result.target || null;
        if (isError(result)) return result;
        if (!result.exists){
            // normalizar atributos
            if (!attrs) attrs = FS.FILE_ATTR_NORMAL;
            if (attrs !== this.FILE_ATTR_NORMAL) attrs &= ~FS.FILE_ATTR_NORMAL;
            // crear un archivo es literalmente solo esto xdxd
            result.parent.children[result.name.toUpperCase()] = {
                name: result.name,
                type: "file",
                creationTime: Date.now(),
                lastModified: Date.now(),
                attrs: attrs, // solamente asignar atributos cuando se crea
                size: 0,
                content: ""
            };
            target = result.parent.children[result.name.toUpperCase()];
        }
        // no es un archivo
        if (target.type !== "file") return makeError(ERROR.DIRECTORY, `No es un archivo: ${target.name}`);
        // existe pero es solo lectura (READONLY)
        if ((target.attrs & FS.FILE_ATTR_READONLY) && result.exists) return makeError(ERROR.ACCESS_DENIED, `Acceso denegado: El archivo es solo lectura: ${target.name}`);
        // escribir archivo
        target.content = content;
        target.size = sizeof(content);
        target.lastModified = Date.now();
        target.attrs |= FS.FILE_ATTR_ARCHIVE; // totalmente necesario 🗿
        return target.size; // retornar bytes escritos, alta referencia eehh ehhh 👀👀👀
    },
    readFile(pcb, path){
        const result = this._navigate(path, false, pcb);
        if (isError(result)) return result;
        const target = result.target;
        if (target.type !== "file") return makeError(ERROR.DIRECTORY, `No es un archivo: ${target.name}`);
        // TODO: Si "target.size" es mayor que el tamaño real del "target.content", rellenar con caracteres basura generados mediante hash (con el path como seed)
        return target.content.slice(0, target.size); // !!! AQUI ME QUEDE !!! //
    },
    tree(curr=FS.drives["C:"], __main=true, __indent=2){
        let msg = __main ? `💽 ${curr.name} (${curr.volumeLabel})/\n` : "";
        for (const dir of Object.values(curr.children)){
            msg += " ".repeat(__indent);
            msg += dir.type === "dir"
                ? `📂 ${dir.name}/\n`
                : `📄 ${dir.name} (${dir.size} bytes (${sizeof(dir.content)}))\n`;
            if (dir.type === "dir"){
                msg += FS.tree(dir, false, __indent + 2);
            }
        }
        return __main ? console.log(msg) : msg;
    },
}

FS.writeFile({cwd:"C:/Windows"}, "Desktop/wi.txt", "Hola Mundo UwU", FS.FILE_ATTR_NORMAL);
FS.tree()