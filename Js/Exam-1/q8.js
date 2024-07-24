const prompt = require('prompt-sync')({sigint: true});
const isPrime = (num)=> {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const sumOfPrimes = (limit) => {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
};
let limit = parseInt(prompt("Enter the limit:"));
let sum = sumOfPrimes(limit);
console.log(`Sum of prime numbers up to ${limit} is: ${sum}`);
