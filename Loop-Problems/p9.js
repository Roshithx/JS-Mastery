//reverse a no
const prompt=require('prompt-sync')({sigint:true})
let reverseno=prompt("Enter the no:")
string=""

while(reverseno>0){
    lastdigit=reverseno%10
    string+=lastdigit
    reverseno=Math.floor((reverseno/10
    ))
}
console.log(string);