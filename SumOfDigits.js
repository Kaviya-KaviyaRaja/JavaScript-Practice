let nums = 12345;

let sum = 0;
 while( nums > 0){
    let digit = nums % 10;
    sum = sum + digit;
    nums = Math.floor(nums/10);
 }
console.log(sum);