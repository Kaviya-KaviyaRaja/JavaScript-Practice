let num = 15;
let a = 1,  b = 2;

for(let  i = 1; i<= num; i++){
    console.log(a);
    let next = a+b;
    a = b;
    b  = next;
}
