/* 
Ej. 36: Partiendo del array del carrito anterior, obtén un objeto que
contenga todos los nombres separados por comas, el precio total y la cantidad
total. En este caso, deberemos conseguir {nombre: 'Lapiz, Goma,
Sacapunta, ', precio: 4.5, cantidad: 4 } . Observa, para el precio total,
que el artículo Lápiz tiene una cantidad de 2.
158
*/
const carrito = [
    { nombre: "Lápiz", precio: 1, cantidad: 2, categoria: "A" },
    { nombre: "Goma", precio: 0.5, cantidad: 1, categoria: "B" },
    { nombre: "Sacapuntas", precio: 2, cantidad: 1, categoria: "A" }
    ];
    const resultado = carrito.reduce((acc,elem) => ({
        nombre : (acc.nombre || "") + elem.nombre + ",",
        precio : (acc.precio  || 0) + elem.precio * elem.cantidad + ",",
        cantidad : (acc.cantidad || 0 ) + elem.cantidad
            })
        ,{});
    console.log(resultado);