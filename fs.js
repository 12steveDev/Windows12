// fs.js
const FS = {
    LOCAL_STORAGE: "__windows12_fs__",
    LIST_MODE_ALL: 0,
    LIST_MODE_DIRS: 1,
    LIST_MODE_FILES: 2,
    "$": {
        type: "dir",
        name: "$",
        child: {
            "user": {
                type: "dir",
                name: "user",
                child: {
                    "desktop": {
                        type: "dir",
                        name: "desktop",
                        child: {
                            "Mi PC": {
                                type: "file",
                                name: "Mi PC",
                                icon: "apps/my_pc.png",
                                content: `{"action": "file_explorer"}`
                            },
                            "Carpeta": {
                                type: "dir",
                                name: "Carpeta",
                                child: {}
                            }
                        }
                    }
                }
            }
        }
    },
    save(){
        localStorage.setItem(this.LOCAL_STORAGE, JSON.stringify(this["$"]));
    },
    splitPath(path){
        return path.split("/").filter(p=>p);
    },
    resolvePath(path){
        if (Array.isArray(path)) path = path.join("/"); // Convertir la ruta de array a string
        path = this.splitPath(path);
        let currDir = this["$"];
        for (const dir of path){
            // console.log(dir);
            if (!currDir.child[dir]){
                console.error(`[FS][resolvePath]["${currDir.name}"] La carpeta "${dir}" no existe`);
                return false;
            }
            if (currDir.child[dir].type !== "dir"){
                console.error(`[FS][resolvePath]["${currDir.name}"] "${dir}" no es una carpeta`);
                return false;
            }
            currDir = currDir.child[dir];
        }
        // console.log(currDir);
        return currDir;
    },
    list(path, mode=this.LIST_MODE_ALL){
        if (![this.LIST_MODE_ALL, this.LIST_MODE_DIRS, this.LIST_MODE_FILES].includes(mode)){
            console.error(`[FS][list] Modo de listado desconocido: ${mode}`);
            return false;
        }
        const dir = this.resolvePath(path);
        if (!dir) return false;
        const items = Object.values(dir.child);
        const result = [];
        for (const item of items){
            if (mode === this.LIST_MODE_ALL) result.push(item);
            if (item.type === "dir" && mode === this.LIST_MODE_DIRS) result.push(item);
            if (item.type === "file" && mode === this.LIST_MODE_FILES) result.push(item);
        }
        return result;
    },
    makeDir(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][makeDir] La ruta está vacía (${path})`);
            return false;
        };
        const dirName = path.pop();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (currDir.child[dirName] && currDir.child[dirName].type === "dir"){
            console.error(`[FS][makeDir]["${currDir.name}"] La carpeta "${dirName}" ya existe`);
            return false;
        }
        if (!currDir) return false;
        currDir.child[dirName] = {type:"dir",name:dirName,child:{}};
        this.save();
        Desktop.refresh();
        return dirName;
    },
    makeFile(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][makeFile] La ruta está vacía (${path})`);
            return false;
        };
        const fileName = path.pop();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (currDir.child[fileName] && currDir.child[fileName].type === "file"){
            console.error(`[FS][makeFile]["${currDir.name}"] El archivo "${fileName}" ya existe`);
            return false;
        }
        currDir.child[fileName] = {type:"file",name:fileName,content:""};
        this.save();
        Desktop.refresh();
        return fileName;
    },
    readFile(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][readFile] La ruta está vacía (${path})`);
            return false;
        };
        const fileName = path.pop();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[fileName]){
            console.error(`[FS][readFile]["${currDir.name}"] El archivo "${fileName}" no existe`);
            return false;
        }
        if (currDir.child[fileName].type !== "file"){
            console.error(`[FS][readFile]["${currDir.name}"] "${fileName}" no es un archivo`);
            return false;
        }
        return currDir.child[fileName].content;
    },
    writeFile(path, content){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][writeFile] La ruta está vacía (${path})`);
            return false;
        };
        const fileName = path.pop();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[fileName]){
            console.error(`[FS][writeFile]["${currDir.name}"] El archivo "${fileName}" no existe`);
            return false;
        }
        if (currDir.child[fileName].type !== "file"){
            console.error(`[FS][writeFile]["${currDir.name}"] "${fileName}" no es un archivo`);
            return false;
        }
        currDir.child[fileName].content = content;
        this.save();
        Desktop.refresh();
        return true;
    },
    remove(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][writeFile] La ruta está vacía (${path})`);
            return false;
        };
        const itemName = path.pop();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[itemName]){
            console.error(`[FS][writeFile]["${currDir.name}"] El elemento "${itemName}" no existe`);
            return false;
        }
        delete currDir.child[itemName];
        this.save();
        Desktop.refresh();
        return true;
    },
    init(){
        const loadedFS = localStorage.getItem(this.LOCAL_STORAGE);
        if (loadedFS) this["$"] = JSON.parse(loadedFS);
        return true;
    }
    // TODO: Hacer metodo eliminación de elementos
}
// console.log(JSON.stringify(FS["$"], null, 4));
// FS.makeDir("damns")
// FS.makeFile("user/desktop/archivo.txt")
// console.log(FS.readFile("user/desktop/Mi PC"))
// console.log(FS.list("/", FS.LIST_MODE_ALL).map(i => i.name));

// for (i of [1,2,3,4,5,6,7,8,9,10,11]){
//     FS.makeFile(`/user/desktop/mama_${i}.exe`);
//     FS.writeFile(`/user/desktop/mama_${i}.exe`, `Contenido del archivo N_${i}`);
// }