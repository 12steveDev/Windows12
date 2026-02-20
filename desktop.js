// script.js
const Desktop = {
    createHTMLIcon(appName, appIcon){
        const appDiv = E("div");
        
        const iconImg = E("img");
        iconImg.src = "images/" + appIcon;
        appDiv.appendChild(iconImg);

        const nameP = E("p");
        nameP.textContent = appName;
        nameP.style.color = Settings.get("desktopColor");
        nameP.style.fontSize = Settings.get("desktopFontSize");
        appDiv.appendChild(nameP);

        return appDiv;
    },
    refresh(){
        desktop.innerHTML = "";
        // Cargar íconos del desktop
        const desktopItems = FS.list("user/desktop", FS.LIST_MODE_ALL);
        desktopItems.forEach(item => {
            let itemDiv;
            if (item.type === "file"){
                itemDiv = this.createHTMLIcon(item.name, item.icon || "icons/file.png");
                itemDiv.addEventListener("contextmenu", (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    // TODO: Completar esta wea
                    ContextMenu.show(e.clientX, e.clientY, [
                        { label: "Abrir", action: ()=>{} },
                        { separator: true },
                        { label: "Abrir con...", action: ()=>{} },
                        { separator: true },
                        { label: "Eliminar", action: ()=>FS.remove(`/user/desktop/${item.name}`) },
                        { label: "Cambiar nombre", action: ()=>{} },
                        { separator: true },
                        { label: "Propiedades", action: ()=>{} },
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
                        { label: "Abrir", action: ()=>{} },
                        { separator: true },
                        { label: "Eliminar", action: ()=>FS.remove(`/user/desktop/${item.name}`) },
                        { label: "Cambiar nombre", action: ()=>{} },
                        { separator: true },
                        { label: "Propiedades", action: ()=>{} },
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
            console.log(`Click en escritorio coordenadas: ${e.clientX} ${e.clientY}`);
            ContextMenu.show(e.clientX, e.clientY, [
                { label:"Actualizar", action:()=>Desktop.refresh() },
                { separator: true },
                { label: "Nuevo", action: ()=>{
                    // TODO: Hacer esto más... realista XD
                    const type = prompt("Tipo (dir, file):");
                    if (!["dir","file"].includes(type)){
                        alert("Tipo inválido");
                        return;
                    }
                    const name = prompt("Nombre del elemento:");
                    (type === "dir") ? FS.makeDir(`/user/desktop/${name}`) : FS.makeFile(`/user/desktop/${name}`);
                } },
                { label: "Borrar Local Storage", action: ()=>{
                    localStorage.clear();
                    location.reload();
                } },
                
            ]);
        })
        this.refresh();
    }
}
