//Write a program that simulates a basic calculator capable of performing addition, subtraction, multiplication, and division. The program should prompt the user to enter two numbers and an operator (+, -, *, /), then output the result of the operation.
const prompt=require('prompt-sync')({sigint:true})
let num1=parseInt(prompt("Enter the Number1:"))
let num2=parseInt(prompt("Enter the Number2:"))
let operator=prompt("Enter the operator:")
let result
if(operator==='+'){
    result=num1+num2
}
else if(operator==='-'){
    result=num1-num2
}
else if(operator==='*'){
    result=num1*num2
}
else if(operator==='/'){
    result=num1/num2
}
else{
    console.log("Invalid Operator");
}
console.log(`Result:${result}`);

