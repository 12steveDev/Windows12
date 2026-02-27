// registry.js (mi archivo favorito btw XDD)
const Registry = {
    panelsDivision: "40% 60%",
    panelsGap: "6px",
    hives: {
        HKEY_CLASSES_ROOT: {
            ".dll": { "@": "dllfile" },
            ".txt": { "@": "txtfile" },
            ".exe": { "@": "exefile" },
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
                    "open": {
                        "command": { "@": "\"%1\" %*" }
                    }
                },
                "shellex": {
                    "PropertySheetHandlers": {
                        "{86F19A00-42A0-1068-A2E9-08002B30309D}": { "@": "" }
                    }
                }
            },
            "txtfile": {
                "@": "Text Document",
                "DefaultIcon": { "@": "C:/WINDOWS/SYSTEM/shell32.dll,-152" }, // jaja, ¿recreo esto tambien?
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
            "SOFTWARE": {},
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
        displayDiv.classList.add("w95-blank");
        displayDiv.style.height = "100%";
        displayDiv.style.width = "100%";
        displayDiv.style.overflow = "auto";
        displayDiv.style.padding = "0";
        displayDiv.style.margin = "0";
        displayDiv.innerHTML = this.createDisplayTable();

        const treeView = E("div");
        treeView.style.width = "100%";
        treeView.style.height = "100%";
        treeView.classList.add("w95-blank");
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
            height: "350px"
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
        console.log(table, body)
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
            summary.onclick = ()=> this.updateDisplayTable(data, table);
            const sumImg = E("img");
            sumImg.src = "images/icons/folder.png";
            const sumP = E("p");
            sumP.textContent = path;
            sumP.tabIndex = -1;
            summary.appendChild(sumImg);
            summary.appendChild(sumP);
            details.appendChild(summary);

            for (const [key, value] of Object.entries(data)){
                if (key.startsWith("@")) continue; // El valor se muestra aparte
                const childDiv = E("div");
                childDiv.style.marginLeft = "22px";
                if (isObj(value) && Object.keys(value).length > 0 && !(Object.keys(value).length === 1 && value["@"])){ // me encanta el espagetti 🗣🗣📉📉📉📉
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
    }
}
