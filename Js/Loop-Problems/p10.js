const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
fact=1
while(input>0)
{
    fact*=input
    input--
}
console.log(fact);