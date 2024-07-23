//Write a program to generate the Fibonacci sequence up to a specified limit and then calculate the sum of all even numbers in the sequence.
const prompt=require('prompt-sync')({sigint:true})
let limit=parseInt(prompt("Enter the limit:"))
if(limit<0)
{
    console.log("Enter +ve no");
}
else{
fiboarray=[]
let a=0
let b=1
for(i=0;i<=limit;i++){
     fiboarray.push(a)
    nextterm=a+b
    a=b
    b=nextterm
}
sum=0
for(i=0;i<=fiboarray.length-1;i++)
{
    if(fiboarray[i]%2==0)
    {
        sum+=fiboarray[i]

    }
}
}
console.log(fiboarray.join(","));
console.log(sum);


