// registry.js (mi archivo favorito btw XDD)
const Registry = {
    LOCAL_STORAGE: "__windows12_registry__",
    panelsDivision: "40% 60%",
    panelsGap: "6px",
    hives: {
        HKEY_CLASSES_ROOT: {
            "*": {
                "shellex": {
                    "PropertySheetHandlers": {
                        "{3EA48300-8CF6-101B-84FB-666CCB9BCD32}": { "@": "" }
                    }
                }
            },
            ".dll": { "@": "dllfile" },
            ".lnk": {
                "@": "lnkfile",
                "@Command": "C:/WINDOWS/rundll32.exe AppWiz.Cpl,NewLinkHere %1" // jaja, ¿recreo esto tambien? :'v
            },
            ".reg": { "@": "regfile" },
            ".sys": { "@": "sysfile" },
            ".txt": {
                "@": "txtfile",
                "ShellNew": { "@NullFile": "" }
            },
            ".exe": { "@": "exefile" },
            "CLSID": {// XDXDDDDDD // ! qué es esto!??
                "{00021401-0000-0000-C000-000000000046}": {
                    "@": "Shortcut",
                    "InProcServer32": {
                        "@": "shell32.dll",
                        "@ThreadingModel": "Apartment"
                    },
                    "shellex": {
                        "MayChangeDefaultMenu": { "@": "" }
                    }
                },
                "{217FC9C0-3AEA-1069-A2DB-08002B30309D}": {
                    "@": "Shell Copy Hook",
                    "InProcServer": {
                        "@": "shell32.dll",
                        "@ThreadingModel": "Apartment"
                    }
                },
                "{3EA48300-8CF6-101B-84FB-666CCB9BCD32}": {
                    "@": "OLE Docfile Property Page",
                    "InProcServer32": {
                        "@": "C:/WINDOWS/SYSTEM/docprop.dll",
                        "@ThreadingModel": "Apartment"
                    }
                },
                "{645FF040-5081-101B-9F08-00AA002F954E}": {
                    "@": "Recycle Bin",
                    "DefaultIcon": {
                        "@": "C:/WINDOWS/SYSTEM/shell32.dll,32",
                        "Empty": "C:/WINDOWS/SYSTEM/shell32.dll,31",
                        "Full": "C:/WINDOWS/SYSTEM/shell32.dll,32"
                    },
                    "InProcServer32": {
                        "@": "shell32.dll",
                        "@ThreadingModel": "Apartment"
                    },
                    "shellex": {
                        "ContextMenuHandlers": {
                            "{645FF040-5081-101B-9F08-00AA002F954E}": { "@": "" }
                        },
                        "PropertySheetHandlers": {
                            "{645FF040-5081-101B-9F08-00AA002F954E}": { "@": "" }
                        }
                    },
                    "ShellFolder": {
                        "@Attributes": "40 01 00 20"
                    }
                },
                "{86F19A00-42A0-1069-A2E9-08002B30309D}": {
                    "@": ".PIF file property pages",
                    "InProcServer32": {
                        "@": "shell32.dll",
                        "@ThreadingModel": "Apartment"
                    }
                }
            },
            "Directory": {
                "@": "File Folder",
                "@AlwaysShowExt": "",
                "@EditFlags": "d2 01 00 00",
                "DefaultIcon": { "@": "C:/WINDOWS/SYSTEM/shell32.dll,3" },
                "shell": {
                    "@": "",
                    "find": {
                        "@": "",
                        "command": { "@": "C:/WINDOWS/Explorer.exe" },
                        "ddeexec": {
                            "@": "[FindFolder(\"%I\", %I)]",
                            "application": { "@": "Folders" },
                            "topic": { "@": "AppProperties" }
                        }
                    }
                },
                "shellex": {
                    "CopyHookHandlers": {
                        "FileSystem": { "@": "{217FC9C0-3AEA-1069-A2DB-08002B30309D}" }
                    }
                }
            },
            "dllfile": {
                "@": "Application Extension",
                "@AlwaysShowExt": "",
                "@EditFlags": "01 00 00 00",
                "DefaultIcon": { "@": "C:/WINDOWS/SYSTEM/shell32.dll,-154" }
            },
            "exefile": {
                "@": "Application",
                "@EditFlags": "d8 07 00 00",
                "DefaultIcon": { "@": "%1" },
                "shell": {
                    "@": "",
                    "open": {
                        "@": "",
                        "@EditFlags": "00 00 00 00",
                        "command": { "@": "\"%1\" %*" }
                    }
                },
                "shellex": {
                    "PropertySheetHandlers": {
                        "{86F19A00-42A0-1069-A2E9-08002B30309D}": { "@": "" }
                    }
                }
            },
            "Folder": {
                "@": "Folder",
                "@EditFlags": "d2 01 00 00",
                "DefaultIcon": { "@": "C:/WINDOWS/SYSTEM/shell32.dll,3" },
                "shell": {
                    "@": "",
                    "explore": {
                        "@": "", // ! ¿porqué unos tienen ""?? ¿va a salir sin nombre!???
                        "command": {
                            "@": "C:/WINDOWS/Explorer.exe /e,/idlist,%I,%L", // ! ¿qué es esto?
                        },
                        "ddeexec": { // ! ¿y todo esto!?
                            "@": "[ExplorerFolder(\"%I\", %I, %S)]",
                            "@NoActivateHandler": "",
                            "application": { "@": "Folders" },
                            "ifexec": { "@": "[]" },
                            "topic": { "@": "AppProperties" }
                        }
                    },
                    "open": {
                        "@": "",
                        "command": {
                            "@": "C:/WINDOWS/Explorer.exe /idlist,%I,%L", // ! %I es flag de el explorer o del idlist!??
                        },
                        "ddeexec": {
                            "@": "[ViewFolder(\"%I\", %I, %S)]",
                            "@NoActivateHandler": "",
                            "application": { "@": "Folders" },
                            "ifexec": { "@": "[]" },
                            "topic": { "@": "AppProperties" }
                        }
                    }
                }
            },
            "lnkfile": { // PORFAVOR, UN ACCESO DIRECTO NO ES UN TIPO MAGICO DE ARCHIVO, ES UNA PINCHE EXTENSIÓN
                "@": "Shortcut",
                "@EditFlags": "01 00 00 00",
                "@IsShortcut": "",      // borrar esto para quitar la flechita del shortcut 🗣🗣🗣
                "@NeverShowExt": "", // aquí antes había puesto "NewerShowExt"😭😭😭😭 (typo)
                "CLSID": { "@": "{00021401-0000-0000-C000-000000000046}" },
                "DefaultIcon": {"@": "C:/windows/system/shell32.dll,29"}, // TODO: dejar de ser burro y implementar IconHandler en lugar de usar esta línea (no está en el win95 original)
                "shellex": {
                    "ContextMenuHandlers": {
                        "{00021401-0000-0000-C000-000000000046}": { "@": "" }
                    },
                    "DropHandler": { "@": "{00021401-0000-0000-C000-000000000046}" },
                    "IconHandler": { "@": "{00021401-0000-0000-C000-000000000046}" }
                }
            },
            "regfile": {
                "@": "Registration Entries",
                "DefaultIcon": { "@": "C:/WINDOWS/regedit.exe,1" },
                "shell": {
                    "@": "",
                    "edit": {
                        "@": "&Edit",
                        "command": { "@": "C:/WINDOWS/NOTEPAD.EXE %1" }
                    },
                    "open": {
                        "@": "Mer&ge",
                        "command": { "@": "regedit.exe %1" }
                    },
                    "print": {
                        "@": "",
                        "command": { "@": "C:/WINDOWS/NOTEPAD.EXE /p %1" }
                    }
                }
            },
            "sysfile": {
                "@": "System File",
                "@AlwaysShowExt": "",
                "@EditFlags": "01 00 00 00",
                "DefaultIcon": { "@": "C:/WINDOWS/SYSTEM/shell32.dll,-154" }
            },
            "txtfile": {
                "@": "Text Document",
                "DefaultIcon": { "@": "C:/WINDOWS/SYSTEM/shell32.dll,-152" },
                "shell": {
                    "open": {
                        "command": { "@": "C:/WINDOWS/NOTEPAD.EXE %1" }
                    },
                    "print": {
                        "command": { "@": "C:/WINDOWS/NOTEPAD.EXE /p %1" }
                    }
                }
            },
            "Unknown": {
                "@AlwaysShowExt": "",
                "shell": {
                    "openas": {
                        "command": { "@": "C:/WINDOWS/rundll32.exe shell32.dll,OpenAs_RunDLL %1" }
                    }
                }
            }
        },
        HKEY_CURRENT_USER: {
            "AppEvents": {},
            "Control Panel": {},
            "keyboard layout": {},
            "Network": {},
            "Software": {}
        },
        HKEY_LOCAL_MACHINE: {
            "Config": {},
            "Enum": {},
            "hardware": {},
            "Security": {},
            "SOFTWARE": {
                "Classes": "this gonna be updated by Registry.init()",
                "Microsoft": { // tendré problemas legales por usar su nombre?
                    "Windows": {
                        "CurrentVersion": {
                            "explorer": {

                            }
                        }
                    }
                }
            },
            "System": {}
        },
        HKEY_USERS: {
            ".Default": {}
        },
        HKEY_CURRENT_CONFIG: {
            "Display": {},
            "System": {}
        },
        HKEY_DYN_DATA: {
            "Config Manager": {},
            "PerfStats": {},
        },
    },
    save(){
        localStorage.setItem(this.LOCAL_STORAGE, JSON.stringify(this.hives));
    },
    splitPath(path){
        return path.replace("%HKCR%", "HKEY_CLASSES_ROOT").split("/").filter(p=>p&&!(p.startsWith("@"))); // ! OJO, la ruta no puede tener "@"
    },
    resolvePath(path){
        if (Array.isArray(path)) path = path.join("/"); // Convertir la ruta de array a string
        path = this.splitPath(path);
        let last = "hives";
        let currDir = this.hives;
        for (const dir of path){
            if (!currDir[dir]){
                console.error(`[Registry][resolvePath][${last}] The key "${dir}" does not exist`);
                return null;
            }
            currDir = currDir[dir];
            last = dir;
        }
        return currDir;
    },
    setKeyValue(keyPath, name, data){
        const key = this.resolvePath(keyPath);
        if (!key) return false;
        key[`@${name}`] = data;
        this.save();
        return true;
    },
    getKeyValue(keyPath, name){
        const key = this.resolvePath(keyPath);
        if (!key) return null;
        return key[`@${name}`];
    },
    createKey(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[Registry][createKey] The path is empty (${path})`);
            return false;
        }
        const name = path.pop();
        const currDir = path.length === 0 ? this.hives : this.resolvePath(path);
        if (currDir[name]){
            console.error(`[Registry][createKey] The key "${name}" already exists`);
            return false;
        }
        currDir[name] = {};
        this.save();
    },
    removeKeyValue(keyPath, name){
        const key = this.resolvePath(keyPath);
        if (!key) return false;
        delete key[`@${name}`];
        this.save();
    },
    removeKey(path){
        path = this.splitPath(path);
        if (path.length === 0){
            console.error(`[Registry][deleteKey] The path is empty (${path})`);
            return false;
        }
        const name = path.pop();
        const currDir = path.length === 0 ? this.hives : this.resolvePath(path);
        if (!currDir[name]){
            console.error(`[Registry][deleteKey] The key "${name}" already not exists`);
            return false;
        }
        delete currDir[name];
        this.save();
    },
    createWindow(){
        const baseContent = E("div");
        baseContent.style.height = "100%";
        baseContent.style.width = "100%";
        baseContent.style.display = "grid";
        // !!! TODO URGENTE !!! : Hacer que esto use el this.panelsDivision o alguna manera de que se pueda escalar los dos paneles y que el total de los dos llene la ventana
        baseContent.style.gridTemplateColumns = `repeat(2, calc((100% - (2 - 1) * ${this.panelsGap}) / 2))`;
        baseContent.style.padding = "4px";
        baseContent.style.gap = this.panelsGap;

        const displayDiv = E("div");
        displayDiv.classList.add("w95-blank", "w95-scroll");
        displayDiv.style.height = "100%";
        displayDiv.style.width = "100%";
        displayDiv.style.overflow = "auto";
        displayDiv.style.padding = "0";
        displayDiv.style.margin = "0";
        displayDiv.innerHTML = this.createDisplayTable();

        const treeView = E("div");
        treeView.style.width = "100%";
        treeView.style.height = "100%";
        treeView.classList.add("w95-blank", "w95-scroll");
        treeView.style.overflow = "auto";
        treeView.appendChild(this.createRegistryTree(this.hives, "My Computer", $(".w95-table", displayDiv)));
        $("img", treeView).src = "images/icons/computer.png";
        $("details", treeView).open = true;

        baseContent.appendChild(treeView);
        baseContent.appendChild(displayDiv);

        WindowManager.createWindow({
            title: "Registry Editor",
            content: baseContent,
            styles: WindowManager.WS_OVERLAPPEDWINDOW,
            width: "600px",
            height: "350px",
            menu: {
                "Registry": [
                    { label: "Import Registry File...", action: ()=>{} }, // TODO: implementar esto (responder la DUDA del notes.txt primero!)
                    { label: "Export Registry File...", action: ()=>{} }, // TODO: y esto 
                    { separator: true },
                    { label: "Print...", action: ()=>{} },
                    { separator: true },
                    { label: "Exit", action: ()=>WindowManager.removeWindow(baseContent) }
                ],
                "Edit": [
                    { label: "New >", action: ()=>{} },
                    { separator: true },
                    { label: "Delete", action: ()=>{} },
                    { label: "Rename", action: ()=>{} },
                    { separator: true },
                    { label: "Find...", action: ()=>{} },
                    { label: "Find Next", action: ()=>{} }
                ],
                "View": [
                    { label: "Status Bar", checkbox: true, action: ()=>{} },
                    { separator: true },
                    { label: "Split", action: ()=>{} },
                    { separator: true },
                    { label: "Refresh", action: ()=>{} }
                ],
                "Help": [
                    { label: "Help Topics", action: ()=>{} },
                    { separator: true },
                    { label: "About Registry Editor", action: ()=>{} }
                ]
            }
        });
    },
    createTableRow(key, val){
        const rowTr = E("tr");
        const keyTd = E("td");
        if (key === "@"){
            keyTd.textContent = "(Default)"
        } else {
            key = key.split("@")[1];
            keyTd.textContent = key;
        }
        const valTd = E("td");
        valTd.textContent = key === "EditFlags" ? val : `"${val}"`;
        rowTr.appendChild(keyTd);
        rowTr.appendChild(valTd);
        return rowTr;
    },
    updateDisplayTable(data, table){
        const body = $("tbody", table);
        body.innerHTML = "";
        Object.entries(data).filter(kv => kv[0].startsWith("@")).forEach(([key, val])=>{
            body.appendChild(this.createTableRow(key, val));
        })
        if (!$("tr", body)){ // el nivel de detalle que me cargo es tremendo, ¿en el amor también seré detallista? :'v
            body.appendChild(this.createTableRow("@", "(value not set)"));
        }
    },
    createRegistryTree(data, path, table){
        // TODO: Cambiar el ícono de la carpeta a una abierta cuando se enfoca una key
        if (isObj(data)){
            const details = E("details");
            details.classList.add("w95-details");
            const summary = E("summary");
            summary.classList.add("key");
            const sumImg = E("img");
            sumImg.src = "images/icons/folder.png";
            const sumP = E("p");
            sumP.textContent = path;
            sumP.tabIndex = -1;
            sumP.onclick = (e)=>{ // al tocar el nombre, actualiza el panel de data pero no abre el details
                e.preventDefault();
                this.updateDisplayTable(data, table)
            }
            summary.appendChild(sumImg);
            summary.appendChild(sumP);
            details.appendChild(summary);

            for (const [key, value] of Object.entries(data)){
                if (key.startsWith("@")) continue; // El valor se muestra aparte
                const childDiv = E("div");
                childDiv.style.marginLeft = "21px"; // Espacio relativo a su posición dentro del arbol
                if (isObj(value) && Object.keys(value).length > 0 && !(Object.keys(value).every(k => k.startsWith("@")))){ // me encanta el espagetti 🗣🗣📉📉📉📉
                    childDiv.appendChild(this.createRegistryTree(value, key, table));
                } else {
                    const itemDiv = E("div");
                    itemDiv.classList.add("key");
                    itemDiv.style.display = "flex"; // Para que la img y el p queden en la misma línea
                    itemDiv.style.marginLeft = "21px"; // Para el espacio del [+]/[-] faltante
                    itemDiv.onclick = ()=> this.updateDisplayTable(value, table);
                    const img = E("img");
                    img.src = "images/icons/folder.png";
                    const p = E("p");
                    p.textContent = key;
                    p.tabIndex = -1;
                    itemDiv.appendChild(img);
                    itemDiv.appendChild(p);
                    childDiv.appendChild(itemDiv);
                }
                details.appendChild(childDiv);
            }

            return details;
        }
    },
    createDisplayTable(){
        const table = `<table style="width: 49.2vw" class="w95-table" border="0">
            <thead>
                <tr>
                    <th style="width:40%">Name</th>
                    <th style="width:60%">Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="name"></td>
                    <td class="data"></td>
                </tr>
            </tbody>
        </table>`
        return table;
    },
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
    replaceCommandLineArgs(str, args){
        str = str.replace(/%\*/g, args.slice(1).join(" ") || "");
        return str.replace(/%(\d+)/g, (match, argIndex)=>{
            argIndex = Number(argIndex);
            // si no existe, devuelve el "%*" literal
            return args[argIndex] === undefined ? match : args[argIndex];
        })
    },
    init(){
        this.hives.HKEY_LOCAL_MACHINE["SOFTWARE"]["Classes"] = this.hives.HKEY_CLASSES_ROOT;
        const loadedRg = localStorage.getItem(this.LOCAL_STORAGE);
        if (loadedRg) this.hives = JSON.parse(loadedRg);
        return true;
    },
    getExtPrefs(item, itemPath){ // sinceramente el método más kgao de hacer🥀
        // (itemPath es para las acciones del contextMenu)
        const prefs = {
            name: null,
            icon: null,
            desc: null
        };
        //// console.log("- [name]", item.name)
        // 1. obtener progId basado en tipo y extensión
        let progId = null;
        // es una carpeta
        if (item.type === "dir"){
            progId = "Directory"; // ? ¿Folder no sirve para nada? XD
        } else if (item.type === "file"){
            //obtener extensión
            const extMatch = item.name.match(/\.[^.]+$/);
            if (extMatch){
                ext = extMatch[0];
                // buscar progID de la extensión en HKEY_CLASSES_ROOT
                const extKey = this.resolvePath(`%HKCR%/${ext}`);
                if (extKey && extKey["@"]){
                    progId = extKey["@"];
                } else {
                    // No hay asociación
                    progId = "Unknown";
                }
            } else {
                // archivo sin extensión
                progId = "Unknown";
            }
        }
        //// console.log("[progId]",progId)
        // 2. obtener ícono (Dios tenme piedad, chingo de funciones que llaman a otras solo para un pinshe icono)
        if (progId){
            const iconKey = this.resolvePath(`%HKCR%/${progId}/DefaultIcon`);
            if (iconKey && iconKey["@"]){
                const iconPath = iconKey["@"];
                prefs.icon = FS.getIcon(this.replaceCommandLineArgs(iconPath, ["", itemPath]));
            }
        }
        // 3. resolver el nombre y descripción del tipo de archivo (del progId)
        if (progId){
            const progIdKey = this.resolvePath(`%HKCR%/${progId}`);
            if (progIdKey){
                if (progIdKey["@"]) prefs.desc = progIdKey["@"];
                if (progIdKey["@NeverShowExt"] !== undefined){
                    prefs.name = item.name.split(".").shift();
                } else if (progIdKey["@AlwaysShowExt"] !== undefined){
                    prefs.name = item.name;
                } else {
                    prefs.name = Settings.get("showFileExtensions") ? item.name : item.name.split(".").shift();
                }
            }
        }
        // fallbacks
        if (!prefs.icon){
            prefs.icon = `images/icons/${item.type === "dir" ? "folder.png" : "win95File.png"}`;
        }
        return prefs;
    }
}
