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
            "DOS": {
                type: "dir",
                name: "Dos",
                child: {}
            },
            "PROGRAM FILES": {
                type: "dir",
                name: "Program Files",
                child: {}
            },
            "WINDOWS": {
                type: "dir",
                name: "Windows",
                child: {
                    "COMMAND": {
                        type: "dir",
                        name: "Command",
                        child: {}
                    },
                    "DESKTOP": {
                        type: "dir",
                        name: "Desktop",
                        child: {
                            "MY COMPUTER.EXE": {
                                type: "file",
                                name: "My Computer.exe",
                                icon: "icons/computer.png",
                                content: JSON.stringify({icons:[{id:"0",src:"images/icons/computer.png"}]})
                            },
                            "FOLDER": {
                                type: "dir",
                                name: "Folder",
                                child: {}
                            },
                            "SHORTCUT TEST.LNK": {
                                type: "file",
                                name: "Shortcut Test.lnk",
                                target: JSON.stringify({target: "C:/Windows/Desktop/test.exe"})
                            },
                            "TEST.EXE": {
                                type: "file",
                                name: "test.exe",
                                content: JSON.stringify({icons:[{id:"0",src:"images/icons/x.png"}],code:["ALERT", "Hola mundo we"]})
                            },
                            "MI NUEVA GRAN NOVELA.TXT": {
                                type: "file",
                                name: "Mi nueva gran novela.txt",
                                content: `Era hace una vez...`
                            },
                            "VIRUS HELL YEA.EXE": {
                                type: "file",
                                name: "Virus Hell Yea.exe",
                                content: JSON.stringify({icons:[{id:"0",src:"https://picsum.photos/20"}]}) // funciona XD (picsum da fotos random)
                            }
                        }
                    },
                    "SYSTEM": {
                        type: "dir",
                        name: "System",
                        child: {
                            "_.DLL": {
                                type: "file",
                                name: "_.dll",
                                content: `["FUNCTION", "TotallyNotUsefulFunction", [], ["CONSOLE_WARN", "DLL = Dayanna Library Lmao 👀"]]`
                            },
                            "GDI32.DLL" : {
                                type: "file",
                                name: "Gdi32.dll",
                                content: ""
                            },
                            "KERNEL32.DLL" : {
                                type: "file",
                                name: "Kernel32.dll",
                                content: ""
                            },
                            "SHELL32.DLL" : {
                                type: "file",
                                name: "Shell32.dll",
                                content: JSON.stringify({
                                    icons: [
                                        {id:"0",src:"images/icons/win95File.png"},
                                        {id:"1",src:"images/icons/documentFile.png"},
                                        {id:"2",src:"images/icons/window.png"},
                                        {id:"3",src:"images/icons/folder.png"},
                                        {id:"4",src:"images/icons/folderOpen.png"},
                                        {id:"5",src:"images/icons/diskDrive.png"},
                                        {id:"6",src:"images/icons/floppyDrive.png"},
                                        {id:"7",src:"images/icons/portableDrive.png"},
                                        {id:"9",src:"images/icons/hardDrive.png"},
                                        {id:"10",src:"images/icons/networkDriveConnected.png"},
                                        {id:"11",src:"images/icons/networkDriveOffline.png"},
                                        {id:"12",src:"images/icons/cdDrive.png"},
                                        {id:"13",src:"images/icons/ramDrive.png"},
                                        {id:"14",src:"images/icons/globe.png"},
                                        {id:"29",src:"images/icons/shortcut.png"},
                                        {id:"100",src:"images/icons/computer.png"},
                                        {id:"144",src:"images/icons/recycleFile.png"},
                                        {id:"145",src:"images/icons/recycleFolder.png"},
                                        {id:"151",src:"images/icons/gearTextFile.png"},
                                        {id:"152",src:"images/icons/textFile.png"},
                                        {id:"154",src:"images/icons/gearFile.png"},
                                        {id:"155",src:"images/icons/AFile.png"}
                                    ]
                                })
                            },
                            "USER32.DLL" : {
                                type: "file",
                                name: "User32.dll",
                                content: ""
                            },
                            "VMM32.VXD" : { // extensión "XD"?? XD🔥
                                type: "file",
                                name: "Vmm32.vxd",
                                content: ""
                            },
                        }
                    },
                    "COMMAND.COM": {
                        type: "file",
                        name: "Command.com",
                        content: ""
                    },
                    "EXPLORER.EXE": {
                        type: "file",
                        name: "Explorer.exe",
                        content: ""
                    },
                    "NOTEPAD.EXE": {
                        type: "file",
                        name: "Notepad.exe",
                        content: JSON.stringify({icons:[
                            {id:"0",src:"images/icons/notepad.png"},
                            {id:"1",src:"images/icons/textFile.png"}
                        ],code:[
                            ["SET", "arg", ["GET_ARGV", 1]],
                            ["SET", "arg2", ["GET_ARGV", 2]],
                            ["IF", ["VAR", "arg"],
                                ["IF", ["==", "${arg}", "/p"],
                                    ["ALERT", "Imprimiendo: ${arg2}"],
                                    ["ALERT", "Abriendo: ${arg}"]
                                ],
                                ["ALERT", "Sin argumentos. Notepad limpio"]
                            ]
                        ]})
                    },
                    "PROGMAN.EXE" : {
                        type: "file",
                        name: "Progman.exe",
                        content: ""
                    },
                    "PROGMAN.INI" : {
                        type: "file",
                        name: "Progman.ini",
                        content: "[Groups]\nGroup1=C:/WINDOWS/PROGRAMS.GRP\nGroup2=C:/WINDOWS/ACCESSOR.GRP\nGroup3=C:/WINDOWS/DESKTOP.GRP\nGroup4=C:/WINDOWS/SYSTEMTO.GRP\nGroup5=C:/WINDOWS/DOCUMENT.GRP\nGroup6=C:/WINDOWS/MAIN.GRP\n\n[Settings]\nOrder= 5 1 2 3 4 6\ndisplay.drv=pnpdrvr.drv\nWindow=68 66 548 387 1\n"
                    },
                    "README.TXT": {
                        type: "file",
                        name: "Readme.txt",
                        content: ""
                    },
                    "REGEDIT.EXE": {
                        type: "file",
                        name: "RegEdit.exe",
                        content: JSON.stringify({icons:[
                            {id:"0",src:"images/icons/regedit.png"},
                            {id:"1",src:"images/icons/regeditFile.png"},
                            {id:"2",src:"images/icons/regeditScan.png"},
                            {id:"3",src:"images/icons/computer.png"},
                            {id:"4",src:"images/icons/computer.png"}, // parecieran ser 2 iguales
                            {id:"5",src:"images/icons/folder.png"},
                            {id:"6",src:"images/icons/folderOpen.png"},
                            {id:"7",src:"images/icons/regedit_string.png"},
                            {id:"8",src:"images/icons/regedit_binary.png"}
                        ], code:[
                            ["ALERT", "Abriendo regedit!?"]
                        ]})
                    },
                    "WELCOME.EXE": {
                        type: "file",
                        name: "Welcome.exe",
                        content: ""
                    },
                    "WIN.COM": {
                        type: "file",
                        name: "Win.com",
                        content: "" // BINARY
                    },
                    "WIN.INI": {
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
        path = path.toUpperCase(); // esto es clave 🏅
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
        const rDirName = path.pop();
        const dirName = rDirName.toUpperCase();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (currDir.child[dirName] && currDir.child[dirName].type === "dir"){
            console.error(`[FS][makeDir]["${currDir.name}"] La carpeta "${rDirName}" ya existe`);
            return false;
        }
        currDir.child[dirName] = {type:"dir",name:rDirName,child:{}};
        this.save();
        Desktop.refresh();
        return rDirName;
    },
    makeFile(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][makeFile] La ruta está vacía (${path})`);
            return false;
        };
        const rFileName = path.pop();
        const fileName = rFileName.toUpperCase();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (currDir.child[fileName] && currDir.child[fileName].type === "file"){
            console.error(`[FS][makeFile]["${currDir.name}"] El archivo "${rFileName}" ya existe`);
            return false;
        }
        currDir.child[fileName] = {type:"file",name:rFileName,content:""};
        this.save();
        Desktop.refresh();
        return rFileName;
    },
    readFile(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][readFile] La ruta está vacía (${path})`);
            return false;
        };
        const rFileName = path.pop();
        const fileName = rFileName.toUpperCase();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[fileName]){
            console.error(`[FS][readFile]["${currDir.name}"] El archivo "${rFileName}" no existe`);
            return false;
        }
        if (currDir.child[fileName].type !== "file"){
            console.error(`[FS][readFile]["${currDir.name}"] "${rFileName}" no es un archivo`);
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
        const rFileName = path.pop();
        const fileName = rFileName.toUpperCase();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[fileName]){
            console.error(`[FS][writeFile]["${currDir.name}"] El archivo "${rFileName}" no existe`);
            return false;
        }
        if (currDir.child[fileName].type !== "file"){
            console.error(`[FS][writeFile]["${currDir.name}"] "${rFileName}" no es un archivo`);
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
        const rItemName = path.pop();
        const itemName = rItemName.toUpperCase();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[itemName]){
            console.error(`[FS][writeFile]["${currDir.name}"] El elemento "${rItemName}" no existe`);
            return false;
        }
        delete currDir.child[itemName];
        this.save();
        Desktop.refresh();
        return true;
    },
    rename(path, rNewName){
        const newName = rNewName.toUpperCase();
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[FS][rename] La ruta está vacía (${path})`);
            return false;
        };
        const rFileName = path.pop();
        const fileName = rFileName.toUpperCase();
        const currDir = path.length === 0 ? FS["$"] : this.resolvePath(path);
        if (!currDir) return false;
        if (!currDir.child[fileName]){
            console.error(`[FS][rename]["${currDir.name}"] El elemento "${rFileName}" no existe`);
            return false;
        }
        if (currDir.child[newName]){
            console.error(`[FS][rename]["${currDir.name}"] El archivo "${rNewName}" ya existe`);
            return false;
        }
        const original = currDir.child[fileName];
        delete currDir.child[fileName];
        currDir.child[newName] = original;
        original.name = rNewName;

        this.save();
        Desktop.refresh();
        return newName;
    },
    getIcon(path){
        // Dios lo que costó hacer esto
        let [filePath, index] = path.split(",");
        if (!index) index = "0";
        //// console.log("[getICON]", [filePath, index]);
        const fileData = this.readFile(filePath);
        if (!fileData) return null;
        try {
            const fileObj = JSON.parse(fileData);
            const icons = fileObj.icons; // array de iconos [{id:int, src:"str"}, {...}...]
            if (!icons) return null;
            if (index.startsWith("-")){ // indice directo
                return icons[index.split("-")[1]]?.src ?? null;
            } else {
                const icon = icons.find(i=>i.id===index)?.src;
                return icon ?? icons[Number(index)]?.src ?? null;
            }
        } catch(e){
            console.error(e.message);
            return null;
        }
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
