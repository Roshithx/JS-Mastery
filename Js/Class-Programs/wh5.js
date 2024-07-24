//w.a.p to reverse a number
//input = 123
//output = 321

//123

const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = Number(input)
output = ""

while(num>0){
    let lastDigit= num % 10  //3
    output += lastDigit      //'3'
    num = Math.floor(num/10) //12
}
console.log(`Input = ${input}`)
console.log(`Output = ${output}`)
