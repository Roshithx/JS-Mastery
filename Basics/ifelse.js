//problem 1
const prompt=require('prompt-sync')({sigint:true})
// let n=prompt("enter a number:")  //if we enter a value through prompt-sync the value is converted into a string.
// console.log(n<10?n:"try with another number");


// //problem 2

// let personAge=prompt("enter the age")
// console.log(personAge<18?"minor not eligible":"major eligible");

// //problem 2
// let number=prompt("enter a no")
// console.log(number<0?"negative": number>0?"positive":"Zer0");

// //problem 3

// let num1=prompt("enter the first no")
// let num2=prompt("enter the second no")

// console.log(num1>num2?"first no is greater":num1==num2?"both are equal":"second no is greater");


//problem 4

let marks=prompt("enter the no")
console.log(marks%15==0?"yes 15":marks%3==0?"yes 3":marks%5==0?"yes 5": "no");

       

