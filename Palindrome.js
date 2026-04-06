let a = 12301;
let original = a;
let rev = 0;

while( a > 0){
    let digit = a % 10;
    rev = rev * 10 + digit;
    a = Math.floor( a/10);
}
 if(original == rev){
    console.log("It is Palindrome");
 }
 else{
    console.log("It is not a Palindrome");
 }