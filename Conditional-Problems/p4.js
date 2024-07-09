//Leap Year Checker: //Write a program that takes a year as input and determines if it is a leap year. A leap year is either divisible by 400 or divisible by 4 but not by 100.

const prompt = require('prompt-sync')({sigint:true})
const year = prompt("Enter the year: ")
if(year%4==0 && year%100!=0 || year%400==0)
{
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}
