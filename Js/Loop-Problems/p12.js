const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
string=""
sum=0
while(input>0)
{
    lastdigit=input%10 //3 2 
    sum+=lastdigit**3  //3^3 + 
    input=Math.floor(input/10)
}
console.log(sum);