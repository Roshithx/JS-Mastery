//wap to print factorial of a no 

let factorial=(num)=>{
    if(num>=0)
    {
        if(num==0)
        {
            return 1
        }
        return num * factorial(num-1)
    }
    

   else{
        return ("+ve no only")
    }
}
console.log(factorial(10));