//wap to print this pattern
//input  2  3  4  5
//output 24 
const prompt=require('prompt-sync')({sigint:true})
input=prompt("Enter the Number:")
num=Number(input)

i=1
str=""
output=0
while(i<num){
    str+=i
    output=str*num
    i++


}
console.log(output);
 
