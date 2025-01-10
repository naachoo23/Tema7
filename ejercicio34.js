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

const segundos = participantes.reduce((acc, elem, i) => {
   
     elem.equipo = "Kelme" ? acc + elem.min * 60 + elem.seg - (i < 3 ? 20 -i * 10 : 0 ): acc;
        
    if(i ==  0){
        acc = elem.seg - 20;
    }

    }
,0)
console.log(segundos);
  

//segunda forma
/*
const rstl = participantes.map((elem, i) => ({seg:elem.min * 60 + elem.seg - i < 3 ? 30 + i * 10 : 0, equipo = e.equipo})).filter(
e => e.equipo == "Kelme").reduce((acc, elem) => acc + elem.seg , 0)
*/