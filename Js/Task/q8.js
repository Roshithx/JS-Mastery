//Write a program to find all prime numbers between two given numbers (entered by the user).
const prompt = require('prompt-sync')({ sigint: true });
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let start = Math.min(num1, num2);
let end = Math.max(num1, num2);
console.log(`Prime numbers between ${start} and ${end} are:`);
for (let num = start; num <= end; num++) {
    if (num <= 1) continue; 
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
