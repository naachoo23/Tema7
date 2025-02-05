/* 
Ej. 62: A partir de una cadena de fecha completa (una cadena del tipo
"19/02/2024 15:30:45" , obtén el año usando split.
Pista: Ttendrás que partir la cadena por el espacio quedándote solo con la
primera parte. Luego deberás partir el resultado (con otro split) separando
por la barra, para, finalmente, quedarte con el tercer elemento
*/

const cadena = "19/02/2024 15:30:45";

const resultado = cadena.split("/") [2].split(" ", 1)

//usando regex
const fecha = cadena.split(/[\/\s]/)[2]
console.log(fecha);
