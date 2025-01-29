/*
Ej. 46: Obtén el nombre de los alumnos y su nota media, que pueden hacer
la FCT. Para hacer dicha FCT, un alumno debe de aprobar cada una de las
asignaturas y, para aprobar una asignatura concreta, la nota media entre el
trimestre 1 y el 2 debe ser mayor o igual a 5 (en el array propuesto, solo
aprueba Sofía):
const estudiantes = [
 { nombre: 'Ana', t1: [3, 9, 10], t2: [1, 5, 7] },
 { nombre: 'Luis', t1: [6, 2, 5], t2: [6, 5, 6] },
 { nombre: 'Sofía', t1: [9, 8, 10], t2: [1, 5, 1] },
];
El código debe ser válido para escenarios donde el número de asignaturas sea
distinto a 3. Puedes usar un reduce y, dentro de éste, otro reduce para
fusionar el t1 y el t2 a una nota media. También es posible con un map
(con un reduce dentro) y luego un filter, pero en este caso hay que establecer
como 0 la nota media si cualquier asignatura está suspensa, aunque la nota
media sea mayor que 5.
*/
const estudiantes = [
    { nombre: 'Ana', t1: [3, 9, 10], t2: [1, 5, 7] },
    { nombre: 'Luis', t1: [6, 2, 5], t2: [6, 5, 6] },
    { nombre: 'Sofía', t1: [9, 8, 10], t2: [1, 5, 1] },
  ];
/* const media = t1.reduce( ( acc, elem, i) => acc + (elem + t2[i]) /2, 0)/3;
 *///solucion con map
 const b = estudiantes
 .map(elem => ({
   nombre: elem.nombre, 
   fct: (elem.t1[0] + elem.t2[0] >= 10) && 
        (elem.t1[1] + elem.t2[1] >= 10) && 
        (elem.t1[2] + elem.t2[2] >= 10),
   media: elem.t1.reduce((acc, nota, i) => acc + (nota + elem.t2[i]) / 2, 0) / 3
 }))
 .filter(elem => elem.fct);

  //fct: elem.t1.every((n,i)=>n.elem.t2[i]>=0)?elem.t1.reduce((acc,nota,i)=>acc + (nota+elem.t2[i])/2,0)/3:9;
                                      //(({fct}) => fct)

console.log(b);
