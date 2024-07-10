//Write a program that takes a string as input and prints the reversed string.
const prompt=require('prompt-sync')({sigint:true})
let name=prompt("enter a name:")
reverse=''
for(i=name.length-1;i>=0;i--)
{
    reverse+=name[i]
}
console.log(reverse);


