//Write a program that takes three numbers as input and prints the largest number.
const prompt = require('prompt-sync')({sigint:true})
const num1 = prompt("Enter number1: ")
const num2 = prompt("Enter number2: ")
const num3 = prompt("Enter number3: ")
if(num1>num2 && num1>num3)
{
    console.log(`Largest is ${num}`);
}

else if(num2>num1 && num2>num3)
{
    console.log(`Largest is ${num2}`);
}
else if(num3>num1 && num3>num2)
{
    console.log(`Largest is ${num3}`);
}