//Matrices es lo mismo que Arrays traducido a español
//Una matriz es una variable especial, que puede contener mas de un valor

//Si tiene una lista de elementos(una lista de nombres de automoviles, por ejemplo) almacenar los automoviles en variables individuales podria tener este aspecto:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

//Crea un Array y le asigna valores con la palabra clave new //ESTO ES UNA MALA PRACTICA

const cars = new Array("Saab","Volvo","BMW");

//Accede a los elementos de la matriz

const cars1 = ["Saab","Volvo","BMW"];
let car = cars[0];

console.log(cars1)

//Cambio de un elemento de matriz
const cars11 = ["Saab","Volvo","BMW"];
cars[0] = "Opel";


//La propiedad longitud
//La length propiedad de una matriz devuelve la longitud  de una matriz (el numero de elementos de la matriz)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length; 

//Acceso al primer elementos del arreglos
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits[0];


//Acceso al ultimo elemento del arreglo
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits[fruits.length - 1];

//Elementos de una matriz en un bucle
const fruitas = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


//Agregar elementos al array: La forma mas facil de agregar un nuevo elemento a una matriz es usando el push() metodo:
const fruits3 = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

//También se puede agregar un nuevo elemento a una matriz usando la lengthpropiedad:
const fruits4 = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits


//JS nuevo Array(): JS tiene un constructos de matrices integrado new Array(), Pero puede usar de manera segura [] en su lugar.
//Estas dos declaraciones diferentes crean una nueva matriz vacia llamada puntos:
const points = new Array();
const points1 = [];

//Estas dos declaraiones diferentes crean una nueva matriz que contiene 6 numeros:
const points2 = new Array(40, 100, 1, 5, 25, 10);
const points3 = [40, 100, 1, 5, 25, 10];


//¿Como reconoces una matriz? Una pregunta comun es:¿Como se si una variable es una matriz? El problema es que el operador de JS typeof devuelve "object":
const fruits44 = ["Banana", "Orange", "Apple"];
let type = typeof fruits44;

//El operador typeof devuelve un objeto porque una matriz de JS es un objeto
//Para resolver este problema, ECMAScript 5 (JavaScript 2009) definió un nuevo método Array.isArray():

Array.isArray(fruits);

//El instanceofoperador devuelve verdadero si un objeto es creado por un constructor dado:

const fruits111 = ["Banana", "Orange", "Apple"];

fruits111 instanceof Array;


/*
¿Porque utilizar Array?
Si tiene una lista de elementos(una lista de nombres de automoviles, por ejemplo) almacenar los automoviles en variables individuales podria tener este aspecto:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
Sin embargo, ¿qué sucede si desea recorrer los autos y encontrar uno específico? ¿Y si no tuvieras 3 coches, sino 300?


Una matriz puede contener muchos valores bajo un solo nombre y puede acceder a los valores haciendo referencia a un número de índice.
Sintaxis:
    const array_name = [item1, item2, item3]

//Los Arrays son objetos pero los Arrays se describen mejor como Arrays: a continuacion una diferencia
Los Arrays usan numeros para acceder a sus "elementos" 
Los objetos usan nombres para acceder a sus "miembros"

Los elementos de Arrays pueden ser objetos
Las variables de JS pueden ser objetos. Las matrices son tipos especiales de objetos. Puedes tenes variables de diferentes tipos en el mismo Array.
Puedes tener objetos en un Array. Puedes tener funciones en un Array. Puedes tener Arrays en Array.

//Propiedades y metodos de Array
La verdadera fortaleza de los Arrays en JS son las propiedades y los metodos de matriz integrados:
*cars.length()   //retorna el numero de elementos
*cars.sort()     //Ordena la matriz



//Matrices Asociativas
Las matrices con indices con nombres se denominan Arrays Asociativas (a hashes)
JS no admite matrices con indices con nombres
en JS, las matrices siempre usan indices numerados.

//La diferencia entre Arrays y objetos
En js, las Array usan indices numerados
En js, los objetos usan indices con nombres.
Las Array son un tipo especial de objetos, con índices numerados.

Cuándo usar arreglos. Cuándo usar Objetos.
JavaScript no admite matrices asociativas.
Debe utilizar objetos cuando desee que los nombres de los elementos sean cadenas (texto) .
Debe utilizar matrices cuando desee que los nombres de los elementos sean números .




IMPORTANTE:
Agregar elementos con índices altos puede crear "agujeros" undefined en una matriz.
Si usa índices con nombre, JavaScript redefinirá la matriz en un objeto.Después de eso, algunos métodos y propiedades de matriz producirán resultados incorrectos.




*/ 