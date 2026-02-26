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
        windowDiv.style.minHeight = obj.height ?? "200px";
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
            if (hasStyle(this.WS_BTN_CLOSE)){
                const xBtn = E("button");
                xBtn.classList.add("xBtn", "w95-btn");
                xBtn.textContent = "x";
                xBtn.onclick = ()=>this.removeWindow(windowDiv);
                headerDiv.appendChild(xBtn);
            }
            windowDiv.appendChild(headerDiv);
            this.addDragging(windowDiv, headerDiv);
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
        document.body.appendChild(backdropDiv);
        return true;
    },
    removeWindow(windowDiv){
        windowDiv.closest(".window-backdrop").remove();
        return true;
    },
    addDragging(windowDiv, headerDiv){
        // ESTA COMPATIBILIDAD NI MICROSOFT LA TIENE 🗣🗣🗣🗣🗣🗣🗣🗣🗣🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        headerDiv.addEventListener("mousedown", (e)=>onStart(e.clientX, e.clientY));
        headerDiv.addEventListener("touchstart", (e)=>onStart(e.touches[0].clientX, e.touches[0].clientY));
        document.addEventListener("mousemove", (e)=>onMove(e.clientX, e.clientY));
        document.addEventListener("touchmove", (e)=>onMove(e.touches[0].clientX, e.touches[0].clientY));
        document.addEventListener("mouseup", (e)=>onEnd());
        document.addEventListener("touchend", (e)=>onEnd());

        // seh, soy malo haciendo dragging
        let dragging = false;
        let offsetX, offsetY
        function onStart(x, y){
            const rect = windowDiv.getBoundingClientRect();
            offsetX = x - rect.left;
            offsetY = y - rect.top;
            dragging = true;
        }
        function onMove(x, y){
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