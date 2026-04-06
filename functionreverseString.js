// function reverseString(name){
//     return name.split('').reverse().join('');
// }
// let name  = "kaviyaraja";
// let reverse = reverseString(name);

// console.log("Before  Reverse:", name);
// console.log("After Reverse:", reverse);


function revstr(name){
    let rev = "";
    for(let i=name.length-1; i>=0; i--){
        rev = rev+name[i];
    }
    return rev;
}
console.log(revstr("DharaniVijayalakshmi"));