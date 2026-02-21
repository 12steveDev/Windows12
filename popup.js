// popup.js
const Popup = {
    ICON_NONE: 0,
    ICON_INFO: 1,
    ICON_ALERT: 2,
    ICON_ERROR: 3,
    TYPE_OK: 10,
    TYPE_OK_CANCEL: 11,

    // TODO: Añadir botones "Aceptar" y "Cancelar"
    // TODO: "Cancelable" es para que haya un backdrop detrás del popup que no deje continuar hasta que se confirme el popup
    // TODO: Función close() o algo para cerrar el popup
    // TODO (URGENTE): Siento que los argumentos de este método son... cuestionables. Den ideas que admita lo mismo pero sea más "normal", y que permita parametros "onAcept" y "onCancel"
    showAlert(title, content, type=this.TYPE_OK_CANCEL, icon=this.ICON_INFO, cancelable=true){

        const popupDiv = E("div");
        popupDiv.classList.add("popup", "w95-box");
        
        const headerDiv = E("div");
        headerDiv.classList.add("header");

        const titleP = E("p");
        titleP.textContent = title;

        const xBtn = E("button");
        xBtn.classList.add("xBtn", "w95-btn");
        xBtn.textContent = "x";
        if (type !== this.TYPE_OK_CANCEL){
            xBtn.classList.add("disabled");
            xBtn.disabled = true;
        }

        const contentDiv = E("div");
        contentDiv.classList.add("content");


        let iconImg = E("img");
        if (icon !== this.ICON_NONE){
            switch(icon){
                // FUN: QUE PEDO CON LOS NOMBRES XDDDD (no me arrepiento 🗿📊)
                // TODO: Agregar más íconos
                case this.ICON_INFO:
                    iconImg.src = "images/icons/i.png";
                    break;
                case this.ICON_ALERT:
                    iconImg.src = "images/icons/!.png";
                    break;
                case this.ICON_ERROR:
                    iconImg.src = "images/icons/x.png";
                    break;
            }
            contentDiv.appendChild(iconImg);
        }

        const contentP = E("p");
        contentP.textContent = content;

        contentDiv.appendChild(iconImg);
        contentDiv.appendChild(contentP);
        headerDiv.appendChild(titleP);
        headerDiv.appendChild(xBtn);
        popupDiv.appendChild(headerDiv);
        popupDiv.appendChild(contentDiv);
        document.body.appendChild(popupDiv);
    }
    // TODO: Agregar "showPrompt()"
}
Popup.showAlert("Alerta", "Holi uwu", Popup.TYPE_OK, Popup.ICON_ERROR, false);
