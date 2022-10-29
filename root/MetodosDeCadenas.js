//Slice() extrae una parte de una cadena y devuelve la parte extraida en una cadena nueva.

//let str = "Apple, Banana, Kiwi";
//let part = str.slice(5); //si el parametro es negativo se cuenta desde el final de la cadena, si solo se ingresa un parametro se elimina la cantidad de string ingresados en el primero. 

//console.log(part);

//substring: es similar a slice() extrae una parte de una cadena y devuelve las partes extraidas en una nueva cadena.

//let strr = "Apple, Banana, Kiwi";
//let partt = str.substring(7, 13); //lo devuelvo en esta linea de codigo se tratara como una nueva cadena

//substr:El segundo parametro especifica la longitud de la parte extraida (si omite el segundo parametro, esta cortara la cadena)

//let strs = "Applee, Bananaa, Kiwii";
//let partes = strs.substr(7, 6);

//console.log(partes);

//replace() metodo reemplaza un valor especificado con otro valor en una cadena, este metodo reemplaza solo la primera coincidencia, tambien este metodo devuelve una nueva cadena. Tambien distingue mayusculas de minuscular a la hora de encontrar texto a reemplazar.
//para reemplazar todas las coindidencias escribir /g

let text = "Please visit Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

console.log(newText);

//conversion a mayuscula
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

//conversion a minuscula
let text11 = "Hello World!";       
let text22 = text1.toLowerCase();

//trim() metodo que elimina los espacios en blanco de ambos lados de una cadena
let text112 = "      Hello World!      ";
let text223 = text1.trim();

//charAt() metodo devuelve el caracter en un indice especificado (posicion) en una cadena:
let text001 = "HELLO WORLD";
let char002 = text.charAt(0); //indice que vamos a extraer

//charCodeAt() metodo devuelve el Unicode del caracter en un indice especificado en una cadena. El metodo devuelve un codigo UTF-16 (Un numero entero entre 0 y 65535)
let text012 = "HELLO WORLD";
let char013 = text.charCodeAt(0);

//Acceso a la propiedad: a traves de []
let text00 = "HELLO WORLD";
let char00 = text00[0];

console.log(char00);





//JS CADENA CONCATENACION concat()


//IMPORTANTE: TODOS LOS METODOS DE CADENA DEVUELVEN UNA NUEVA CADENA, NO MODIFICAN LA CADENA ORIGINAL

/*
Hay 3 metodods para extraer una parte de una cadena
*slice(start, end)
*substring(start, end)
*substr(start, length)

//Conversion a mayusculas y minusculas
Una cadena se convierte a mayusculas con toUpperCase()
Una cadena se convierte a minusculas con toLowerCase()

3 metodos para extraer caracteres de cadena:
*CharAt(position)
*CharCodeAt(position)
*Acceso a la propiedad []

Convertir una cadena en una matriz
si desea trabajar con una cadena como una matriz, puede convertirla en una matriz.
text.split(",")    // dividir por comas 
text.split(" ")    // dividir en espacios // si separamos la matriz en espacios, la matriz devuelta sera una matriz de caracteres individuales
text.split("|")    // dividir en tuberia    

*/