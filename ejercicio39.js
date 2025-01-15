const nums = [3, -1, 0, 4, 5, -3];
const resultado = nums.reduce((acc,e) =>  (e > 0 ? [...acc, e] : acc), []);
console.log(resultado);
