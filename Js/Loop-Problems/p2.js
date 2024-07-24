//Write a program that calculates the sum of the first N natural numbers, where N is provided by the user.

const prompt=require('prompt-sync')({sigint:true})
let num=prompt("enter a no:")
sum=0
for(i=1;i<=num;i++)
{
    sum+=i
}
console.log(`Result:${sum}`)