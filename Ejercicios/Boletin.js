//1. Escribe un comentario en una linea
// Este es un comentario en una linea
//2. Escribe un comentario en varias lineas
/*
Este es un comentario
en varias lineas
*/
//3. Declara variables con valores asociados a todos los tipos de datos y imprimelos en la consola
let numero = 42; 
let texto = "Hola, mundo"; 
let booleano = true;
let nulo = null; 
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(nulo);    

//4.Modifica los valores de las variables por otros valores y vuelve a imprimirlos en la consola.
numero = 100;
texto = "Adiós, mundo";
booleano = false;
nulo = "Ahora no es null";
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(nulo);
//5. Declara constantes con valores asociados a todos los tipos de datos y imprimelos en la consola.
const PI = 3.1416;
const SALUDO = "Hola a todos";
const ES_VERDAD = true;
const VACIO = null;
//6. Crea una variable para cada operador aritmetico y muestra su resultado en la consola.
let suma = 5 + 6;
let resta = 20 - 6;
let multiplicacion = 5 * 8;
let division = 20 / 5;
let modulo = 10 % 5;
console.log(suma, resta, multiplicacion, division, modulo);
//7. Crea una variable para cada operador de asignacion y muestra su resultado en la consola.
let a = 20;
console.log(a);
a += 5; console.log(a);
a -= 3; console.log(a);
a *= 2; console.log(a);
a /= 4; console.log(a);
a %= 3; console.log(a);
//8. Crea una variable para cada operador de comparacion y muestra su resultado en la consola.
let x = 18;
let y = "18";
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > 5);
console.log(x < 15);
console.log(x >= 10);
console.log(x <= 20);
//9. Crea una variable pcon un operador lógico y muestra su resultado en la consola.(AND y OR)
let andOp = (x > 5 && y == 10);
let orOp = (x < 5 || y == 10);
console.log(andOp, orOp);
//10. Crea una variable con un operador ternario y muestra su resultado en la consola.
let edad = 18;
let puedeVotar = edad >= 18 ? "Sí puede votar" : "No puede votar";
console.log(puedeVotar);
//11. Concatena dos cadenas de texto y muestra el resultado en la consola.
let saludo = "Hola";
let nombre = "Mundo";
console.log(saludo + " " + nombre);
//12. Transforma una cadena de texto en mayúsculas y muestra el resultado en la consola.
let palabra = "javascript";
console.log(palabra.toUpperCase());
//13. Muestra la longitud de una cadena de texto en la consola.
console.log(palabra.length);
//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.
let frase = "Hola mundo";
console.log(frase.replace(" ", "-"));
//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.
console.log(frase.includes("mundo"));
//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.
console.log(frase.startsWith("Hola"));
//18. Imprime tu nombre si una varibale tiene su valor
let miNombre = "Álvaro";
if (miNombre) console.log(miNombre);
//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos
let user = "perro";
let pass = "123456";
if (user === "perro" && pass === "123456") {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}
//20. Imprime en que estacion del año estamos a partir de una variable que indique el mes
let mes = 9;
if (mes >= 3 && mes <= 5) console.log("Primavera");
else if (mes >= 6 && mes <= 8) console.log("Verano");
else if (mes >= 9 && mes <= 11) console.log("Otoño");
else console.log("Invierno");
//21. Usa switch rehaciendo el ejercicio 20
switch (mes) {
  case 3: case 4: case 5:
    console.log("Primavera"); break;
  case 6: case 7: case 8:
    console.log("Verano"); break;
  case 9: case 10: case 11:
    console.log("Otoño"); break;
  default:
    console.log("Invierno");
}
//22. Crea un listado que almacene cinco elementos.
let lista = [5, 4, 3, 2, 1];
console.log(lista);
//23. A ese listado incluye uno al principio y uno al final.
lista.unshift(6);
lista.push(0);
console.log(lista);
//24. Elimina el último elemento del listado.
lista.pop();
console.log(lista);
//25. Crea un Set que guarde cinco elementos.
let conjunto = new Set([1, 2, 3, 4, 5]);
console.log(conjunto);
//26.Crea un mapa que como clave tenga un numero y como valor el mes.
let mapa = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"]
]);
console.log(mapa);
//27. Crea un bucle que imprima numero del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//28. Crea un bucle que cuente las vocales de una cadena de texto
let textoVocales = "Hola mundo";
let contador = 0;
for (let letra of textoVocales.toLowerCase()) {
  if ("aeiou".includes(letra)) contador++;
}
console.log("Número de vocales:", contador);
//29. Usa un bucle para invertir una cadena de texto
let original = "Hola";
let invertida = "";
for (let i = original.length - 1; i >= 0; i--) {
  invertida += original[i];
}
console.log(invertida);
//30. Crea un funcion que reciba dos numeros y los sume
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 5));
//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original
function filtrarMayusculas(arr) {
  return arr.filter(str => str === str.toUpperCase());
}
console.log(filtrarMayusculas(["Hola", "MUNDO", "PANA", "pez"]));

//32. Crea una funcion que reciba un String y devuelva la candena al reves
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}
console.log(invertirCadena("Hola mundo"));