const prompt=require('prompt-sync')({sigint:true})
let num1=prompt("enter the number1")
let num2=prompt("enter the number2")
let num3=prompt("enter the number3")


if(num1>num2 && num1>num3)
{
    console.log(num1)
}
else if(num2>num1 && num2>num3)
{
    console.log(num2)
}
else
{
    console.log(num3)
}