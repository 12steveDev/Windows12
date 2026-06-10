// utils.js
const debug = {
};
/**
 * OJO: Esto usa `.querySelector()`, **especificar** con prefijo `"#"` para los ID's!!!
 */
const $ = (elem, parent=document) => parent.querySelector(elem);
const E = (elem) => document.createElement(elem);
// === ERRORES === //
const ERROR = { // I NEED A HERO🗣️🗣️🗣️🔥🔥🔥🔥
    INVALID_ARGUMENT: 1,
}
const ERROR_STR = Object.fromEntries(
    Object.entries(ERROR).map(([k, v])=> [v, k])
);
class ErrorClass {
    constructor(code, msg, data){
        this.code = code;
        this.msg = msg;
        this.str = ERROR_STR[code];
        this.data = data;
    }
}
const makeError = (code, msg, data={}) => new ErrorClass(code, msg, data);
const isError = (result) => result instanceof ErrorClass;
// esto es muy inteligente o muy perezoso!?!? :'vv
const css = (elem, stylesObj={}) => Object.assign(elem.style, stylesObj);
const appendChild = (elem, ...childs) => childs.forEach(c => elem.appendChild(c));
const text = (elem, text) => elem.textContent = text;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
