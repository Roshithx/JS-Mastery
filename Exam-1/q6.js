const prompt = require('prompt-sync')({sigint: true});
let num1 = parseFloat(prompt("Enter the num1:"));
let num2 = parseFloat(prompt("Enter the num2:"));
let operator = prompt("Enter the operator(+, -, *, /):");
let result;
if (operator === '+') {
    result = num1 + num2;
} 
else if (operator === '-') {
    result = num1 - num2;
} 
else if (operator === '*') {
    result = num1 * num2;
}
 else if (operator === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "zero division";
    }
} else {
    result = "Invalid operator given";
}
console.log(`Result:${result}`);
