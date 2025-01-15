//El ejemplo de generando arrays pero sin usar llaves si push ni return

const nums = [3, -1, 0, 4, 5, -3];
const r = nums.reduce((a,e) => a.concat(e), []);
console.log(r);

/* 
const nums = [3, -1, 0, 4, 5, -3];
const r = nums.reduce((a,e) => [...acc,e], []);
console.log(r);
*/