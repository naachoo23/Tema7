/* 
Ej. 66: Escribe un programa que, usando split, cuente el número de
palabras que tiene.
*/

const txt = "—¡Vaya!—se dijo Alicia—. He visto muchísimas veces un gato " +
"sin sonrisa, ¡pero una sonrisa sin gato!¡Es la cosa más " +
"rara que he visto en toda mi vida! - Alicia en el país de " +
"las maravillas (L. Carroll)";

const palabras = txt.split(" "); 

console.log(palabras.length);
