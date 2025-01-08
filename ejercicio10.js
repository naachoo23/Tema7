/* 
Ej. 10: Utiliza map para, a partir del a un del array de personas usado
anteriormente, se añada, a cada uno de los objetos del array, un campo
llamado ciudad , con valor Jaén . Observa que cada elemento de array debe
conservar sus otros campos, sin añadir ni borrar ninguno.
*/
let personas5 = [
    { nombre: 'Juan', edad: 25, cargo:'Jefe'},
    { nombre: 'Maria', edad: 30},
    { nombre: 'Pedro', edad: 22}
];
    let nombre5 = personas5.map(obj =>  ({...obj, nombre:obj.nombre, edad:obj.edad, ciudad:"jaen"}));//se puede quitar el nombre y la edad

    console.log(nombre5);   