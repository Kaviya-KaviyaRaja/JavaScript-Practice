//filter function 
// let arr = [5,10,15,20,25,30];
// let result = arr.filter(num => num > 10);
// console.log("The numbers greater than 10 is: ", result);

//map function
// let arr = [5,10,15,20,25,30];
// let result = arr.map(num => num*2);
// console.log("The array square is: ", result);

//reduce function
let arr = [5,10,15,20,25,30];
let result = arr.reduce((acc,curr) => acc+curr,0);
console.log("total sum: ", result);
