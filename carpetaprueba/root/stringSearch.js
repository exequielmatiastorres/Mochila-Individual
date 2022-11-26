//indexOf() metodo devuelve el indice de (la posicion de) la "first" aparicion de un texto especifico en una cadena. El indexOf()método no puede tomar valores de búsqueda poderosos (expresiones regulares).
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");

//lastIndexOf() metodo devuelve el indice de la ultima aparicion de un texto especifico en una cadena
let str1 = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate", 15); //si el segundo parametro es 15, la busqueda comienza en la posicion 15 y busca hasta el principio de la cadena

//Search() metodo busca una cadena para un valor especifico y devuelve la posicion de la coincidencia. El search()método no puede aceptar un segundo argumento de posición inicial.
let str2 = "Please locate where 'locate' occurs!";
str.search("locate");

//match()
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g); //si no contiene g, solamente va a retornar la primera que encuentre

let text1 = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi); //gi para retornar los valores no solo en minuscula si no tambien que en mayuscula

//includes() metodo devuelve verdadero si una cadena contiene un valor especifico   
let text11 = "Hello world, welcome to the universe.";
text.includes("world");//Optional. Default 0. Position to start the search
//searchvalue	Required. The string to search for
//start	Optional. Default 0. Position to start the search
//Returns:	Returns true if the string contains the value, otherwise false


//StartsWith() metodo regresa true si una cadena comienza con un valor especifico, de lo contrario false. El startsWith()método distingue entre mayúsculas y minúsculas.
let text1f = "Hello world, welcome to the universe.";
text.startsWith("Hello");
//start	Optional. Default 0. The position to start the search.

//endsWith()método regresa true si una cadena termina con un valor específico, de lo contrario false. El endsWith()método distingue entre mayúsculas y minúsculas.
let text1fe = "John Doe";
text.endsWith("Doe");
//string.endsWith(searchvalue, length) SINTAXIS!
//length	Optional. The length to search.

/*
Busqueda de cadenas de JS
*String indexOf() //devuelven -1 si no encuentra el texto
*String lastIndexOf() //devuelven -1 si no encuentra el texto
*String startsWith()
*String endsWith()


El metodo match() busca en una cadena una coincidencia con una expresion regural y devuelve las coincidencias, como un objeto array
Sintaxis:
string.match(regexp) (regexp es expresion regular)


regexp: El valor a buscar, como una expresión regular.
return: Una Array que contiene las coincidencias, un elemento para cada coincidencia o nulo si no se encuentra ninguna coincidencia

//





*/