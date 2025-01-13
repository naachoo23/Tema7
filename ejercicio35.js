/* 
Ej. 35: A partir de un array de objetos, siendo todos los atributos distintos,
como por ejemplo [ { a: 1, b: 2 }, { c: 3 }, { d: 4 } ] , combina
todos los objetos en uno: [ { a: 1, b: 2, c: 3, d: 4 } ] .
Nota: en la función del reduce , tendrás que devolver un objeto con todos los
atributos del objeto acumulado (usa el operador spread), más todos los
atributos del elemento actual (usa también el operador spread).
*/
const primero = [{ a: 1, b: 2 }, { c: 3 }, { d: 4 } ];

const resultado = primero.reduce((acc,elem) => ({...acc, ...elem}),{});
console.log(resultado);