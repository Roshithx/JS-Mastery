//Write a program that checks whether a given number is a prime number.
const prompt=require('prompt-sync')({sigint:true})
let num=prompt("enter a no:")
isprime=false
for(i=2;i<=num/2;i++)
{
   if(num%i==0)
   {
     isprime=false
     break
   }
   else{
    isprime=true
   }
}
console.log(isprime?"No is prime":"Npt");