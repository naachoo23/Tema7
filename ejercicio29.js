const palabra = ['hola', 'que', 'tal'];

const palabra2 = palabra.reduce( (acc, elem, i)  => acc + elem);

/*
let acc = "";
for(let i = 0; i < palabra.lenght; i++){
 acc = acc + palabra[i];
}
*/
console.log(palabra2);