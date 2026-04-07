const arr = [1,22,35,2,4,78];
const result = arr.map(num => num *2);
console.log(result);

const select  = arr.filter(num => num>10);
console.log(select);

const shrink = arr.reduce((total, sum) => total +sum , 0);
console.log(shrink);