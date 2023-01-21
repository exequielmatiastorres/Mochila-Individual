const miObjeto = {
    nombre: 'ANA',
    Ciudad: 'Córdoba',
    País: 'Argentina',
    Estudia: 'Universidad'
};

const arrVacio = []

const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

arr.push(5)


arrVacio.push(5)
arrVacio.push(5)
arrVacio.push(5)
arrVacio.push(5)
arrVacio.push(5)

//console.log(arr)
//console.log(arrVacio)

//operadores( + - * /(division))


//modulo
const modulo = 10 % 3 //resta el valor que sobra
//console.log(modulo)


//incremento y decremento (++ --)
//const vs let (const no permite cambiar el valor de las variables)
let num = 5
num++
num++
num++
num++
num++
num++
num--
num--
num--
num--
num--
num--
//console.log(num)

//operador de asignación += (incremento de un numero) -= (decremento mas asignación de un numero) *=(asignacion y multiplicacion) /= (asignacion y division)


//operadores de comparación(sirven para realizar comparaciones entre distintos tipos de datos.) (los operadores de comparacion siempre van a devolver un tipo de dato boolean)

const resultado1 = 5 === 6 //(operador igual estricto, ambos datos tienen que ser exactamente iguales)
const resultado2 = 5 == '5' // operador de igualdad, no es tan estricto.
//console.log(resultado2)

//operador < menor que y > mayor que (<=menor o igual >=mayor o igual)


//desigualdad estricta

const resultado11 = 5 !== 6;
const resultado12 = 5 != '5';

//console.log(resultado11, resultado12)

//operadores logicos, or(||) and(&&) y not(!)

const resultadoOr = false || true //se le asigna a or el PRIMER resultado que se considere como true (el resto no lo toma en consideración) y es el que retorna, si existen 2 valores que son falsos nuestra variable va a retornar falso
//console.log(resultadoOr)

const resultadoAnd = true && false //and busca el primer false y lo muestra en pantalla

//console.log(resultadoAnd)

const resultadoNot = !false //da vuelta el valor que este tiene, es decir que va a mostrar el valor completamente opuesto.

//console.log(resultadoNot)



//CONTROL DE FLUJO (nos permite realizar iteraciones o nos permite evaluar condiciones)

const edad = 18

//if (edad > 5 && edad < 18) { //if evalua la condicion a ejecutar, si no es true no se ejecuta, puede recibir otro tipo de comparaciones.
//    console.log('tiene permiso de ingresar al juego')
//}else {
//    console.log('no tiene permiso de ingresar al juego')
//}

//es una condicion que se queda iterando a menos que le digamos que se detenga, siempre busca ue el flujo de false

//let x = 0 
//while (x < 5) {
//    console.log(x);
//    x++
//}

//console.log('terminando el loop')


//control de flujo - switch (ejecuta una instruccion o una segunda instruccion)

/*let y =3
switch (3) {
    case 1:
        console.log('yo soy el caso 1');
        break;
    case 2: 
        console.log('chanchito feliz');
        break;
    case 3:
        console.log('chanchito triste');
        break;
    default:
        console.log('no hay chanchitos!');
        break;
}*/


//control de flujo for (es similar a while)

/*for (let i = 0; i < 10; i++) { //indicamos las instrucciones dentro del parentesis que tiene que seguir for, en este caso, dentro de este parentesis tenemos que indicarle 3 instrucciones
    console.log(i)
}*/


//¿como acceder a cada uno de los elementos de un arreglo con un for?
//todos los arreglos tienen una propiedad llamada lenght
/*const numeros = [1, 2, 3, 'Hola', 5] //este arreglo tiene un largo de 5

console.log(numeros[3]) //meotodo mediante el cual accedemos al elemento de un arreglo

for (let i = 0; i < numeros.lenght; i++) {
    console.log(numeros[i]);
}

console.log(numeros.lenght)*/


//funciones (las funciones reciben argumentos, lo que permite cambiar el contenido de manera dinamica lo que se encuentra dentro de la función)

function iterar(arg1 /*aqui dentro van los argumentos de una función*/) {
    //aqui dentro va todo el codigo a ejecutar
    //let numeros = [1, 2, 3, 'Hola', 5]

    for (let i = 0; i < arg1.length; i++) {
    console.log(arg1[i]);
    }
}

const numeros = [1, 2, 'Hola', 4, 5]
const nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito Feliz', 'chanchito triste']

iterar(numeros/*aqui dentro van los parametros de una funcion*/)
iterar(nombres)


//mas funciones (para declarar una funcion se utiliza la palabra clave function) todas las funciones en javascript si no le indicamos un valor de retorno, esta inmediatamente nos va a retornar undefined

/*function suma(argumentoa, argumento) {
    return argumentoa + argumento; //returno toma todo lo que se encuentre a la derecha y lo va a devolver para que pueda ser asignado a un tipo variable
}

let resultadoSuma1 = suma(2, 5) //parametros de la funcion
let resultadoSuma2 = suma(5, 6)
let resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)   
console.log('el resultado es', resultadoSuma3)*/


//callback es una funcion que se va a ejecutar al final de una funcion. (las funciones de javascript son valores, por lo que podemos enviarlas como argumentos a otra funcion)

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result) {
    console.log('resultado', result)
}

//callback(6) 
sumar(2, 3, callback)




//fact arrow function: tienen 2 beneficios, no se tiene que utilizar la palabra reservada function para declarar esta funcion, la 2da si tiene una sola linea de codigo a ejecutar, no es necesario ejecutar el valor de return ya que este sera implicito

const miFatArrowFunction = (a, b) => /*seguido del => colocamos la logica que queremos ejecutar*/ a + b //return implicito ya que esta retornando unicamente 2 valores
const otraFAF = (a, b) => {
    return a + b
}
const r = otraFAF(12, 2)
console.log(r)



//funciones anonimas: es una funcion que no contiene ningun nombre, se utiliza en un contexto cuando la misma va a ser ejecutada por otra funcion, por ejemplo en los callbacks.

sumar(2, 3, function (r) {
    console.log('soy una funcion anonima y mi resultado es', r)
})

//DOM: arbol html de nuestra pagina web. estandar que permite cambiar, eliminar, agregar o ver elementos html dentro de nuestro sitio web o aplicacion web.




/*

metodo: comienza con un . y sigue con el nombre del metodo, luego parentesis: por ejemplo el metodo .push()   

tipos de datos:
string
booleanos
number
null: nulo.
undefined
object: objeto
array


definicion de variables
var
let
const


Objetos: es una agrupacion de datos, estos datos hacen sentido entre si.
los objetos tienen propiedades
los objetos son agrupaciones de datos que hacen sentido entre si.

Objeto vacio:
const miPrimerObjeto = {}


objeto:

const miObjeto = {
    unNumero: 12,
    unString: 'esta cadena de caracteres',
    unaCondicion: true,
}

console.log(*nombreDeObjeto*.*propiedad de objeto a mostrar*) (en este caso muestra por consola solamente una propiedad del objeto)



Arreglos o array (los arreglos pueden contener elementos de cualquier tipo dentro de el)

const arr = [] array vacio

const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

Agregando mas elementos a nuestro arreglo

arr.push(5) (puah agrega un elemento a nuestro arreglo)

*/