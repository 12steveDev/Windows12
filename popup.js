// popup.js
const Popup = {
    ICON_NONE: 0,
    // El nombre de estos archivos son los más cuestionablemente útiles 🥀
    ICON_INFO: "i.png",
    ICON_WARNING: "!.png",
    ICON_ERROR: "x.png",
    ICON_QUESTION: "question.png",
    ICON_DENIED: "-.png",
    TYPE_OK: 10,
    TYPE_OK_CANCEL: 11,

    // TODO: Añadir botones "Aceptar" y "Cancelar"
    // TODO: "Cancelable" es para que haya un backdrop detrás del popup que no deje continuar hasta que se confirme el popup
    // TODO: Función close() o algo para cerrar el popup
    showAlert(obj){
        /*
        ### SINTAXIS ###
        {
            title: "Titulo",
            content: "Contenido",
            icon: Popup.ICON_INFO,
            buttons: [
                { label: "Aceptar", action: ()=>{},  },
                { label: "Cancelar", action: ()=>{} }
            ],
            cancelable: true
        }
        */
        // Autocompletación para evitar errores
        if (!obj.title) obj.title = "Alert";
        if (!obj.buttons) obj.buttons = [{label:"Accept",action:()=>{}}];
        if (!obj.icon) obj.icon = Popup.ICON_NONE;

        const popupDiv = E("div");
        popupDiv.classList.add("popup", "w95-box");
        popupDiv.style.top = "50%";
        popupDiv.style.left = "50%";
        popupDiv.style.transform = "translate(-50%, -50%)"
        
        const headerDiv = E("div");
        headerDiv.classList.add("header");

        const titleP = E("p");
        titleP.textContent = obj.title;

        const xBtn = E("button");
        xBtn.classList.add("xBtn", "w95-btn");
        xBtn.textContent = "x";
        if (!obj.cancelable){
            xBtn.classList.add("disabled");
            xBtn.disabled = true;
        } else {
            xBtn.onclick = ()=>this.close(popupDiv);
        }

        const contentDiv = E("div");
        contentDiv.classList.add("content");

        let iconImg = E("img");
        if (obj.icon !== this.ICON_NONE) iconImg.src = "images/icons/" + obj.icon;

        const contentP = E("p");
        contentP.textContent = obj.content;

        const buttonsDiv = E("div");
        buttonsDiv.classList.add("buttons");

        obj.buttons.forEach(btn =>{
            const btnBtn = E("button");
            btnBtn.classList.add("w95-btn");
            btnBtn.textContent = btn.label;
            btnBtn.onclick = ()=>{
                this.close(popupDiv);
                btn.action();
            };
            buttonsDiv.appendChild(btnBtn);
            if (btn.focused) btnBtn.focus();
        })

        const backdropDiv = E("div");
        backdropDiv.classList.add("popup-backdrop");
        if (obj.cancelable) backdropDiv.classList.add("hide");

        contentDiv.appendChild(iconImg);
        contentDiv.appendChild(contentP);
        headerDiv.appendChild(titleP);
        headerDiv.appendChild(xBtn);
        popupDiv.appendChild(headerDiv);
        popupDiv.appendChild(contentDiv);
        popupDiv.appendChild(buttonsDiv);
        backdropDiv.appendChild(popupDiv);
        document.body.appendChild(backdropDiv);
        // Arrastre
        this.addDragging(popupDiv, headerDiv);
    },
    addDragging(popupDiv, headerDiv){
        // ESTA COMPATIBILIDAD NI MICROSOFT LA TIENE 🗣🗣🗣🗣🗣🗣🗣🗣🗣🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        headerDiv.addEventListener("mousedown", (e)=>onStart(e.clientX, e.clientY));
        headerDiv.addEventListener("touchstart", (e)=>onStart(e.touches[0].clientX, e.touches[0].clientY));
        document.addEventListener("mousemove", (e)=>onMove(e.clientX, e.clientY));
        document.addEventListener("touchmove", (e)=>onMove(e.touches[0].clientX, e.touches[0].clientY));
        document.addEventListener("mouseup", (e)=>onEnd(e.clientX, e.clientY));
        document.addEventListener("touchend", (e)=>onEnd(e.touches[0].clientX, e.touches[0].clientY));

        // seh, soy malo haciendo dragging
        let dragging = false;
        let offsetX, offsetY
        function onStart(x, y){
            const rect = popupDiv.getBoundingClientRect();
            offsetX = x - rect.left;
            offsetY = y - rect.top;
            dragging = true;
        }
        function onMove(x, y){
            if (!dragging) return;
            let newX = x - offsetX;
            let newY = y - offsetY;
            popupDiv.style.left = newX + "px";
            popupDiv.style.top = newY + "px";
            popupDiv.style.transform = "none";
        }
        function onEnd(x, y){
            dragging = false;
        }
    },
    close(popupDiv){
        popupDiv.closest(".popup-backdrop").remove();
    }
    // TODO: Agregar "showPrompt()"
}
