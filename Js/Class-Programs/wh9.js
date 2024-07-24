//w.a.p to print the pattern
//input    2       3         4             5
//logic    2+22  3+33+333   4+44+444+444   5+55+555+5555+55555
//output  24     369        4936           ?

const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = parseInt(input)// converting the string to number
i = 0
str = ""
sum = 0

while(i<=num){//0<4 1<4 2<4
    str += num  //""+4=4  4+4=44  44+4
    sum += Number(str) // 0+4  0+44 0+444
    i++ //1 2
}
console.log(`input: ${input}
output: ${sum}`);
    