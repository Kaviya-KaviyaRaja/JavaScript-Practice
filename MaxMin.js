let arr = [3,78,22,2];
let  max = arr[0];
let min = arr[0];

for(let  i = 1; i<= arr.length; i++){
    if(arr[i] > max ) max = arr[i];
    if(arr[i]< min ) min = arr[i];
}
console.log("Max: ",max, "Min: ",min);