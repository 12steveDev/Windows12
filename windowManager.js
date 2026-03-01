// windowManager.js
const WindowManager = {
    WS_BTN_CLOSE:  1 << 0,
    WS_BTN_MAX:    1 << 1,
    WS_BTN_MIN:    1 << 2,
    WS_TITLEBAR:   1 << 3,
    WS_RESIZABLE:  1 << 4,
    WS_NO_TASKBAR: 1 << 5,
    WS_OVERLAPPEDWINDOW: 0b11111, // Los bits básicos
    WS_POPUP_WINDOW:     0b01001, // Solo título y botón cerrar
    /**
    * @param title "Titulo"
    * @param content HTMLElement,
    * @param styles WindowManager.WS_OVERLAPPEDWINDOW ("#include <windows.h>" vibes🥀🥀)
    * @param x "20px"
    * @param y "40px"
    * @param transform undefined
    * @param width "400px"
    * @param height "200px"
    * @param menu Object{}
    * @param obligatory false
    */
    createWindow(obj){
        const hasStyle = (style) => (obj.styles & style) === style;
        // === Ventana === //
        const windowDiv = E("div");
        windowDiv.classList.add("window", "w95-box");
        windowDiv.style.width = obj.width ?? "400px";
        windowDiv.style.height = obj.height ?? "200px";
        windowDiv.style.left = obj.x ?? "20px";
        windowDiv.style.top = obj.y ?? "20px";
        if (obj.transform) windowDiv.style.transform = obj.transform;
        // === Titulo === //
        if (hasStyle(this.WS_TITLEBAR)){
            const headerDiv = E("div");
            headerDiv.classList.add("header");
            const titleP = E("p");
            titleP.textContent = obj.title;
            headerDiv.appendChild(titleP);
            const buttonsDiv = E("div");
            buttonsDiv.classList.add("buttons");
            if (hasStyle(this.WS_BTN_MIN)){
                const minBtn = E("button");
                minBtn.classList.add("sysBtn", "w95-btn");
                minBtn.textContent = "🗕";
                minBtn.onclick = ()=>this.minimizeWindow(windowDiv);
                buttonsDiv.appendChild(minBtn);
            }
            if (hasStyle(this.WS_BTN_MAX)){
                const maxBtn = E("button");
                maxBtn.classList.add("sysBtn", "w95-btn");
                maxBtn.textContent = "🗖";
                maxBtn.onclick = ()=>this.toggleWindow(windowDiv);
                buttonsDiv.appendChild(maxBtn);
            }
            if (hasStyle(this.WS_BTN_CLOSE)){
                const xBtn = E("button");
                xBtn.classList.add("sysBtn", "w95-btn");
                xBtn.textContent = "🗙";
                xBtn.onclick = ()=>this.removeWindow(windowDiv);
                buttonsDiv.appendChild(xBtn);
            }
            headerDiv.appendChild(buttonsDiv);
            windowDiv.appendChild(headerDiv);
            this.addDragging(windowDiv, headerDiv);
        }
        // === Menus === //
        if (obj.menu){
            const menuDiv = E("div");
            menuDiv.classList.add("menus");
            for (const [menuLabel, ctxtMenu] of Object.entries(obj.menu)){
                const menuBtn = E("button");
                menuBtn.textContent = menuLabel;

                menuBtn.onclick = (e)=>{
                    const rect = e.target.getBoundingClientRect();
                    ContextMenu.show(rect.left, rect.top + rect.height, ctxtMenu);
                }

                menuDiv.appendChild(menuBtn);
            }
            windowDiv.appendChild(menuDiv);
        }
        // === Contenido === //
        const contentDiv = E("div");
        contentDiv.classList.add("content");
        contentDiv.appendChild(obj.content);
        windowDiv.appendChild(contentDiv);

        const backdropDiv = E("div");
        backdropDiv.classList.add("window-backdrop");
        if (!obj.obligatory) backdropDiv.classList.add("hide");

        backdropDiv.appendChild(windowDiv);
        desktop.appendChild(backdropDiv);
        return true;
    },
    maximizeWindow(windowDiv){
        windowDiv.style.transition = "top 0.5s, left 0.5s, width 0.5s, height 0.5s";
        windowDiv.classList.add("maximized");
        $(".header .buttons :nth-child(2)", windowDiv).textContent = "🗗";
        setTimeout(()=>windowDiv.style.transition = "none", 500)
    },
    restoreWindow(windowDiv){
        windowDiv.style.transition = "top 0.5s, left 0.5s, width 0.5s, height 0.5s";
        windowDiv.classList.remove("maximized");
        $(".header .buttons :nth-child(2)", windowDiv).textContent = "🗖";
        setTimeout(()=>windowDiv.style.transition = "none", 500)
    },
    toggleWindow(windowDiv){
        console.log("hey")
        if (windowDiv.classList.contains("maximized")){
            this.restoreWindow(windowDiv);
        } else {
            this.maximizeWindow(windowDiv);
        }
    },
    minimizeWindow(windowDiv){
        // TODO: Falta hacer que cada ventana se registre en la taskbar
    },
    removeWindow(windowDiv){
        windowDiv.closest(".window-backdrop").remove();
        return true;
    },
    addDragging(windowDiv, headerDiv){
        // ESTA COMPATIBILIDAD NI MICROSOFT LA TIENE 🗣🗣🗣🗣🗣🗣🗣🗣🗣🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        headerDiv.addEventListener("mousedown", (e)=>onStart(e, e.clientX, e.clientY));
        headerDiv.addEventListener("touchstart", (e)=>onStart(e, e.touches[0].clientX, e.touches[0].clientY));
        document.addEventListener("mousemove", (e)=>onMove(e, e.clientX, e.clientY));
        document.addEventListener("touchmove", (e)=>onMove(e, e.touches[0].clientX, e.touches[0].clientY));
        document.addEventListener("mouseup", ()=>onEnd());
        document.addEventListener("touchend", ()=>onEnd());

        // seh, soy malo haciendo dragging
        let dragging = false;
        let offsetX, offsetY
        function onStart(e, x, y){
            e.preventDefault();
            const rect = windowDiv.getBoundingClientRect();
            offsetX = x - rect.left;
            offsetY = y - rect.top;
            dragging = true;
        }
        function onMove(e, x, y){
            e.preventDefault();
            if (!dragging) return;
            let newX = x - offsetX;
            let newY = y - offsetY;
            windowDiv.style.left = newX + "px";
            windowDiv.style.top = newY + "px";
            windowDiv.style.transform = "none";
        }
        function onEnd(){
            dragging = false;
        }
        return true;
    },
}
// const testP = E("div");
// testP.textContent = "Hola Mundo"
// testP.style.background = "#fff";
// testP.style.height = "100%";
// // idea:
// WindowManager.createWindow({
//     title: "Titulo",
//     content: testP,
//     styles: WindowManager.WS_OVERLAPPEDWINDOW,
//     x: "50%",
//     y: "50%",
//     transform: "translate(-50%,-50%)",
//     width: "400px",
//     height: "200px",
//     menu: {
//         "Ayuda": [
//             { label: "Info de la ventana", action: ()=>MessageBox("Una ventana hecha con amor <3", "Info") }
//         ]
//     },
//     obligatory: true
// })
