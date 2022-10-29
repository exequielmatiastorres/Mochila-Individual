//toString() metodo devuelve un numero como una cadena
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();

//toExponential() devuelve una cadena, con un numero redondeado y escrito en notacion exponencial
let x1 = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

//toFixed() devuelve una cadena, con el numero escrito con un numero especifico de decimales. toFixed(2)es perfecto para trabajar con dinero
let x2 = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

//toPrecision() metodo devuelve una cadena, con un numero escrito con una longitud especificada.
let x3 = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

//valueOf() devuelve un numero como un numero. El valueOf()método se usa internamente en JavaScript para convertir objetos numéricos en valores primitivos.
let x4 = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();

//Number() se puede utilizar para convertir variables de JS en numeros.
Number(true);
Number("10");
Number("John");

//parseInt() analiza una cadena y devuelve un numero entero. Se permiten espacios. Solo se devuelve el primer numero:
parseInt("-10");
parseInt("10.33");
parseInt("10 years");
parseInt("10 20 30")

//parseFloat() analiza una cadena y devuelve un numero. Se permiten espacios. Solo se devuelve el primer numero:
parseFloat("10");
parseFloat("10.33")
parseFloat("10 years")
parseFloat("years 10")



/*
Los Metodos numericos lo ayudan a trabajar con numeros
Todos los tipos de datos de JavaScript tienen un valueOf()y un toString()método.


Conversion de variables a numeros. Estos son los metodos mas relevantes cuando se trabaja con numeros
Hay 3 metodos de JS que se pueden usar para convertir variables en numeros:
*el Number()metodo
*el parseInt()metodo
*el parseFloat()metodo


*/