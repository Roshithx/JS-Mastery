//6.	Write a code snippet to check if a number is within the range of 5 to 15. Print "Within Range" or "Out of Range".

const prompt=require('prompt-sync')({sigint:true})
let number=prompt("enter the range")

    if(number<=15 && number>=5)
    {
         console.log("Number is in range");
    }
    else{
        console.log("Not in range");
    }