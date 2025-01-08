const n = [3, 7, 2];

const n2 = n.reduce( (acc, elem) => acc * elem , 1);

/*
let acc = 1;
for (let i = 0; i < n.lenght ; i++){
    acc = acc * elem;
}
*/
console.log(n2);