//Write a program that determines if a given string is an anagram of another string.
const prompt = require('prompt-sync')({ sigint: true })
const string1 = prompt("Enter the first string : ")
const string2 = prompt("Enter the second string : ")
letters1 = string1.toLowerCase().split("")
letters2 = string2.toLowerCase().split("")
sort1 = letters1.sort().join('');
sort2 = letters2.sort().join('');
if (sort1 === sort2){
    console.log(`${string1} is anagram of ${string2}`);
}
else{
    console.log(`${string1} is not an anagram of ${string2}`);
}

