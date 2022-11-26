//Back-Tics: los templates literales usan comillas invertidas (``) en lugar de comillas ("") para definir una cadena.
let text = `Hello World!`;

//Quotes Inside Strings: con literales de plantilla, puede usar comillas simples y dobles dentro de una cadena.
let text1 = `He's often called "Johnny"`;

//Multilinea: Los literales de plantilla permiten cadenas de varias líneas:
let textf =
`The quick
brown fox
jumps over
the lazy dog`;

//Interpolación: Los literales de plantilla proporcionan una manera fácil de interpolar variables y expresiones en cadenas.
//El método se llama interpolación de cadenas, la sintaxis es:
//${...}}

//Situaciones de Variables: Los literales de plantilla permiten variables en cadenas:
let firstName = "John";
let lastName = "Doe";

let textd = `Welcome ${firstName}, ${lastName}!`; //La sustitución automática de variables por valores reales se denomina interpolación de cadenas .


//Sustitucion de expresion: Los literales de plantilla permiten expresiones en cadenas:
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
//El reemplazo automático de expresiones con valores reales se denomina interpolación de cadenas .





/*
Sinonimos:
*Template Literals //Template Literalses una característica de ES6 (JavaScript 2015).
*Template Strings
*String Templates
*Back-Tics Syntax

El intérprete de JavaScript funciona de izquierda a derecha.


*/