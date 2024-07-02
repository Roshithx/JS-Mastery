//Program to print pattern
const prompt=require('prompt-sync')({sigint:true})

let n=prompt("enter the number")
let num=parseInt(n)
i=1
str=""
output=0
while(i<=num)
    {
        str=str+i
        output=str*num
        i++
    }
