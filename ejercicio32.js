const t1 = [3, 9 ,10];
const t2 = [1, 5, 7];

const media = t1.reduce( ( acc, elem, i) => acc + (elem + t2[i]) /2, 0)/3;
console.log(media);