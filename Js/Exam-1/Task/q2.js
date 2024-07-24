//Write a program that determines the season based on the month (spring, summer, monsoon, or winter).
const prompt=require('prompt-sync')({sigint:true})
let month=prompt("Enter the Month:")
month=month.toLowerCase();
if(month=="december" || month=="january" || month=="february"){
    console.log("Winter Season");
}
else if(month=="march" || month=="april" || month=="may"){
    console.log("Summer Season");
}
else if(month=="june" || month=="july" || month=="august"){
    console.log("Monsoon Season");
}
else if(month=="september" || month=="october" || month=="november"){
    console.log("Spring Season");
}
else{
    console.log("Invalid Month");
}