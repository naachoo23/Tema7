const c = [3, -7, 28, 5];
const c2 = c.reduce( (acc,elem) => Math.min(acc,elem), c[0] );

console.log(c2);