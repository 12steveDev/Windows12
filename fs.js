// fs.js
const FS = {
    LOCAL_STORAGE: "__windows12_fs__",
    LIST_MODE_ALL: 0,
    LIST_MODE_DIRS: 1,
    LIST_MODE_FILES: 2,
    "$": { // Tengo que quitarme esa costumbre al recrear algo, literalmente LO RE-CREO 🗿🚬
        type: "dir",
        name: "$",
        child: {
            "Dos": {
                type: "dir",
                name: "Dos",
                child: {}
            },
            "Program Files": {
                type: "dir",
                name: "Program Files",
                child: {}
            },
            "Windows": {
                type: "dir",
                name: "Windows",
                child: {
                    "Command": {
                        type: "dir",
                        name: "Command",
                        child: {}
                    },
                    "Desktop": {
                        type: "dir",
                        name: "Desktop",
                        child: {
                            "My Computer": {
                                type: "file",
                                name: "My Computer",
                                icon: "icons/computer.png",
                                content: `{"action": "file_explorer"}`
                            },
                            "Folder": {
                                type: "dir",
                                name: "Folder",
                                child: {}
                            },
                            "Mi Carpeta": {
                                type: "link",
                                name: "Mi Carpeta",
                                target: "/Windows/Desktop/Folder"
                            },
                            "test.exe": {
                                type: "file",
                                name: "test.exe",
                                content: JSON.stringify(["ALERT", "Hola mundo we"])
                            },
                            "Mi nueva gran novela.txt": {
                                type: "file",
                                name: "Mi nueva gran novela.txt",
                                content: `Era hace una vez...`
                            },
                        }
                    },
                    "System": {
                        type: "dir",
                        name: "System",
                        child: {
                            "Gdi32.dll" : {
                                type: "file",
                                name: "Gdi32.dll",
                                content: ""
                            },
                            "Kernel32.dll" : {
                                type: "file",
                                name: "Kernel32.dll",
                                content: ""
                            },
                            "Shell32.dll" : {
                                type: "file",
                                name: "Shell32.dll",
                                content: ""
                            },
                            "User32.dll" : {
                                type: "file",
                                name: "User32.dll",
                                content: ""
                            },
                            "Vmm32.vxd" : {
                                type: "file",
                                name: "Vmm32.vxd",
                                content: ""
                            },
                        }
                    },
                    "Command.com": {
                        type: "file",
                        name: "Command.com",
                        content: ""
                    },
                    "Explorer.exe": {
                        type: "file",
                        name: "Explorer.exe",
                        content: ""
                    },
                    "Progman.exe" : {
                        type: "file",
                        name: "Progman.exe",
                        content: ""
                    },
                    "Progman.ini" : {
                        type: "file",
                        name: "Progman.ini",
                        content: "[Groups]\nGroup1=C:/WINDOWS/PROGRAMS.GRP\nGroup2=C:/WINDOWS/ACCESSOR.GRP\nGroup3=C:/WINDOWS/DESKTOP.GRP\nGroup4=C:/WINDOWS/SYSTEMTO.GRP\nGroup5=C:/WINDOWS/DOCUMENT.GRP\nGroup6=C:/WINDOWS/MAIN.GRP\n\n[Settings]\nOrder= 5 1 2 3 4 6\ndisplay.drv=pnpdrvr.drv\nWindow=68 66 548 387 1\n"
                    },
                    "Readme.txt": {
                        type: "file",
                        name: "Readme.txt",
                        content: ""
                    },
                    "RegEdit.exe": {
                        type: "file",
                        name: "RegEdit.exe",
                        content: ""
                    },
                    "Welcome.exe": {
                        type: "file",
                        name: "Welcome.exe",
                        content: ""
                    },
                    "Win.com": {
                        type: "file",
                        name: "Win.com",
                        content: "" // BINARY
                    },
                    "Win.ini": {
                        type: "file",
                        name: "Win.ini",
                        content: "[windows]\nload=\nrun=\nNullPort=None\n\n[Desktop]\nWallpaper=(None)\nTileWallpaper=0\nWallpaperStyle=0\n\n[initl]\niCountry=1\nICurrDigits=2\niCurrency=0\niDate=0\niDigits=2\niLZero=1\niMeasure=1\niNegCurr=0\niTime=0\niTLZero=0\ns1159=AM\ns2359=PM\nsCountry=United Stated\nsCurrency=$\nsDate=/\nsDecimal=.\nsLanguage=enu\nsList=,\nsLongDate=dddd, MMMM dd, yyyy\nsShortDate=M/d/yy\nsThousand=,\nsTime=:\n\n[fonts]\n\n[FontSubstitues]\nHelv=MS Sans Serif\nTms Rmn=MS Serif\nTimes=Times New Roman\nHelvetica=Arial\n// FALTA UN CHINGO DE LINEAS TODAVÍA....." // TODO: Terminar
                    },
                }
            },
            "Autoexec.bat": {
                type: "file",
                name: "Autoexec.bat",
                content: "@ECHO OFF\nPROMPT $p$g\nPATH C:/WINDOWS;C:/WINDOWS/COMMAND;C:/DOS\nSET TEMP=C:/DOS\n"
            },
            "Autoexec.dos": {
                type: "file",
                name: "Autoexec.dos",
                content: "@ECHO OFF\nPROMPT $p$g\nPATH C:/DOS\nSET TEMP=C:/DOS\n"
            },
            "Command.com": {
                type: "file",
                name: "Command.com",
                content: ""
            },
            "Command.dos": {
                type: "file",
                name: "Command.dos",
                content: ""
            },
            "Config.dos": {
                type: "file",
                name: "Config.dos",
                content: "DEVICE=C:/DOS/SETVER.EXE\nDEVICE=C:/DOS/HIMEM.SYS\nDOS=HIGH\nFILES=30\n"
            },
            "Config.sys": {
                type: "file",
                name: "Config.sys",
                content: "DEVICE=C:/WINDOWS/SETVER.EXE\nDEVICE=C:/WINDOWS/HIMEM.SYS\nDOS=HIGH"
            },
            "Io.dos": {
                type: "file",
                name: "Io.dos",
                content: "" // BINARY
            },
            "Io.sys": {
                type: "file",
                name: "Io.sys",
                content: "" // Win95 me dijo que el archivo era muy grande para abrirlo en el notepad XDD
            },
            "Msdos.dos": {
                type: "file",
                name: "Msdos.dos",
                content: "" // BINARY
            },
            "Msdos.sys": {
                type: "file",
                name: "Msdos.sys",
                content: `[Paths]\nWinDir=C:/WINDOWS\nWinBootDir=C:/WINDOWS\nHostWinBootDrv=C\n\n[Options]\nBootMulti=1\nBootGUI=1\nNetwork=0\n;\n;The following lines are required for compatibility with other programs.\n;Do not remove them (MSDOS.sys  needs to be >1024 bytes).\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxa\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxb\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxc\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxd\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxe\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxf\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxg\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxh\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxi\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxj\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxk\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxl\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxm\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxn\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxo\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxp\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxq\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxr\n;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxs\n\n`
            }
        }
    },
    save(){
        localStorage.setItem(this.LOCAL_STORAGE, JSON.stringify(this["$"]));
    },
    splitPath(path){
        return path.split("/").filter(p=>p&&p!=="C:");
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
        if (!currDir) return false;
        if (currDir.child[dirName] && currDir.child[dirName].type === "dir"){
            console.error(`[FS][makeDir]["${currDir.name}"] La carpeta "${dirName}" ya existe`);
            return false;
        }
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
    rename(path, newName){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][rename] La ruta está vacía (${path})`);
            return false;
        };
        const fileName = path.pop();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[fileName]){
            console.error(`[FS][rename]["${currDir.name}"] El elemento "${fileName}" no existe`);
            return false;
        }
        if (currDir.child[newName]){
            console.error(`[FS][rename]["${currDir.name}"] El archivo "${newName}" ya existe`);
            return false;
        }
        const original = currDir.child[fileName];
        delete currDir.child[fileName]; // ¿al borrar [fileName], "original" tambien se borra ya que "apuntaba a [fileName]" o ya hizo una copia!?
        currDir.child[newName] = original;
        original.name = newName;

        this.save();
        Desktop.refresh();
        return newName;
    },
    init(){
        const loadedFS = localStorage.getItem(this.LOCAL_STORAGE);
        if (loadedFS) this["$"] = JSON.parse(loadedFS);
        return true;
    }
}
// console.log(JSON.stringify(FS["$"], null, 4));
// FS.makeDir("damns")
// FS.makeFile("Windows/Desktop/archivo.txt")
// console.log(FS.readFile("Windows/Desktop/Mi PC"))
// console.log(FS.list("/", FS.LIST_MODE_ALL).map(i => i.name));

// for (i of [1,2,3,4,5,6,7,8,9,10,11]){
//     FS.makeFile(`/Windows/Desktop/mama_${i}.exe`);
//     FS.writeFile(`/Windows/Desktop/mama_${i}.exe`, `Contenido del archivo N_${i}`);
// }
