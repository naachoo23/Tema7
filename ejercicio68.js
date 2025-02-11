/* 
Ej. 68: Tenemos un array de cadenas con los partidos disputados en los play
offs de la última Super Bowl:
const superbowl = [ "Eagles 24 - 31 Chiefs", "Chiefs 0 - bye 0", "Texans
14 - 12 Chargers", "Chiefs 23 - 14 Texans", "Bills 29 - 32 Chiefs",
"Eagles 28 - 22 Rams", "Commanders 45 - 31 Lions", "Eagles 55 - 23
Commanders", "Chiefs 32 - 29 Bills"];
Obtén un objeto que obtenga la ronda en a la que cada equipo llegó tal como
{“Bills”: 4, ...} (observa que, quien quedara en 1ª ronda tan solo tendrá un
partido, y así sucesivamente).
*/
const superbowl = [
    "Eagles 24 - 31 Chiefs", 
    "Chiefs - bye", 
    "Texans 14 - 12 Chargers",
    "Chiefs 23 - 14 Texans", 
    "Bills 29 - 32 Chiefs",
    "Eagles 28 - 22 Rams", 
    "Commanders 45 - 31 Lions", 
    "Eagles 55 - 23 Commanders", 
    "Chiefs 32 - 29 Bills"
];

/* const resultado = superbowl.reduce((acc, elem) => {
    const equipos = elem.match(/[A-Za-z]+/g) || [];

    if (equipos.length > 0) acc[equipos[0]] = (acc[equipos[0]] || 0) + 1;
    if (equipos.length > 1) acc[equipos[1]] = (acc[equipos[1]] || 0) + 1;

    return acc;
}, {}); */


/* const rondas = superbowl.reduce((acc, elem)=>{
    const equipos = elem.split(/\d+ - \d+ /);
    return{...acc, [equipos[0]] : (acc[equipos[0]] || 0) + 1, 
         [equipos[1]] : (acc[equipos[1]] || 0) + 1
    }
},{}) */


//con map

const rondas = superbowl.map(e => e.split(/|d+ - \d+ /)).reduce((acc, e) => ({ ...acc, [e[0]]: 
    (acc[e[0]] || 0) + 1,[e[1]]: (acc[e[1]] || 0) + 1}),{})


console.log(rondas);
 