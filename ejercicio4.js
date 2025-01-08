/* 
Ej. 4: Utiliza map para redondear los elementos de un array de números no
enteros.
Nota: Math.round(«número») devuelve el redondeo de «número»
*/
let numeros = [15.5,6.4,8.6];
let redondeo = numeros.map(numeros => Math.round(numeros));
console.log(numeros);
console.log(redondeo);