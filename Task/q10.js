//  Write a function to find the sum of all prime numbers up to a given number.
const prompt = require('prompt-sync')({ sigint: true });
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const sumOfPrimes = (limit) => {
    let sum = 0;
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
};

let limit = parseInt(prompt("Enter the limit: "));
let sum = sumOfPrimes(limit);
console.log("Sum of all prime numbers up to " + limit + " is: " + sum);

