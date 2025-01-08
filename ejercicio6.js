/* 
Ej. 6: Utiliza map para extraer los nombres del array de personas usado
en los ejemplos anteriores. El resultado debe ser: [ 'Juan', 'Maria',
'Pedro' ] .
*/
let personas = [
    { nombre: 'Juan', edad: 25, cargo:'Jefe' },
    { nombre: 'Maria', edad: 30 },
    { nombre: 'Pedro', edad: 22 }
];
let nombre = personas.map(obj => obj.nombre);
console.log(nombre);
