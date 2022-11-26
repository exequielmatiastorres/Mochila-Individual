var carName  //variable declarada - no posible con let
carName = "Volvo";//variable inicializada - no posible con let

// functions, metodos de invocacion: eventos, invocacion, automaticamente.
//Los parámetros de la función se enumeran entre paréntesis () en la definición de la función.
//Los argumentos de la función son los valores recibidos por la función cuando se invoca.

function contarNumbers(parametro1, parametro2) {
    return parametro1 + parametro2; //con return la funcion dejara de ejecutarse
}

//Objects: son variables pero a diferencia de estas pueden contener muchos valores (No declare cadenas, números y booleanos como objeto1!)
//Metodos de Objeto: son acciones que se pueden realizar sobre estos objet1. Un método es una función almacenada como una propiedad.
const car = {type:"Fiat", model:"500", color:"white"} //es normal declarar objeto1 con const
//type es propiedad y "Fiat" es el valor de la propiedad
//formas de acceder a las propiedades del objeto: nombreDeObjeto.NombreDeObjeto o nombreDeObjeto["NombreDePropiedad"]
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName; //this se refiere al objeto persona.En otras palabras, this.firstNamesignifica la firstNamepropiedad de este objeto .
    }
  };

  x = new String(); //Cuando se declara una variable de JavaScript con la palabra clave " new", la variable se crea como un objeto

  //La comparación de dos objetos de JavaScript siempre devuelve falso .

//En un método de objeto, this se refiere al objeto .
//Solo, this se refiere al objeto global .
//En una función, en modo estricto, this es undefined.
//En un evento, this se refiere al elemento que recibió el evento.
//Métodos como call(), apply() y bind() pueden hacer referencia thisa cualquier objeto .


//Eventos  de JavaScript
/*
onchange    Se ha cambiado un elemento HTML
onclick     El usuario hace clic en un elemento HTML
onmouseover El usuario mueve el mouse sobre un elemento HTML
onmouseout  El usuario aleja el mouse de un elemento HTML
onkeydown   El usuario presiona una tecla del teclado
onload      El navegador ha terminado de cargar la página
*/ 

//String JavaScript

let text = "Vamos a cobrar"
let strtrt = text.length; //text vendria a ser la variable que contiene el string y length es la funcion de javascript que va a indicar la cantidad de letras que contiene un string expresado en numeros

// (\ este slash convierte cualquier caracter especial en string, \' con comillas simples, \" con comillas dobles)

// las cadenas también se pueden definir como objetos con la palabra clave new: (NEW ES UNA MALA PRACTICA APARTE DE RALENTIZAR EL CODIGO)
let y = new String("John");

//Methods String





/*

ELEVACION DE JAVASCRIPT.
DATA TYPES.
BOOLEANOS JS.
undefined tipo de dato undefined


let = metodo para guardar valores (no se pueden volver a declarar)
var = metodo para guardar valores 
const = metodo para guardar valores que no cambian (No se pueden inicializar como var)
usar const en:
Una nueva matriz
Un nuevo objeto
Una nueva función
Una nueva expresión regular


=== estrictamente igual valor e igual tipo
!== valor diferente o tipo diferente
!= no igual
== igual a
? operador ternario

** exponenciacion
/ division
% Módulo (resto de la división)
++ increment
-- decrement
La multiplicación ( *) y la división ( /) tienen mayor precedencia que la suma ( +) y la resta ( -). (Cuando se usan paréntesis, las operaciones dentro de los paréntesis se calculan primero.)
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**= x **= y	x = x ** y

operadores logicos
&& and
|| or
!  not

typeof (retorna el tipo de dato.)
NaN es una palabra reservada de JavaScript que indica que un número no es un número legal.

Puede usar la función global de JavaScript isNaN() para averiguar si un valor no es un número:
let x = 100 / "Apple";
isNaN(x);


*/



//objeto1 JS



//parte en la que quedamos: Arrays/Matriz JS Segmento de Matriz de jS()