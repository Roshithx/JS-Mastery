//w.a.p to find GCD/HCF of any 2 numbers

//GCD (12.6)=6
//12 = 1,2,3,4,6,12
//6 = 1,2,3,6


const prompt = require('prompt-sync')({sigint:true})
input1 = prompt("Enter first number: ")
num1 = Number(input1)// converting the string to numbeer
input2 = prompt("Enter second number: ")
num2 = Number(input2)// converting the string to numbeer

gcd = 1

if(num<num2){
    //smallest num1
    for(i=1;i<=num1;i++){
        if(num1%i==0 && num2%i==0){
            gcd = i
        }
    }
    console.log(`GCD(${num1},${num2}) = ${gcd}`)
}
else{
    for(i=1;i<=num2;i++){
        if(num1%i==0 && num2%i==0){
            gcd = i
        }
    }
    console.log(`GCD(${num1},${num2}) = ${gcd}`)

}
