let str1 = "atta";
let str2 ="tata";

let isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');
console.log(isAnagram ? "Anagram" : "NotAnagram");