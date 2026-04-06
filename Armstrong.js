let num =  351 ;
let sum = 0;
let digits = num.toString().length;
let temp = num;

while(num > 0){
    let digit = num % 10;
    sum  = sum + Math.pow(digit,digits);
    num = Math.floor(num/10);
}
console.log(temp == sum ? "Armstrong" : "NotArmstrong");