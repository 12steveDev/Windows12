// utils.js
const debug = {
    errors: 0,
    procs: 0,
};
/**
 * OJO: Esto usa `.querySelector()`, **especificar** con prefijo `"#"` para los ID's!!!
 */
const $ = (elem, parent=document) => parent.querySelector(elem);
const E = (elem) => document.createElement(elem);
const TEST_PCB = { cwd: "C:/Windows/Tests" };
const ECSE_HEADER = "12ECSE\x12";
// === ERRORES === //
const ERROR = { // I NEED A HERO🗣️🗣️🗣️🔥🔥🔥🔥
    SUCCESS: 0,                 // ERROR_SUCCESS... bruh🥀🥀
    INVALID_FUNCTION: 1,        // función incorrecta
    FILE_NOT_FOUND: 2,          // archivo no encontrado
    PATH_NOT_FOUND: 3,          // ruta no encontrada
    TOO_MANY_OPEN_FILES: 4,     // demasiados archivos abiertos
    ACCESS_DENIED: 5,           // acceso denegado
    INVALID_HANDLE: 6,          // handle inválido
    ARENA_TRASHED: 7,           // congrats, rompiste algo tan fuerte que ni el sistema sabe que carajo fué
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
    WRITE_PROTECT: 19,          // medio protegido contra escritura
    BAD_UNIT: 20,               // la unidad parece de dudosa procedencia we
    NOT_READY: 21,              // el dispositivo sigue despertandose bro, espera
    BAD_COMMAND: 22,            // el dispositivo no te entendió ni un carajo que le pediste
    CRC: 23,                    // los datos llegaron más corruptos que mi horario de sueño
    BAD_LENGTH: 24,             // tamaño inválido, acaso te inventastes los números btw?
    SEEK: 25,                   // intentaste mover el cursor del disco duro a la parrilla de la PC
    NOT_DOS_DISK: 26,           // eso ni a palo es un disco DOS weon, a mi no me engañas
    SECTOR_NOT_FOUND: 27,       // el disco jura que ese sector nunca existió
    OUT_OF_PAPER: 28,           // "la impresora se quedó sin papel we" XXXDDXDDDXDXDXDXDXDXDXDDXDXDXDXDXD
    WRITE_FAULT: 29,            // se le acabó la tinta al disco
    READ_FAULT: 30,             // al disco se le olvidó cómo leer
    GEN_FAILURE: 31,            // algo salió mal. ¿qué cosa?... "sí".
    SHARING_VIOLATION: 32,      // otro proceso tiene el archivo bloqueado
    LOCK_VIOLATION: 33,         // región bloqueada
    HANDLE_EOF: 38,             // llegaste al final del archivo
    NOT_SUPPORTED: 50,          // todavía no programo eso we
    FILE_EXISTS: 80,            // archivo ya existe
    INVALID_PARAMETER: 87,      // el parametro es incorrecto, lee documentación pa
    BROKEN_PIPE: 109,           // llamen al plomero xdxdxd (la tubería se rompió)
    BUFFER_OVERFLOW: 111,       // el buffer se puso gordito :3
    DISK_FULL: 112,             // disco lleno
    INSUFFICIENT_BUFFER: 122,   // tu buffer da pena bro..
    DIR_NOT_EMPTY: 145,         // la carpeta no está vacía
    BUSY: 170,                  // ocupado. ocupado en qué? no sé. ocupado.
    ALREADY_EXISTS: 183,        // el archivo o carpeta ya existe
    BAD_EXE_FORMAT: 193,        // intentaste ejecutar cualquier porquería
    FILENAME_EXCED_RANGE: 206,  // el archivo o extención es demasiado largo. no te emociones mucho kbron
    EXE_MACHINE_TYPE_MISMATCH: 216, // intentaste ejecutar "x86" en "xD"
    PIPE_BUSY: 231,             // la tubería está ocupada chambeando
    NO_DATA: 232,               // estás hablando solo w xdxd (no hay nadie del otro lado)
    PIPE_NOT_CONNECTED: 253,    // intentaste usar una pipe imaginaria
    WAIT_TIMEOUT: 258,          // te dejaron plantado we
    DIRECTORY: 267,             // ruta inválida porque esperaba un directorio
    STACK_OVERFLOW: 1001,       // página sagrada para todos los bugs... digo digo, alta recursión bro fr fr
    DLL_NOT_FOUND: 1157,        // faltó una DLL, clásico
    DEVICE_NOT_CONNECTED: 1167, // el dispositivo se fue por cigarros
    DEVICE_DOOR_OPEN: 1166,     // cierra la tapa del lector de CD, animal
    CANCELLED: 1223,            // el usuario se arrepintió de la nada
    FILE_CORRUPT: 1392,         // archivo o sistema de archivos corrupto
    TIMEOUT: 1460,              // tardaste tanto que windows pensó que te habías cambiado a linux
    UNRECOGNIZED_MEDIA: 1785,   // los discos de las motosierras no cuentan bro
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
const makeError = (code, msg, data={}) =>{
    if (debug.errors) console.log(`\x1b[31m[ERROR] ${ERROR_STR[code]} (${code}): ${msg}`);
    return new ErrorClass(code, msg, data);
}
const isError = (result) => result instanceof ErrorClass;
// yo creo que si javascript tuviera estas funciones puestas como builtins, el mundo sería un lugar mejor
const css = (elem, stylesObj={}) => Object.assign(elem.style, stylesObj);
const appendChild = (elem, ...childs) => childs.forEach(c => elem.appendChild(c));
const text = (elem, text) => elem.textContent = text;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const sizeof = (val) => new TextEncoder().encode(val).length;
const hex = (num, pad=2, suffix=true) => (suffix ? "0x" : "") + num.toString(16).toUpperCase().padStart(pad, "0");
const bin = (num, pad=4, suffix=true) => (suffix ? "0b" : "") + num.toString(2).toUpperCase().padStart(pad, "0");

function makeExe(exe, optimized=false){
    // ojalá la creación de apk's en Android sea igual de bonita que aquí
    // === HEADER === //
    const header = {
        format: "EXECUTABLE",
        version: 1, // más útil que goto🥀
        arch: "ECSE32", //lmao
        subsystem: "CONSOLE",
        entrypoint: ".text",
        compiledAt: Date.now(),
        DOSStubSecretMessage: optimized ? "" : "Este programa no puede ejecutarse en calculadora de bolsillo mode." // alta referencia lol
    }
    // usar valores que ya creó el exe
    if (exe[".header"]){
        Object.assign(header, exe[".header"]);
    }
    // asegurar que el header tenga todos los params
    exe[".header"] = header;
    const entry = exe[".header"].entrypoint;
    // === IDATA === //
    if (!exe[".idata"]) exe[".idata"] = {
        "USER32.DLL": ["MessageBox", "CreateWindow"] // ! TESTEO, BORRAR
    }
    // === EDATA === //
    if (!exe[".edata"]) exe[".edata"] = {};
    // === DATA === //
    if (!exe[".data"]) exe[".data"] = {};
    // === DATA === //
    if (!exe[".rsrc"]) exe[".rsrc"] = {};
    // === TEXT === //
    if (!exe[entry]) exe[entry] = [];
    return ECSE_HEADER + JSON.stringify(exe);
}
