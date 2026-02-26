// registry.js (mi archivo favorito btw XDD)
const Registry = {
    panelsDivision: "50% 50%",
    panelsGap: "6px",
    hives: {
        HKEY_CLASSES_ROOT: {
            ".txt": { "@": "txtfile" },
            ".exe": { "@": "exefile" },
            "exefile": {
                "@": "Application",
                "DefaultIcon": "%1",
                "shell": {
                    "open": {
                        "command": { "@": "\"%1\" %*" }
                    }
                },
                "shellex": {
                    "PropertySheetHandlers": {
                        "{86F19A00-42A0-1068-A2E9-08002B30309D}": ""
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
        HKEY_CURRENT_USER: {},
        HKEY_LOCAL_MACHINE: {},
        HKEY_USERS: {},
        HKEY_CURRENT_CONFIG: {},
        HKEY_DYN_DATA: {},
    },
    createWindow(){
        const baseContent = E("div");
        baseContent.style.display = "grid";
        baseContent.style.gridTemplateColumns = `repeat(2, calc((100% - (2 - 1) * ${this.panelsGap}) / 2))`;
        baseContent.style.padding = "4px";
        baseContent.style.gap = this.panelsGap;
        const treeView = this.createRegistryTree(this.hives, "My Computer");
        treeView.classList.add("w95-blank");
        treeView.open = true;
        const detailsDiv = E("div");
        detailsDiv.classList.add("w95-blank");

        baseContent.appendChild(treeView);
        baseContent.appendChild(detailsDiv);

        WindowManager.createWindow({
            title: "Registry Editor",
            content: baseContent,
            styles: WindowManager.WS_OVERLAPPEDWINDOW,
            width: "600px",
            height: "400px"
        });
    },
    createRegistryTree(data, path){
        // TODO: Cambiar el ícono de la carpeta a una abierta cuando se abre un details
        if (isObj(data)){
            const details = E("details");
            details.classList.add("w95-details");
            details.tabIndex = -1;
            const summary = E("summary");
            const sumImg = E("img");
            sumImg.src = "images/icons/folder.png";
            const sumP = E("p");
            sumP.textContent = path;
            summary.appendChild(sumImg);
            summary.appendChild(sumP);
            details.appendChild(summary);

            for (const [key, value] of Object.entries(data)){
                console.log(key, value)
                if (key === "@") continue; // El valor se muestra aparte
                const childDiv = E("div");
                childDiv.style.marginLeft = "20px";
                if (isObj(value) && Object.keys(value).length > 0 && !(Object.keys(value).length === 1 && value["@"])){
                    childDiv.appendChild(this.createRegistryTree(value, key));
                } else {
                    const itemDiv = E("div");
                    itemDiv.style.display = "flex"; // Para que la img y el p queden en la misma línea
                    const img = E("img");
                    img.src = "images/icons/folder.png";
                    const p = E("p");
                    p.textContent = key;
                    itemDiv.style.marginLeft = "21px"; // Para el espacio del [+]/[-] faltante
                    itemDiv.appendChild(img);
                    itemDiv.appendChild(p);
                    childDiv.appendChild(itemDiv);
                }
                details.appendChild(childDiv);
            }

            return details;
        }
    }
}
