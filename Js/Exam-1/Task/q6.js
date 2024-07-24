//Write a program to generate the Fibonacci sequence up to a certain number of terms (entered by the user).
const prompt=require('prompt-sync')({sigint:true})
let num=parseInt(prompt("Enter the number:"))
let isprime=true
let primecheck=(num)=>{
   if(num<=1){
      isprime=false
      return
   }
   
   for(i=2;i<=num/2;i++)
   {
      if(num%i==0){
         isprime=false
         break
      }
   }
}
primecheck(num)

console.log(isprime?"Prime no":"Not a prime");






