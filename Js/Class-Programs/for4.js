//w.a.p to check a number is prime or not





const prompt = require('prompt-sync')({sigint:true})
input = prompt("Enter any number: ")
num = Number(input)// converting the string to numbeer
isPrime = true

for(i=2;i<=num/2;i++){
    if(num%i==0){
        // console.log("NOT A PRIME");
        isPrime =  false
        break
    }
    else{
        isPrime = true
        // console.log("PRIME");
    }
}
console.log(isPrime?"PRIME":"NOT A PRIME");



//w.a.p to find GCD/HCF of any 2 numbers