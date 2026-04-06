let num = 29;

let isPrime = true;

if( num <= 1){
    isPrime = false;
}
else{
    for(let i =2; i<= Math.sqrt(num); i++){
        if(num % i == 0){
            isPrime = false;
        }
    }
}
console.log(isPrime? "Prime" : "NotPrime");