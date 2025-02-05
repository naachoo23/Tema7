/* 
Ej. 64: Extrae los números de un texto. Observa que los números de un
texto está separados por uno o más caracteres que no son números
(representados por \D ).
*/
const texto = "19/02/2024 15:30:45"

const resultado = texto.split(/\D+/)
console.log(resultado);
