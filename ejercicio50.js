/*
Ej. 50: [solo necesita reduce] A partir del array de proyectos anterior, crea
un array que contenga un objeto para cada uno de los proyectos, cada uno con
un campo nombre , con el nombre de proyecto, un campo meses , con el
número de meses totales trabajados por todos los trabajadores, y un campo
trabajadores , con un array de los trabajadores que han trabajado en el
proyecto:
[ { nombre: 'A', meses: 12, trabajadores: [‘Juan’, ‘Lucía’] }, ...
Pista: puedes usar un reduce para tener todos los meses trabajados en un
único array: [ { nombre: 'A', meses: 12, tr: ‘Juan’ }, { nombre: 'B',
meses: 20, tr: ‘Juan’ }, { nombre: 'A', meses: 8, tr: ‘Lucía’ }, … ]
y luego usar un reduce para fusionar proyectos.
*/
/*  const proyectos =
[ { nombre: 'Juan', proyectos: [ { nombre: 'A', meses: 12 },
 { nombre: 'B', meses: 20 }, ] },
 { nombre: 'Lucía', proyectos: [ { nombre: 'A', meses: 8 },
 { nombre: 'C', meses: 5 },
 { nombre: 'D', meses: 10 }, ] },
 { nombre: 'María', proyectos: [ { nombre: 'B', meses: 6 },
 { nombre: 'C', meses: 9 },
 { nombre: 'F', meses: 14 }, ] } ]; */


const proyectos = [
    { nombre: 'Juan', proyectos: [{ nombre: 'A', meses: 12 }, { nombre: 'B', meses: 20 }] },
    { nombre: 'Lucía', proyectos: [{ nombre: 'A', meses: 8 }, { nombre: 'C', meses: 5 }, { nombre: 'D', meses: 10 }] },
    { nombre: 'María', proyectos: [{ nombre: 'B', meses: 6 }, { nombre: 'C', meses: 9 }, { nombre: 'F', meses: 14 }] }
  ];
  
/*   const resultado = proyectos.reduce((acc, trabajador) => {
    trabajador.proyectos.forEach(proyecto => {
      if (!acc[proyecto.nombre]) {
        acc[proyecto.nombre] = {
          nombre: proyecto.nombre,
          meses: 0,
          trabajadores: []
        };
      }

    });

  }, {}); */

  
  
/*   const resultado = proyectos.map(e => ({nombre: e.nombre, meses: e.meses, tr:nombre}))

 */ 
//{"A":[{nombre: "A", meses:12, tr:"Juan"},...], "B"}
const _tr = "";
const proyecto = [];
const resultado = proyectos.reduce((acc, elem) => [...acc,
    ...elem.proyectos.map(({nombre, meses}) => ({nombre, meses, tr:elem.nombre})) ], [])
/* const resultado = proyecto.map(({nombre, meses}) => ({nombre, meses, tr:_tr}))

 */console.log(resultado);