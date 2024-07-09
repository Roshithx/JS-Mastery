// w.a.p to check a number is below 10 then print the number
//import package
const prompt = require('prompt-sync')({sigint:true})

// const num = prompt("Enter any number: ")
// console.log(num,typeof num);
// if(num<10){
//     console.log(num);
// }else{
//     console.log("Try with other number")
// }

//w.a.p to check a person is eligible for voting
// if(num>=18){
//     console.log("Eligible for voting")
// }
// else{
//     console.log("Not Eligible for voting")
// }

//w.a.p to check a number is positive or not
// if(num>0){
//     console.log("Positive Number")
// }
// else if(num<0){
//     console.log("Negative number")
// }
// else{
//     console.log("Zero")
// }

//w.a.p to print largest among two numbers

const num1 = prompt("Enter any number: ")
const num2 = prompt("Enter any number: ")
if(num1>num2){
    console.log(num1 + " is the largest number")
}
else if(num1<num2){
    console.log(num2 + " is the largest number")
}
else{
    console.log("Both are equal!!")
}
