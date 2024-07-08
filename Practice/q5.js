//wap prime or not
const prompt=require('prompt-sync')({sigint:true})
input=prompt("Enter the Number:")
num=Number(input)
isprime=true
for(i=2;i<=num/2;i++)
{
    if(num%i==0)
    {
        isprime=false
        break
    }
    else{
        isprime=true
    }
}
console.log(isprime?"Prime Number":"Not a prime"); 