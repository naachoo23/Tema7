/* 
Ej. 11: Utiliza map para devolver el array nums igual excepto que en las
posiciones impares (recuerda que las posiciones empiezan por 0 : que es par:
el 17 y el ‘Hola’ serán sustituidos por el valor 0 ).
Nota: para saber si se trata de una posición par, puede usar index%2==1 
*/
const nums = [ 1.2, 17, -3, 'Hola', {id: 1} ];

let impares = nums.map((elem,index,array) => index%2==1 ? 0 : elem);
console.log(impares);