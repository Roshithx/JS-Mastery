//print the given pattern

// * * * *
// * * * *
// * * * *

const star=()=>{
let string=""
    for(i=1;i<=4;i++)
    {
        for(j=1;j<=4;j++)
        {
           string+="*"
        }
         string+="\n"
    }
    return string
}
console.log(star());
   