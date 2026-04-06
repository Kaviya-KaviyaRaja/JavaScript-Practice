let name =  "Vijayalakshumi";
let vowels = "aeiouAEIOU";
let count = 0;

for(let i = 0; i<= name.length; i++){
    if(vowels.includes(name[i])){
        count++;
    }
}
console.log(count);