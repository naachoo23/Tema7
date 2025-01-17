//con map


const num = [3, -1, 0, 4, 5, -3];
const a = num.map((elem, index, array) => array[array.length - 1 - index]);

console.log(a); 