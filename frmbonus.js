let words = ["apple", "banana", "kiwi", "grape", "watermelon"];
let result = words
        .filter(word => word.length >5)
        .map( word => word.toUpperCase() )
        .reduce((total, word)=> total+ word.length,0 );
        console.log(result);