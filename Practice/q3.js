const prompt=require('prompt-sync')({sigint:true})
input=prompt("Enter the Number:")
num=Number(input)
sum=0

while(num>0)
{
let lastdigit=num%10
sum+=lastdigit**3
num=Math.floor(num/10)
}

console.log( input==sum?"Armstrong":"Not");

