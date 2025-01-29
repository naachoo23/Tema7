/* Ej. 49: A partir del array de estudiantes anterior, obtén un array con la nota
media de cada asignatura (para una asignatura concreta, sería la suma de
todas las notas media de todos los estudiantes dividida por el número de
estudiantes). */
const estudiantes = [
    { nombre: 'Ana', t1: [3, 9, 10], t2: [1, 5, 7] },
    { nombre: 'Luis', t1: [6, 2, 5], t2: [6, 5, 6] },
    { nombre: 'Sofía', t1: [9, 8, 10], t2: [1, 5, 1] },
    ];
 const resultado = estudiantes.map(elem => (
    (elem.t1[0] + elem.t2[0]) && 
        (elem.t1[1] + elem.t2[1]) && 
        (elem.t1[2] + elem.t2[2])
 )) 
const resultado2 = resultado.reduce((acc, elem) => acc[0] + acc[1] + acc[2] / 2, [0,0,0]) / 3

console.log(resultado);

