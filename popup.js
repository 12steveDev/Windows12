// popup.js
const Popup = {
    ICON_NONE: 0,
    // El nombre de estos archivos son los más cuestionablemente útiles 🥀
    ICON_INFO: "icons/i.png",
    ICON_WARNING: "icons/!.png",
    ICON_ERROR: "icons/x.png",
    ICON_QUESTION: "icons/question.png",
    ICON_DENIED: "icons/-.png",
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
            obligatory: false
        }
        */
        // Autocompletación para evitar errores
        if (!obj.title) obj.title = "Alert";
        if (!obj.buttons) obj.buttons = [{label:"Accept",action:()=>{}}];
        if (!obj.icon) obj.icon = Popup.ICON_NONE;

        const baseContent = E("div");

        const contentDiv = E("div");
        contentDiv.style.display = "flex";
        contentDiv.style.alignItems = "center";
        contentDiv.style.padding = "20px";
        contentDiv.style.gap = "10px";

        const iconImg = E("img");
        iconImg.style.width = "45px";
        iconImg.style.height = "auto";
        if (obj.icon !== Popup.ICON_NONE) iconImg.src = "images/" + obj.icon;
        contentDiv.appendChild(iconImg);

        const contentP = E("p");
        contentP.textContent = obj.content;
        contentDiv.appendChild(contentP);

        const buttonsDiv = E("div");
        buttonsDiv.style.display = "flex";
        buttonsDiv.style.justifyContent = "flex-end";
        buttonsDiv.style.gap = "10px";
        buttonsDiv.style.padding = "0 10px 10px 10px";
        obj.buttons.forEach(btn => {
            const btnBtn = E("button");
            btnBtn.classList.add("w95-btn");
            btnBtn.textContent = btn.label;
            btnBtn.onclick = ()=>{
                btn.action();
                WindowManager.removeWindow(contentDiv);
            }
            buttonsDiv.appendChild(btnBtn);
            if (btn.focused) btnBtn.focus();
        })

        baseContent.appendChild(contentDiv);
        baseContent.appendChild(buttonsDiv);

        WindowManager.createWindow({
            title: obj.title,
            content: baseContent,
            styles: WindowManager.WS_POPUP_WINDOW,
            x: "50%",
            y: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "auto",
            obligatory: obj.obligatory
        });
        return true;
    },
    // TODO: Agregar "showPrompt()"
}
