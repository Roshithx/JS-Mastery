//Write a program to generate the Fibonacci sequence up to a certain number of terms (entered by the user).
const prompt=require('prompt-sync')({sigint:true})
let num1=parseInt(prompt("Enter the Number:"))
if(num1<0){
    console.log("Enter a positive no");
}
else{
    fiboarray=[]
    let a=0
    let b=1

    for(i=0;i<=num1;i++)
    {
        fiboarray.push(a)
        nextterm=a+b
        a=b
        b=nextterm
    }
}
console.log(fiboarray.join(","));
