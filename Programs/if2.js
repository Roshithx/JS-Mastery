//w.a.p to print 'fizz' if a number is completely divisible by 3
const prompt = require('prompt-sync')({sigint:true})
const num = prompt("Enter any number: ")
// if(num%15==0){
//     console.log("FizzBuzz")
// }
// else if(num%3==0){
//     console.log("Fizz")
// }
// else if(num%5==0){
//     console.log("Buzz")
// }
// else{
//     console.log("Try with another number!!!")
// }

console.log(num%15==0?'fizzbuzz':num%3==0?'Fizz':num%5==0?"Buzz":"Try with another number!!!")

//print 'buzz' if a number is completely divisible by 5
//print 'fizzbuzz' if a number is completely divisible by 15