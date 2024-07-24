//wap to reverse a number.
const prompt=require('prompt-sync')({sigint:true})
input=prompt("Enter the Number:")
num=Number(input)

result=""
while(num>0)
{
    let lastdigit=num%10
    result+=lastdigit
    num=Math.floor(num/10)

}
console.log(result);