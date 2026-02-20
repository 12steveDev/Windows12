// contextmenu.js
const ContextMenu = {
    menu: null,
    init(){
        this.menu = E("div");
        this.menu.classList.add("context-menu");
        this.menu.style.display = "none";
        document.body.appendChild(this.menu);
        document.addEventListener("click", ()=>this.hide())
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
                    item.action();
                    this.hide();
                });
            }
            this.menu.appendChild(itemDiv);
        })
        this.menu.style.display = "block";
        this.menu.style.left = `${x}px`;
        this.menu.style.top = `${y}px`;
    },
    hide(){
        this.menu.style.display = "none";
    }
}