/* 
Ej. 8: Utiliza map para devolver un array igual a personas, pero con los
nombres todo en mayúsculas.
Nota: String posee un método, toUpperCase() que devuelve el mismo
String pero en mayúsculas.
*/
let personas3 = [
    { nombre: 'Juan', edad: 25, cargo:'Jefe' },
    { nombre: 'Maria', edad: 30 },
    { nombre: 'Pedro', edad: 22 }
];
let nombre3 = personas3.map(obj =>  ({...obj, nombre:obj.nombre.toUpperCase(), edad:obj.edad,}));;//edad se podria quitar
console.log(nombre3);