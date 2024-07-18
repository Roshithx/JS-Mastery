//w.a.p to print the pattern
//input    2       3      4        5
//logic    12x2   123x3   1234x4   12345x5
//output  24     369     4936      ?


const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = parseInt(input)// converting the string to number
i = 1
str = "" //empty string for doing concatenation

while(i<=num){//1<=5 
    str += i  //str = ""+1=1 1+2=12
    i++//2
}
output = str*num
console.log(`input:${input}
output: ${output}`);

