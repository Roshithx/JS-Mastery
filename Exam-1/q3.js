const prompt=require('prompt-sync')({sigint:true})
let numb=prompt("Enter the limit:")
sum=0
for(i=2;i<=numb/2;i++)
{
    if(numb%i==0)
    {
        sum+=i
        console.log(i);
    }

}


