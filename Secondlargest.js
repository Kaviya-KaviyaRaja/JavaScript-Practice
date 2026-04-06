let arr = [23,6,87,1,4];
let largest = -Infinity;
let secondlargest = -Infinity;

for(let num of arr){
    if(num>largest){
        secondlargest = largest;
        largest = num;
    }
        else if(num > secondlargest && num != largest){
    secondlargest = num;
        }
    
}
console.log("Second Largest: ", secondlargest);