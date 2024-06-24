const prompt=require('prompt-sync')({sigint:true})
let n=prompt("enter a number:")  //if we enter a value through prompt-sync the value is converted into a string.
if(n<10)
    {
        console.log(n);
    }