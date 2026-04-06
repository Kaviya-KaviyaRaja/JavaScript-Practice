let name  = "DaD";
let reversed ="";
let original = name;

for(let i= name.length-1; i>=0; i--){
    reversed= reversed+ name[i];
}
console.log(original == reversed? "Correct" : "Wrong");