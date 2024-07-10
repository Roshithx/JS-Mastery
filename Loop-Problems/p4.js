//Write a program that prints the multiplication table of a given number.
const prompt=require('prompt-sync')({sigint:true})
let num=prompt("enter a no:")
mul=1
for(i=1;i<=10;i++)
{
   console.log(`${num}* ${i} = ${num * i}`);
}
