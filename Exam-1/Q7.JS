// const prompts = require('prompt-sync')({sigint: true});
// let num = (prompts("Enter the num:"));
// console.log(num.length);




const prompt = require('prompt-sync')({sigint: true});
let number = parseInt(prompt("Enter a number:"));
count = 0;
if (number < 0) 
{
    number = -number;
}
while (number >= 1) {
    number = Math.floor(number / 10);
    count++;
}
console.log(`No of digits:${count}`);