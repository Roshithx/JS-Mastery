//w.a.p to print factorial of a given number

const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = Number(input)
fact=1
for(i=1;i<=num;i++){
    fact *= i
}
console.log(`Factorial of ${input} is ${fact}`);