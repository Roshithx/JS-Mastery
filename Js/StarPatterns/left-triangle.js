//print the pattern
 //  *
 //  * *
 //  * * *
 //  * * * *


let string=""
for(i=1;i<=5;i++)  // i for rows
{
    for(j=1;j<=i;j++)  // j for col
        {
            string+="*"  //concating together
        }
        string+="\n"
}
console.log(string);


//print the pattern
 //  1
 //  2 2
 //  3 3 3
 //  4 4 4 4


let strings=""
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
        {
            strings+=i+""
        }
        strings+="\n"
}
console.log(strings);


//print the pattern
 //  1
 //  1 2
 //  1 2 3
 //  1 2 3 4


let stringz=""
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
        {
            stringz+=j+""
        }
        stringz+="\n"
}
console.log(stringz);