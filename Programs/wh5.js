//w.a.p to reverse a number
//input = 123
//output = 321

//123

const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = Number(input)
output = ""

while(num>0){
    let lastDigit= num % 10
    output += lastDigit
    num = Math.floor(num/10)
}
console.log(`Input = ${input}`)
console.log(`Output = ${output}`)

//w.a.p to chrck a number is pallindrome or not
console.log(input==output?"PALLINDROME": "NOT A PALLINDROME");