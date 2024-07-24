//Password Strength Checker: Write a program that takes a password as input and checks its strength based on the following criteria:
// Weak: Less than 6 characters
// Medium: 6 to 10 characters

const prompt=require('prompt-sync')({sigint:true})
let password=prompt("Enter the password:")
if(password.length<6)
{
    console.log("Weak Password");
}
else if(password.length>6 && password.length<10)
{
    console.log("Medium Password");
}