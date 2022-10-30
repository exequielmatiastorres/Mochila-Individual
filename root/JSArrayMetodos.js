//Conversion de Array a String
//El metodo de JS toString() convierte una matriz en una cadena de valores de Array(separados por coma. )
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
//prespuesto 20205
//Join() metodo tambien une todos los elementos de la matriz en una cadena. Con la diferencia de que puedes indicar el separador.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

//Pop: Array JS: Metodo elimina el ultimo elemento de una matriz
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

//El pop() metodo devuelve el valor que salio:
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();


//push() para agregar elementos a un Array(al final del array):
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

//El push() metodo devuelve la nueva longitud de la matriz.
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

//Cambio de Array en JS: El shift() metodo elimina el primer elemento de la matriz y "cambia" todos los demas elementos a un indice mas bajo.
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();


//El shift()método devuelve el valor que fue "desplazado":
//Ejemplo
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
let fruit9 = fruits.shift();


//Unshift() Array JS. Agrega un nuevo elemento a una matriz (al principio) y "desplaza" los elementos mas antiguos.
const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");


//El unshift()método devuelve la nueva longitud de la matriz.
//Ejemplo
const fruiits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");


//La length propiedad proporciona una manera fácil de agregar un nuevo elemento a una matriz:
//Ejemplo
const fruuits = ["Banana", "Orange", "Apple", "Mango"];
fruuits[fruiuts.length] = "Kiwi";


//Fusionando (Concatenando) Matrices.
//El concat() metodo crea una nueva matriz fusionando (concatenando) matrices existentes:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
//El concat()método no cambia las matrices existentes. Siempre devuelve una nueva matriz.




//Array Splice() and Slice():
//Splice() metodo agrega nuevos elementos a una matriz
//Slice() metodo corta una parte de una matriz
//El splice()método se puede usar para agregar nuevos elementos a una matriz:
//Ejemplo
const fruitsz = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

/*El primer parámetro (2) define la posición en la que se deben agregar (empalmar) nuevos elementos.

El segundo parámetro (0) define cuántos elementos se deben eliminar .

El resto de parámetros ("Limón", "Kiwi") definen los nuevos elementos a añadir .*/



//El splice()método devuelve una matriz con los elementos eliminados:
//Ejemplo
const fruitst = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");


//Con una configuración de parámetros inteligente, puede usar splice()para eliminar elementos sin dejar "agujeros" en la matriz:
//Ejemplo
const fruitszz = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

/*El primer parámetro (0) define la posición en la que se deben agregar (empalmar) nuevos elementos.

El segundo parámetro (1) define cuántos elementos se deben eliminar .

El resto de los parámetros se omiten. No se añadirán nuevos elementos.*/








/*
Eliminacion de elementos de Arrays:
Usando delete provocas undefined de agujeros en la matriz. Utilice pop() o shift() en su lugar.

El concat()método puede tomar cualquier número de argumentos de matriz:

Ejemplo (fusión de tres matrices)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);


El concat()método también puede tomar cadenas como argumentos:

Ejemplo (Fusionar una matriz con valores)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

*/
