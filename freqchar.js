let name = "information";
let freq ={};

for(let char of name){
    freq[char] = freq[char]? freq[char]+1 : 1;
}
console.log(freq);