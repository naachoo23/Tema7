/* 
j. 41: Partiendo de un array de números, crea un array de valores
acumulados, de forma que el valor de un array es igual a sumar todos los
valores anteriores.
Ejemplo: para [3, -1, 0, 4, 5, -3], el resultado es [3, 2, 2, 6, 11, 8]
*/

/* const num = [3, -1, 0, 4, 5, -3];
const r = num.reduce((acc, elem,i) => [...acc,  (acc[i-1])+elem || 0], []);
console.log(r); */


/* const num = [3, -1, 0, 4, 5, -3];


const r = num.map((elem, index) => {
    let acc = 0; 
    for (let i = 0; i <= index; i++) { 
        acc += num[i]; 
    }
    return(acc); 
});

console.log(r);  */


//Invertir ese mismo array
/* const num = [3, -1, 0, 4, 5, -3];
const r = []; // Inicializa un array vacío para almacenar los elementos invertidos

for (let i = num.length - 1; i >= 0; i--) { // Itera desde el último índice hasta el primero
    r.push(num[i]); 
}

console.log(r); // [-3, 5, 4, 0, -1, 3]  */


//Otra forma

const num = [3, -1, 0, 4, 5, -3];;
const r = num.reduce((acc, elem, index, arr) => [elem, ...acc]);
console.log(r)