const prompt = require('prompt-sync')({sigint:true})
const year = prompt("Enter the year: ")
if(year%4===0 && year%100!=0 || year%400===0)
{
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}