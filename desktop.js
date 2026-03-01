// script.js
const Desktop = {
    createExplorerWindow(cmdLine){
        if (cmdLine); // ¿permitir cambios por argumentos!?
        const baseContent = E("div");
        // TODO: Terminar esto si es buena idea
        WindowManager.createWindow({
            title: "Exploring...",
            content: baseContent,
            styles: WindowManager.WS_OVERLAPPEDWINDOW
        });
    },
    createHTMLIcon(appName, appIcon, link=false){
        const appDiv = E("div");
        
        const iconImg = E("img");
        iconImg.src = "images/" + appIcon;
        appDiv.appendChild(iconImg);
        
        const nameP = E("p");
        nameP.textContent = appName;
        if (link) nameP.innerHTML += " <span style='color: #b0f'>(link)</span>"; // !!! DEBUG/TEMPORARY !!! //
        nameP.style.color = Settings.get("desktopColor");
        nameP.style.fontSize = Settings.get("desktopFontSize");
        appDiv.appendChild(nameP);

        return appDiv;
    },
    renameInPlace(itemDiv, item){
        // Lo más satisfactorio que he hecho en código, diría **mi parte favorita**...
        const originalP = itemDiv.querySelector("p");
        const oldText = originalP.textContent;

        const input = E("input");
        input.type = "text";
        input.value = oldText;

        originalP.replaceWith(input);
        input.focus();
        input.select();
        input.style.font = window.getComputedStyle(originalP).font;

        input.addEventListener("keydown", (e)=>{
            if (e.key === "Enter"){
                e.preventDefault();
                save()
            }
            if (e.key === "Escape"){
                input.replaceWith(originalP);
            }
        });
        input.addEventListener("blur", ()=>save());

        function save(){
            const newName = input.value.trim();
            if (newName && newName !== oldText){
                FS.rename(`/Windows/Desktop/${item.name}`, newName);
                // DATO: FS.rename hace un refresh() automático
            } else {
                input.replaceWith(originalP);
            }
        }
    },
    refresh(){
        $$(".desktopIcon", desktop).forEach(i => i.remove());
        desktop.style.height = "calc(100% - 30px)"; // TODO: Hacer que en Settings haya valor para la altura del taskbar (30px)
        // Cargar íconos del desktop
        const desktopItems = FS.list("Windows/Desktop", FS.LIST_MODE_ALL);
        desktopItems.forEach(item => {
            let itemDiv;
            if (item.type === "file"){
                itemDiv = this.createHTMLIcon(item.name, item.icon || "icons/textFile.png");
                itemDiv.addEventListener("contextmenu", (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    // TODO: Completar esta wea
                    ContextMenu.show(e.clientX, e.clientY, [
                        // Ni crean que voy a implementar todo esto >:v
                        { label: "Open", action: ()=>{ProcessManager.createProcess(`C:/Windows/Desktop/${item.name}`)} },
                        { label: "Print", action: ()=>{} },
                        { separator: true },
                        { label: "Send To     >", action: ()=>{} },
                        { separator: true },
                        { label: "Cut", action: ()=>{} },
                        { label: "Copy", action: ()=>{} },
                        { separator: true },
                        { label: "Create Shortcut", action: ()=>{} },
                        { label: "Delete", action: ()=>Popup.showAlert({
                            title: "Confirm File Delete",
                            content: `Are you sure you want to send '${item.name}' to the Recycle Bin?`,
                            icon: "icons/recycleFile.png",
                            buttons: [
                                { label: "Yes", action: ()=> FS.remove(`Windows/Desktop/${item.name}`) },
                                { label: "No", action: ()=> {} }
                            ],
                            obligatory: true
                        }) },
                        { label: "Rename", action: ()=>{
                            this.renameInPlace(itemDiv, item);
                        } },
                        { separator: true },
                        { label: "Properties", action: ()=>{} },
                    ])
                })
            }
            if (item.type === "dir"){
                itemDiv = this.createHTMLIcon(item.name, item.icon || "icons/folder.png");
                itemDiv.addEventListener("contextmenu", (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    // TODO: Completar esta wea
                    ContextMenu.show(e.clientX, e.clientY, [
                        { label: "Open", action: ()=>{} },
                        { label: "Explore", action: ()=>{} },
                        { label: "Find...", action: ()=>{} },
                        { separator: true },
                        { label: "Send To     >", action: ()=>{} },
                        { separator: true },
                        { label: "Cut", action: ()=>{} },
                        { label: "Copy", action: ()=>{} },
                        { separator: true },
                        { label: "Create Shortcut", action: ()=>{} },
                        { label: "Delete", action: ()=>Popup.showAlert({
                            title: "Confirm Folder Delete",
                            content: `Are you sure you want to remove the folder '${item.name}' and move all its contents to the Recycle Bin?`,
                            icon: "icons/recycleFolder.png",
                            buttons: [
                                { label: "Yes", action: ()=> FS.remove(`Windows/Desktop/${item.name}`) },
                                { label: "No", action: ()=> {} }
                            ],
                            obligatory: true
                        }) },
                        { label: "Rename", action: ()=>{
                            this.renameInPlace(itemDiv, item);
                        } },
                        { separator: true },
                        { label: "Properties", action: ()=>{} },
                    ])
                })
            }
            if (item.type === "link"){
                itemDiv = this.createHTMLIcon(item.name, item.icon || "icons/textFile.png", link=true);
                itemDiv.addEventListener("contextmenu", (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    ContextMenu.show(e.clientX, e.clientY, [
                        { label: "Open", action: ()=>{} },
                        { separator: true },
                        { label: "Send To     >", action: ()=>{} },
                        { separator: true },
                        { label: "Cut", action: ()=>{} },
                        { label: "Copy", action: ()=>{} },
                        { separator: true },
                        { label: "Create Shortcut", action: ()=>{} },
                        { label: "Delete", action: ()=>Popup.showAlert({
                            title: "Confirm File Delete",
                            content: `Are you sure you want to send '${item.name}' to the Recycle Bin?`,
                            icon: "icons/recycleFile.png",
                            buttons: [
                                { label: "Yes", action: ()=> FS.remove(`Windows/Desktop/${item.name}`) },
                                { label: "No", action: ()=> {} }
                            ],
                            obligatory: true
                        }) },
                        { label: "Rename", action: ()=>{
                            this.renameInPlace(itemDiv, item);
                        } },
                        { separator: true },
                        { label: "Properties", action: ()=>{} },
                    ])
                })
            }
            itemDiv.classList.add("desktopIcon");
            itemDiv.tabIndex = -1; // para permitir el ":focus" de los iconos
            desktop.appendChild(itemDiv);
        });
        // Cargar ajustes del grid del desktop
        const cols = Settings.get("desktopColumns");
        const rows = Settings.get("desktopRows");
        const gap = Settings.get("desktopGap");
        desktop.style.gridTemplateColumns = `repeat(${cols}, calc((100% - (${cols} - 1) * ${gap}) / ${cols}))`;
        desktop.style.gridTemplateRows = `repeat(${rows}, calc(100% / ${rows} - ${gap}))`;
        desktop.style.gap = gap;

        const bg = Settings.get("desktopBackground");
        desktop.style.background = bg.startsWith("#") ? bg : `url("images/${bg}") no-repeat center/cover`;
    },
    init(){
        desktop.addEventListener("contextmenu", e=>{
            e.preventDefault();
            ContextMenu.show(e.clientX, e.clientY, [
                { label: "Arrange Icons     >", action: ()=>{} },
                { label: "Line Up Icons", action: ()=>{} },
                { separator: true },
                { label: "Refresh", action:()=>Desktop.refresh() },
                { separator: true },
                { label: "Paste", disabled: true },
                { label: "Paste Shortcut", disabled: true },
                { label: "Undo Rename", action: ()=>{} },
                { separator: true },
                { label: "New", action: ()=>{
                    // TODO: Hacer esto más... realista XD
                    const type = prompt("Tipo (dir, file):");
                    if (!["dir","file"].includes(type)){
                        alert("Tipo inválido");
                        return;
                    }
                    const name = prompt("Nombre del elemento:");
                    (type === "dir") ? FS.makeDir(`/Windows/Desktop/${name}`) : FS.makeFile(`/Windows/Desktop/${name}`);
                } },
                { separator: true },
                { label: "Properties", action: ()=>{} },
                { separator: true },
                { label: "Reset Local Storage", action: ()=>{
                    localStorage.clear();
                    location.reload();
                } },
                
            ]);
        })
        this.refresh();
    }
}
// Desktop.createExplorerWindow();
// Registry.createWindow();
