//Write a program that calculates the factorial of a given number.

const prompt=require('prompt-sync')({sigint:true})
let num=prompt("enter a no:")
fact=1
for(i=1;i<=num;i++)
{
 fact*=i
}
console.log(`Factorial: ${fact} `);