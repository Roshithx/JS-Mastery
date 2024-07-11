//4.	Write a program to find sum of an odd number in the range of 1 to 100. 

 const sumofodd=()=>{
    
    let sum=0
    for(i=1;i<=100;i++)
    {
        if(i%2!=0)
        {
            sum+=i
        }
    }
    return sum
 }
 console.log(sumofodd());
