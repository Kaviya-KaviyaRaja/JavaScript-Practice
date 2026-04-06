let sentence = "I want to become a JAVA Developer";
let words = sentence.split(' ');
let longest = "";

for(let word of words){
    if(word.length > longest.length){
        longest =  word;
    }

}
console.log("Longest word is :", longest);
