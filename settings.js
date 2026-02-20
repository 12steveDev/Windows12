// settings.js
const Settings = {
    LOCAL_STORAGE: "__windows12_settings__",
    values: {
        // TODO: Permitir que Columns y Rows al ser "auto" haga que el grid en desktop sea responsive-vibes (auto-fill)
        "desktopColumns":    5,
        "desktopRows":       4,
        "desktopGap":        "10px",
        "desktopBackground": "#008080",
        "desktopColor":      "#ffffff",
        "desktopFontSize":   "15px",
    },
    save(){
        localStorage.setItem(this.LOCAL_STORAGE, JSON.stringify(this.values));
    },
    set(key, value){
        if (!Object.keys(this.values).includes(key)){
            console.error(`[Settings][set] La clave "${key}" no existe`);
            return false;
        }
        this.values[key] = value;
        this.save();
        Desktop.refresh();
        return true;
    },
    get(key){
        if (!Object.keys(this.values).includes(key)){
            console.error(`[Settings][get] La clave "${key}" no existe`);
            return false;
        }
        return this.values[key];
    },
    init(){
        const loadedSettings = localStorage.getItem(this.LOCAL_STORAGE);
        if (loadedSettings) this.values = JSON.parse(loadedSettings);
        return true;
    }
}
