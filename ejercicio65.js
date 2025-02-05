/* 
Ej. 65: Mejora el ejemplo anterior. Habrás visto que, debido a que hay
dobles espacios, se genera un campo indeseado en el array final representando
a la cadena vacía. Además, la separación debería hacerse no solo con el
espacio, sino con todos los símbolos de puntuación ( "'.,:;!¡¿?‘’«»“”\-_—()
[] ) más los espacios. Realiza el patrón regex de forma global y unicode.
*/

const txt = "—¡Vaya!—se dijo Alicia—. He visto muchísimas veces un gato " +
"sin sonrisa, ¡pero una sonrisa sin gato!¡Es la cosa más " +
"rara que he visto en toda mi vida! - Alicia en el país de " +
"las maravillas (L. Carroll)";

const cnt = txt.toLowerCase()
.split(' '|/[^\p{L}\p{M}]/gu)
.map(palabra => palabra.replace(/[^\p{L}\p{M}]/gu, ''))
.reduce( (acc, p) => ({ ...acc, [p]: (acc[p] || 0) + 1 }),
{});
console.log(cnt); //{vaya: 1, se: 1, dijo: 1, alicia: 2, he: 2, ...}

//regex101