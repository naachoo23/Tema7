/*
Ej. 34: Tenemos una lista de los participantes de una carrera, ordenada de
forma creciente según su tiempo en la carrera:
157
participantes = [{nombre: ‘Alan’ , equipo:’Kelme’ , min: 2, seg: 34},
{nombre: ‘Nikko’, equipo:’M+’ , min: 2, seg: 47},
{nombre: ‘Fran’ , equipo:’Astana’ , min: 3, seg: 1},
{nombre: ‘Elan’ , equipo:’Kelme’ , min: 3, seg: 12},
{nombre: ‘Kenny’, equipo:’Astana’ , min: 3, seg: 29},
{nombre: ‘Elche’, equipo:’M+’ , min: 3, seg: 29},
. . . ];
Debemos obtener los segundos totales empleados por el equipo Kelme . Hay
que tener en cuenta que los ganadores de la carrera son recompensados: 30
segundos de bonificación (30 segundos menos) para el primero, 20 para el
segundo y 10 para el tercero.
*/
let participantes = [
    {nombre: 'Alan', equipo: 'Kelme', min: 2, seg: 34},
    {nombre: 'Nikko', equipo: 'M+', min: 2, seg: 47},
    {nombre: 'Fran', equipo: 'Astana', min: 3, seg: 1},
    {nombre: 'Elan', equipo: 'Kelme', min: 3, seg: 12},
    {nombre: 'Kenny', equipo: 'Astana', min: 3, seg: 29},
    {nombre: 'Elche', equipo: 'M+', min: 3, seg: 29},
    
  ];

const segundos = participantes.reduce((acc, elem) => {
    if(elem.equipo == 'Kelme'){
        acc += (elem.equipo);
        acc+= (elem.seg*60);
    
        
    }
},0)
console.log(segundos);
  