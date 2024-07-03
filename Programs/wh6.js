//w.a.p to print factorial of a number, 4! = 4x3x2x1
const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = Number(input)
result = 1

while(num>0){
    result *= num
    num--
}
console.log(`Factorial of ${input} is ${result}`)







//w.a.p to check a 3 digit number is armstrong or not
//input = 123
//input == 1^3 + 2^3+ 3^3 => armstrong