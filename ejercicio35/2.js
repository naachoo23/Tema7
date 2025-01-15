/* 
Ej. 35: A partir de un array de objetos, siendo todos los atributos distintos,
como por ejemplo [ { a: 1, b: 2 }, { c: 3 }, { d: 4 } ] , combina
todos los objetos en uno: [ { a: 1, b: 2, c: 3, d: 4 } ] .
Nota: en la función del reduce , tendrás que devolver un objeto con todos los
atributos del objeto acumulado (usa el operador spread), más todos los
atributos del elemento actual (usa también el operador spread)pero en vez de añadir los elementos tal cual, sumar cada una de las cantidades
{a:5, b:2, c:3}
*/
const segundo = [{ a: 1, b: 2 }, { c: 3 }, { a: 4 } ];

const resultado = segundo.reduce((acc,elem) => {
    for(let clave in elem){
        //acc[clave] = (acc[clave] || 0) + elem[clave];
        if(acc[clave] !==undefined){
            acc[clave]+= elem[clave];
        }else{
            acc[clave] = elem[clave];
        }
        return acc;
    }
},{});
console.log(resultado);