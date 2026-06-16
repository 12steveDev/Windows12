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
    SUCCESS: 0,                 // ERROR_SUCCESS... bruh🥀🥀
    INVALID_FUNCTION: 1,        // función incorrecta
    FILE_NOT_FOUND: 2,          // archivo no encontrado
    PATH_NOT_FOUND: 3,          // ruta no encontrada
    TOO_MANY_OPEN_FILES: 4,     // demasiados archivos abiertos
    ACCESS_DENIED: 5,           // acceso denegado
    INVALID_HANDLE: 6,          // handle inválido
    ARENA_TRASHED: 7,           // heap dañado
    NOT_ENOUGH_MEMORY: 8,       // memoria insuficiente
    INVALID_BLOCK: 9,           // bloque de memoria inválido
    BAD_ENVIRONMENT: 10,        // entorno incorrecto
    BAD_FORMAT: 11,             // formato inválido (ej: intentar ejecutar algo que no es EXE válido)
    INVALID_ACCESS: 12,         // acceso inválido
    INVALID_DATA: 13,           // datos inválidos
    OUTOFMEMORY: 14,            // sin memoria
    INVALID_DRIVE: 15,          // unidad inválida
    CURRENT_DIRECTORY: 16,      // no se puede eliminar el directorio actual
    NOT_SAME_DEVICE: 17,        // no se puede mover entre dispositivos distintos
    NO_MORE_FILES: 18,          // no hay más archivos
    WRITE_PROTECT: 19,          // 
    BAD_UNIT: 20,               // 
    NOT_READY: 21,              // 
    BAD_COMMAND: 22,            // 
    CRC: 23,                    //
    BAD_LENGTH: 24,             // 
    SEEK: 25,                   // 
    NOT_DOS_DISK: 26,           // 
    SECTOR_NOT_FOUND: 27,       // 
    OUT_OF_PAPER: 28,           // "la impresora se quedó sin papel we" XXXDDXDDDXDXDXDXDXDXDXDDXDXDXDXDXD
    WRITE_FAULT: 29,            // 
    READ_FAULT: 30,             // 
    GEN_FAILURE: 31,            // 
    SHARING_VIOLATION: 32,      // 
    LOCK_VIOLATION: 33,         // 
    INVALID_PARAMETER: 87,      // el parametro es incorrecto, lee la documentación pa
    INSUFFICIENT_BUFFER: 122,   // tu buffer da pena bro
    ALREADY_EXISTS: 183,        // el archivo o carpeta ya existe
    FILENAME_EXCED_RANGE: 206,  // el archivo o extención es demasiado largo. no te emociones we
    DEVICE_DOOR_OPEN: 1166,     // cierra la tapa del lector de CD, animal
}
const ERROR_STR = Object.fromEntries(
    Object.entries(ERROR).map(([k, v])=> [v, `ERROR_${k}`])
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
