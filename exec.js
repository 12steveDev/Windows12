// exec.js
class EXECBreak {}
class EXECReturn {
    constructor(value){
        this.value = value;
    }
}
const EXEC = {
    expr(procData, opcodeArray){
        // Si no es nada XD
        // comodidad moment1 jiji🗿🌸
        if (!opcodeArray && opcodeArray !== null && opcodeArray !== 0) return;
        const ex = (...args) => this.expr(procData, ...args);
        // Es un OPCODE o OP_ARRAY válido
        if (Array.isArray(opcodeArray)){
            // No hay acción
            if (opcodeArray.length === 0){
                return undefined;
            }
            // Es un OP_ARRAY (array de opcodes)
            if (Array.isArray(opcodeArray[0])){
                for (const op of opcodeArray){
                    this.expr(procData, op);
                }
                return;
            }
            // Es un OPCODE
            // comodidad moment2 jiji🗿🌸
            const [opcode, ...args] = opcodeArray;
            // console.log(opcode, args)
            // El bendito switch de 1975 cases
            switch(opcode){
                // === DEBUG === //
                case "CONSOLE_LOG":
                    return console.log(...args.map(arg=>ex(arg)));
                case "CONSOLE_WARN":
                    return console.warn(ex(args[0]));
                case "CONSOLE_ERROR":
                    return console.error(ex(args[0]));
                case "ALERT":
                    return alert(ex(args[0]));
                case "PROMPT":
                    return prompt(ex(args[0]), ex(args[1]));
                // === UTILS === //
                case "INT":
                    return Number(ex(args[0]));
                case "TRIM":
                    return ex(args[0]).trim();
                case "RANDOM":
                    return Math.random();
                case "GET_ARGV":
                    return procData.argv[ex(args[0])];
                case "GET_ARGC":
                    return procData.argc;
                // === MATH === //
                case "ADD":
                case "+":
                    return ex(args[0]) + ex(args[1]);
                case "SUB":
                case "-":
                    return ex(args[0]) - ex(args[1]);
                case "MUL":
                case "*":
                    return ex(args[0]) * ex(args[1]);
                case "DIV":
                case "/": {
                    const a = ex(args[0]);
                    const b = ex(args[1]);
                    if (a === 0 || b === 0) return null;
                    return a / b;
                }
                case "MOD":
                case "%":
                    return ex(args[0]) % ex(args[1]);
                // === CONDITIONALS OP === //
                case "EQ":
                case "==":
                    return ex(args[0]) == ex(args[1]);
                case "NEQ":
                case "!=":
                    return ex(args[0]) != ex(args[1]);
                case "GT":
                case ">":
                    return ex(args[0]) > ex(args[1]);
                case "GE":
                case ">=":
                    return ex(args[0]) >= ex(args[1]);
                case "LT":
                case "<":
                    return ex(args[0]) < ex(args[1]);
                case "LE":
                case "<=":
                    return ex(args[0]) <= ex(args[1]);
                // === CONDITIONALS === //
                case "IF":
                    if (ex(args[0])){
                        return ex(args[1]);
                    } else {
                        return ex(args[2]);
                    }
                case "WHILE":
                    try {
                        while (ex(args[0])) {
                            const r = ex(args[1]);
                        }
                    } catch(e){
                        if (!(e instanceof EXECBreak)) throw e;
                    } finally {
                        break;
                    }
                case "BREAK":
                    throw new EXECBreak(); // XDXDXDXDXDXDXDXDXDXD
                // === VARIABLES === //
                case "SET":
                    const val = ex(args[1]);
                    procData.vars[args[0]] = val; // no sé cual es la diferencia, pero da menos errores damn
                    return;
                case "VAR":
                    return procData.vars[args[0]]
                // === FUNCTIONS === //
                case "FUNCTION":
                    procData.funcs[args[0]] = {
                        params: args[1],
                        body: args[2]
                    }
                    return;
                case "CALL": {
                    const funName = args[0];
                    const func = procData.funcs[funName];
                    if (!func){
                        throw new Error(`Function "${funName}" does not exist`);
                        return;
                    }
                    // En Windows12 tus variables están a salvo papá🗿📊📈👏
                    const oldVars = {...procData.vars};
                    func.params.forEach((param, i)=>{
                        procData.vars[param] = ex(args[i+1]);
                    });
                    // Ejecutar función y capturar resultado si hay
                    let ret;
                    try {
                        ex(func.body);
                    } catch(e){
                        if (e instanceof EXECReturn){
                            ret = e.value;
                        } else {
                            throw e;
                        }
                    } finally {
                        // Restaurar
                        procData.vars = oldVars;
                        return ret;
                    }
                }
                case "RETURN":
                    throw new EXECReturn(ex(args[0])); /// neuron activation🧠‼
                default:
                    throw new Error(`Unknown OPCODE: ${opcode}`);
            }
        } else { // Es un valor directo
            // comodidad moment3 jiji🗿🌸
            const value = opcodeArray;
            // Un dato promedio
            if (["number","boolean"].includes(typeof value) || value === null){
                return value;
            }
            // Un String
            if (typeof value === "string"){
                return value.replace(/\${([a-zA-Z][a-zA-Z0-9]*)}/g, (match, varName)=>{
                    return procData.vars[varName] ?? `[Unknown Var: ${varName}]`;
                });
            }
            // alguna tontera que hizo el dev
            throw new Error(`Unknown data type: ${value}`);
        }
    }
}
const test1 = [
    ["CONSOLE_LOG", "=== TEST 1: Variables y Matemáticas ==="],
    
    ["SET", "x", 10],
    ["SET", "y", 5],
    
    ["CONSOLE_LOG", ["VAR", "x"]],
    ["CONSOLE_LOG", ["VAR", "y"]],
    
    ["SET", "suma", ["+", ["VAR", "x"], ["VAR", "y"]]],
    ["CONSOLE_LOG", "Suma: ${suma}"],
    
    ["SET", "resta", ["-", ["VAR", "x"], ["VAR", "y"]]],
    ["CONSOLE_LOG", "Resta: ${resta}"],
    
    ["SET", "multi", ["*", ["VAR", "x"], ["VAR", "y"]]],
    ["CONSOLE_LOG", "Multi: ${multi}"],
    
    ["SET", "divi", ["/", ["VAR", "x"], ["VAR", "y"]]],
    ["CONSOLE_LOG", "Div: ${divi}"],
    
    ["CONSOLE_LOG", "=== FIN TEST 1 ==="]
];
const test2 = [
    ["CONSOLE_LOG", "=== TEST 2: Comparaciones y IF ==="],
    
    ["SET", "edad", ["PROMPT", "¿Cuántos años tienes?"]],
    ["SET", "edad", ["TRIM", ["VAR", "edad"]]],
    ["SET", "edad", ["INT", ["VAR", "edad"]]], // Convertir a número
    
    ["IF", [">", ["VAR", "edad"], 18],
        [
            ["CONSOLE_LOG", "Eres mayor de edad! 🍻"],
            ["ALERT", "Bienvenido al club de los adultos"]
        ],
        [
            ["CONSOLE_LOG", "Eres menor! 🧒"],
            ["ALERT", "Vete a estudiar, mocoso"]
        ]
    ],
    
    ["CONSOLE_LOG", "=== FIN TEST 2 ==="]
];
const test3 = [
    ["CONSOLE_LOG", "=== TEST 3: WHILE y BREAK ==="],
    
    ["SET", "contador", 0],
    ["SET", "limite", 5],
    ["WHILE", ["<", ["VAR", "contador"], ["VAR", "limite"]],
        [
            ["SET", "contador", ["+", ["VAR", "contador"], 1]],
            ["CONSOLE_LOG", "Iteración: ${contador}"],
            
            ["IF", ["==", ["VAR", "contador"], 3],
                [
                    ["CONSOLE_LOG", "¡Llegamos a 3! Rompiendo ciclo..."],
                    ["BREAK"]
                ],
                []
            ]
        ]
    ],
    
    ["CONSOLE_LOG", "Contador final: ${contador}"],
    ["CONSOLE_LOG", "=== FIN TEST 3 ==="]
];
const test4 = [
    ["CONSOLE_LOG", "=== TEST 4: Operadores de Comparación ==="],
    
    ["SET", "a", 10],
    ["SET", "b", 20],
    ["SET", "c", 10],
    
    ["CONSOLE_LOG", "a = ${a}, b = ${b}, c = ${c}"],
    
    ["IF", ["==", ["VAR", "a"], ["VAR", "c"]],
        ["CONSOLE_LOG", "a == c: VERDADERO"],
        ["CONSOLE_LOG", "a == c: FALSO"]
    ],
    
    ["IF", ["!=", ["VAR", "a"], ["VAR", "b"]],
        ["CONSOLE_LOG", "a != b: VERDADERO"],
        ["CONSOLE_LOG", "a != b: FALSO"]
    ],
    
    ["IF", [">", ["VAR", "b"], ["VAR", "a"]],
        ["CONSOLE_LOG", "b > a: VERDADERO"],
        ["CONSOLE_LOG", "b > a: FALSO"]
    ],
    
    ["IF", ["<", ["VAR", "a"], ["VAR", "b"]],
        ["CONSOLE_LOG", "a < b: VERDADERO"],
        ["CONSOLE_LOG", "a < b: FALSO"]
    ],
    
    ["CONSOLE_LOG", "=== FIN TEST 4 ==="]
];
const test5 = [
    ["CONSOLE_LOG", "=== 🎯 TEST 5: FUNCIONES ==="],
    
    // Función factorial recursiva (¡sí, tu lenguaje ya puede ser recursivo!)
    ["FUNCTION", "factorial", ["n"],
        [
            "IF", ["<=", ["VAR", "n"], 1],
                ["RETURN", 1],
                ["RETURN", ["*", ["VAR", "n"], 
                    ["CALL", "factorial", ["-", ["VAR", "n"], 1]]
                ]]
        ]
    ],
    
    // Función que usa variables globales
    ["FUNCTION", "saludar", ["nombre"],
        [
            ["CONSOLE_LOG", "Hola ${nombre}, tienes ${edad} años"],
            ["SET", "ultimoSaludo", ["VAR", "nombre"]],
            ["RETURN", "Saludé a ${nombre}"]
        ]
    ],
    
    ["SET", "edad", 25],
    ["CONSOLE_LOG", "Factorial de 5: ", ["CALL", "factorial", 5]],
    
    ["SET", "resultado", ["CALL", "saludar", "12steve"]],
    ["CONSOLE_LOG", "Resultado del saludo: ${resultado}"],
    ["CONSOLE_LOG", "Último saludo fue a: ${ultimoSaludo}"],
    
    // Demostrar que las variables locales no afectan globales
    ["FUNCTION", "demoScope", [],
        [
            ["SET", "x", 999],
            ["CONSOLE_LOG", "Dentro de función: x = ${x}"],
            ["RETURN", ["VAR", "x"]]
        ]
    ],
    
    ["SET", "x", 42],
    ["CONSOLE_LOG", "Antes de llamar: x = ${x}"],
    ["SET", "ret", ["CALL", "demoScope"]],
    ["CONSOLE_LOG", "Después de llamar: x = ${x}, ret = ${ret}"],
    
    ["CONSOLE_LOG", "=== FIN TEST 5 ==="]
];
const test6 = [
    ["CONSOLE_LOG", "🔥🔥🔥 TEST DEFINITIVO 🔥🔥🔥"],
    ["CONSOLE_LOG", "Bienvenido al EXAMEN FINAL de Windows 12"],
    
    // === Definir funciones útiles === //
    ["FUNCTION", "esPar", ["num"],
        ["RETURN", ["==", ["%", ["VAR", "num"], 2], 0]]
    ],
    
    ["FUNCTION", "fibonacci", ["n"],
        ["IF", ["<=", ["VAR", "n"], 1],
            ["RETURN", ["VAR", "n"]],
            ["RETURN", ["+", 
                ["CALL", "fibonacci", ["-", ["VAR", "n"], 1]],
                ["CALL", "fibonacci", ["-", ["VAR", "n"], 2]]
            ]]
        ]
    ],
    
    ["FUNCTION", "juegoAdivinanza", [],
        [
            ["SET", "secreto", ["INT", ["*", ["RANDOM"], 10]]], // Necesitas opcode RANDOM
            ["SET", "intentos", 0],
            ["SET", "maxIntentos", 3],
            
            ["WHILE", ["<", ["VAR", "intentos"], ["VAR", "maxIntentos"]],
                [
                    ["SET", "intentos", ["+", ["VAR", "intentos"], 1]],
                    ["SET", "numero", ["INT", ["PROMPT", "Adivina el número (0-9):"]]],
                    
                    ["IF", ["==", ["VAR", "numero"], ["VAR", "secreto"]],
                        [
                            ["ALERT", "¡Felicidades! Adivinaste en ${intentos} intentos"],
                            ["RETURN", "GANASTE"]
                        ],
                        [
                            ["CONSOLE_LOG", "Número ${numero} no es el correcto"],
                            
                            ["IF", ["==", ["VAR", "intentos"], ["VAR", "maxIntentos"]],
                                ["ALERT", "Perdiste. El número era ${secreto}"],
                                [
                                    ["IF", [">", ["VAR", "numero"], ["VAR", "secreto"]],
                                        ["CONSOLE_LOG", "Pista: El número es MENOR"],
                                        ["CONSOLE_LOG", "Pista: El número es MAYOR"]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            ["RETURN", "PERDISTE"]
        ]
    ],
    
    // === Programa principal === //
    ["CONSOLE_LOG", "=== Fibonacci ==="],
    ["SET", "i", 0],
    ["WHILE", ["<", ["VAR", "i"], 10],
        [
            ["CONSOLE_LOG", "fib(${i}) = ", ["CALL", "fibonacci", ["VAR", "i"]]],
            ["SET", "i", ["+", ["VAR", "i"], 1]]
        ]
    ],
    
    ["CONSOLE_LOG", "=== Números pares del 1 al 10 ==="],
    ["SET", "i", 1],
    ["WHILE", ["<=", ["VAR", "i"], 10],
        [
            ["IF", ["CALL", "esPar", ["VAR", "i"]],
                ["CONSOLE_LOG", "${i} es par"],
                []
            ],
            ["SET", "i", ["+", ["VAR", "i"], 1]]
        ]
    ],
    
    ["CONSOLE_LOG", "=== Iniciando juego de adivinanza ==="],
    ["SET", "resultadoJuego", ["CALL", "juegoAdivinanza"]],
    ["CONSOLE_LOG", "Resultado del juego: ${resultadoJuego}"],
    
    ["CONSOLE_LOG", "🔥🔥🔥 FIN DEL TEST DEFINITIVO 🔥🔥🔥"]
];
const fun = [
    ["SET", "x", "5"],
    ["CONSOLE_LOG", "Antes: ${x}"],
    ["FUNCTION", "print", ["name", "msg"], [
            ["CONSOLE_LOG", "Func Antes: ${x}"],
            ["SET", "x", "10"],
            ["CONSOLE_LOG", "Func Despues: ${x}"],
            ["CONSOLE_LOG", "[${name}] says: ${msg}"],
            ["RETURN", "Un beso"],
            ["ALERT", "¡WINDOWS 11 ES MEJOR QUE WINDOWS 12!!!!"] // nunca se ejecuta XDXDXDDDDDDDDDD
        ]
    ],
    ["FUNCTION", "sum", ["a","b"],["RETURN", ["+",["VAR","a"],["VAR","b"]]]],
    ["SET", "retorno", ["CALL", "print", "Dayanna", "Hola mi bebé peshioso :3"]],// CHAT, NO QUIERO COMENTARIOS, SOLO TAPATE LOS OJOS 😭😭😭😭😭
    ["CONSOLE_LOG", "Despues: ${x}"],
    ["CONSOLE_LOG", "Ella me dará... ¡${retorno}!"],
    ["CONSOLE_LOG", ["CALL", "sum", 12, 10]]
]

// ultimos pasos:
// - implementar esto en el doble click de archivos .exe
// - añadir opcode IMPORT y... ver user32.dll funcionar :D (voy a llorar, mi sueño siempre fue ver cómo funcionaban esos pinches archivos del sistema, y aunque no estoy haciendo literalmente... estoy haciendo lo más parecido a ello, **y hecho por mi** :DDD)
