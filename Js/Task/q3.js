//Write a program that determines if a given year is a century year and a leap year.
const prompt=require('prompt-sync')({sigint:true})
let year=prompt("Enter the Year:")
if(year%100==0)
{
    console.log("Century Year");
}
else if(year%4==0 || year%400==0 && year%100!=0){
    console.log("Leap Year");
}
else{
    console.log(" Regular year");
}
