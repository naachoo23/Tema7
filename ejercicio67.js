/* 
Ej. 67: En base al ejercicio más arriba, cuenta el número de palabra únicas
de un texto
*/
/* 
Ej. 67: En base al ejercicio más arriba, cuenta el número de palabras únicas
de un texto
*/

const txt = "—¡Vaya!—se dijo Alicia—. He visto muchísimas veces un gato " +
"sin sonrisa, ¡pero una sonrisa sin gato!¡Es la cosa más " +
"rara que he visto en toda mi vida! - Alicia en el país de " +
"las maravillas (L. Carroll)";

const cnt = txt.toLowerCase()
.split(' ')
.map(palabra => palabra.replace(/[^\p{L}\p{M}]/gu, ''))
.reduce( (acc, p) => ({ ...acc, [p]: (acc[p] || 0) + 1 }),
{});


console.log(Object.keys(cnt).filter(e=> cnt[e] == 1).length);

console.log(Object.entries(cnt).filter(e=> e[1] == 1).length);
