//5.	Write a program that takes a string and returns the number of vowels in it. 
const prompt=require('prompt-sync')({sigint:true})
let stringname=prompt("Enter the name")
vowelString="aeiouAEIOU"
vowel=0
for(i=0;i<=stringname.length;i++)
{
    if(vowelString.includes(stringname[i]))
    {
        vowel++
    }
}
console.log(vowel);
