/* 
Ej. 2: Utiliza map para convertir un array de cadenas todo a mayúsculas.
Nota: String posee un método, toUpperCase() que devuelve el mismo
String pero en mayúsculas
*/
let cadena = ["hola","me llamo", "nacho"];
let cadenaMay = cadena.map(cadena => cadena.toUpperCase());
console.log(cadena);
console.log(cadenaMay);