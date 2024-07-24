//Number Range: Write a program that takes an integer input and prints whether the number falls within a specified range, such as between 1 and 100.
const prompt=require('prompt-sync')({sigint:true})
const number=prompt("Enter the Number")
if(number>=1 && number<=100)
{
    console.log("The no is in range");
}
else{
    console.log("Not in range");
}