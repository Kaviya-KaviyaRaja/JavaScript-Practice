function fact(num){
    let factorial = 1;

    for(let i=1; i<=num; i++){
        factorial = factorial*i;
    }
    return factorial;
}
// let number = 5;
console.log("Factorial of this number is", fact(10));