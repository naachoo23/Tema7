/* 
Utiliza map para, a partir de un array de cadenas que contienen
nombres, devolver un array de objetos, que contendrán, cada uno, un atributo
de nombre y un atributo llamado id con valor numérico consecutivo,
empezando por 1 .
Por ejemplo, si el array inicial es [‘Juan’, ‘María’, ‘Jose’] , devolverá
[{nombre:‘Juan’, id:1}, {nombre:‘Juan’, id:2}, {nombre:‘Juan’,
id:3} ] 
*/
let nombres = ['nacho','juan','pepe'];
let nuevosNombres = nombres.map((elem,index) => ({nombre:elem, id: index++ + 1}));
console.log(nuevosNombres);