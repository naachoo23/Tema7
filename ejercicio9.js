/* 
Ej. 9: Utiliza map para, a partir de un array de cadenas que contienen
nombres, devolver un array de objetos, que contendrán, cada uno, un atributo
de nombre y un atributo llamado id con valor 0 .
Por ejemplo, si el array inicial es ['Juan', 'María’, 'Jose'] , devolverá
[{nombre:'Juan', id:0}, {nombre:'Juan', id:0}, {nombre:'Juan',
id:0} ] .
*/
let personas4 = [
    { nombre: 'Juan', edad: 25},
    { nombre: 'Maria', edad: 30},
    { nombre: 'Pedro', edad: 22}
];
const nombre4 = personas4.map( ({nombre}) =>
    ({nombre:nombre, id: 0})
    );
    console.log(nombre4);

    //let a = {kssksskk};
    //let b = ({...a}) hace una copia del primero