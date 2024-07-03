//w.a.p to check a 3 digit number is armstrong or not
//input = 123
//input == 1^3 + 2^3+ 3^3 => armstrong

const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = Number(input)
sum = 0

while(num>0){
    let lastDigit = num%10
    sum += lastDigit**3
    num = Math.floor(num/10)
}

console.log(input==sum?"ARMSTRONG": "NOT A ARMSTRONG");

//w.a.p to print the pattern
//input    2       3      4        5
 
//output  24     369     4936      ?