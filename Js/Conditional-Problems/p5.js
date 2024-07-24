//Positive, Negative, or Zero: Write a program that takes an integer input and prints whether it is positive, negative, or zero.
const prompt = require('prompt-sync')({sigint:true})
const num1 = prompt("Enter number: ")
if(num1>0)
{
    console.log("+ve num");
}
else if(num1<0)
{
    console.log("-ve num");
}
else if(num1==0){
  console.log("No is zero");
}