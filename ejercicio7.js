/* 
Ej. 7: Utiliza map para extraer los nombres del array de personas usado
en los ejemplos anteriores, pero cada nombre debe estar en de un objeto. El
resultado debe ser: [ { nombre: 'Juan'}, { nombre: 'Maria'},
{ nombre: 'Pedro'} ] 
*/
let personas2 = [
    { nombre: 'Juan', edad: 25, cargo:'Jefe' },
    { nombre: 'Maria', edad: 30 },
    { nombre: 'Pedro', edad: 22 }
];
let nombre2 = personas2.map(obj => ({nombre: obj.nombre}));
console.log(nombre2);