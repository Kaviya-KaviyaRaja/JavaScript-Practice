function sumofarr(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum = sum+arr[i];
    }
    return sum;
}

console.log(sumofarr([5,10,15,20,25]));