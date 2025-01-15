/* 
Ej. 38: Partiendo del array de participantes de un ejercicio anterior, obtén
un objeto que tenga como campos el nombre de cada equipo como y su
tiempo empleado como los valores de dichos campos.
Realízalo inicialmente sin tener en cuenta la bonificación por los primeros
puestos, y luego añade dicha bonificación
*/
let participantes = [
    {nombre: 'Alan', equipo: 'Kelme', min: 2, seg: 34},
    {nombre: 'Nikko', equipo: 'M+', min: 2, seg: 47},
    {nombre: 'Fran', equipo: 'Astana', min: 3, seg: 1},
    {nombre: 'Elan', equipo: 'Kelme', min: 3, seg: 12},
    {nombre: 'Kenny', equipo: 'Astana', min: 3, seg: 29},
    {nombre: 'Elche', equipo: 'M+', min: 3, seg: 29},
    
  ];

  const tiempoParticipantes = participantes.reduce( (acc, elem, i) => ({
    ...acc,
    [elem.equipo] : elem.min * 60 + elem.seg + (acc[elem.equipo] || 0) -( i < 3 ? (30 + i) * 10 : 0)
  }),
  {}
);

console.log(tiempoParticipantes);