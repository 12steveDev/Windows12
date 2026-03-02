// registry.js (mi archivo favorito btw XDD)
const Registry = {
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
            "CLSID": {}, // XDXDDDDDD // ! qué es esto!??
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
                        "{86F19A00-42A0-1068-A2E9-08002B30309D}": { "@": "" }
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
            "lnkfile": {
                "@": "Shortcut",
                "@EditFlags": "01 00 00 00",
                "@IsShortcut": "",      // borrar esto para quitar la flechita del shortcut 🗣🗣🗣
                "@NewerShowExt": "",
                "CLSID": { "@": "{00021401-0000-0000-C000-000000000046}" },
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
    splitPath(path){
        return path.split("/").filter(p=>p&&!(p.startsWith("@"))); // ! OJO, la ruta no puede tener "@"
    },
    resolvePath(path){
        if (Array.isArray(path)) path = path.join("/"); // Convertir la ruta de array a string
        path = this.splitPath(path);
        let currDir = this.hives;
        for (const dir of path){
            if (!currDir[dir]){
                console.error(`[Registry][resolvePath] The key "${dir}" does not exist`);
                return false;
            }
            currDir = currDir[dir];
        }
        return currDir;
    },
    setKeyValue(keyPath, name, data){
        const key = this.resolvePath(keyPath);
        if (!key) return false;
        key[`@${name}`] = data;
        return true;
    },
    getKeyValue(keyPath, name){
        const key = this.resolvePath(keyPath);
        if (!key) return false;
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
            console.error(`The key "${name}" already exists`);
            return false;
        }
        currDir[name] = {};
    },
    deleteKeyValue(keyPath, name){
        const key = this.resolvePath(keyPath);
        if (!key) return false;
        delete key[`@${name}`];
    },
    deleteKey(path){
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
    init(){
        this.hives.HKEY_LOCAL_MACHINE["SOFTWARE"]["Classes"] = this.hives.HKEY_CLASSES_ROOT;
    }
}
