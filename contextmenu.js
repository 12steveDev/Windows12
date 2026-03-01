// contextmenu.js
const ContextMenu = {
    menu: null,
    hideListener: null,
    init(){
        this.menu = E("div");
        this.menu.classList.add("context-menu");
        this.menu.style.display = "none";
        document.body.appendChild(this.menu);

        this.hideListener = (e)=>{
            this.hide();
        }
    },
    show(x, y, items=[]){
        /*
        - label:    "Actualizar"
        - disabled: true/false
        - action:   function()
        - icon????
        */
        this.menu.innerHTML = "";
        items.forEach(item =>{
            const itemDiv = E("div");
            if (item.separator === true){
                itemDiv.classList.add("separator");
                this.menu.appendChild(itemDiv);
                return;
            }
            itemDiv.textContent = item.label;
            itemDiv.classList.add("option");
            if (item.disabled){
                itemDiv.classList.add("disabled");
                itemDiv.addEventListener("click", (e)=>{
                    e.stopPropagation();
                });
            } else {
                itemDiv.addEventListener("click", (e)=>{
                    e.stopPropagation();
                    this.hide();
                    item.action();
                });
            }
            this.menu.appendChild(itemDiv);
        })
        this.menu.style.display = "block";
        this.menu.style.opacity = "0";

        this.menu.style.left = "0";
        this.menu.style.top = "0";

        // Dimensiones del menú y la ventana
        const menuWidth = this.menu.offsetWidth;
        const menuHeight = this.menu.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Posición final
        let finalX = x;
        let finalY = y;

        // Si el menú se sale por la derecha
        if (x + menuWidth > windowWidth){
            finalX = x - menuWidth;
        }
        // Si el menú se sale por la izquierda (por si x es negativo)
        if (finalX < 0){
            finalX = 0;
        }
        // Si el menú se sale por abajo
        if (y + menuHeight > windowHeight){
            finalY = windowHeight - menuHeight;
        }
        // Si el menú se sale por arriba
        if (finalY < 0){
            finalY = 0;
        }
        // Aplicar todo
        this.menu.style.left = finalX + "px";
        this.menu.style.top = finalY + "px";
        this.menu.style.opacity = "1";
        // Cerrar al hacer click afuera
        document.removeEventListener("click", this.hideListener)
        setTimeout(()=>{
            document.addEventListener("click", this.hideListener);
        }, 10); // Pequeño delay para evitar el click que abrió el menú 👏📈
        return true;
    },
    hide: ()=>{
        ContextMenu.menu.style.display = "none";
        document.removeEventListener("click", ContextMenu.hideListener);
    }
}