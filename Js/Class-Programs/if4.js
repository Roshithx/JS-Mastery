//w.a.p to input 3 unique numbers and print its second largest number and all 3 numbers in ascending order using conditional statemebts
const prompt = require('prompt-sync')({sigint:true})

const num1 = 15
const num2 = 24
const num3 = 48

if(num1>num2 && num1>num3){
    console.log("largest num1");
    if(num2>num3){
        console.log("Second largest num2");
        console.log(`Sorted order: ${num3},${num2},${num1}`);
    }
    else{
        console.log(`Second largest num3`);
        console.log(`Sorted order: ${num2},${num3},${num1}`);
    }
}
else if(num2>num1 && num2>num3){
    console.log("largest num2");
    if(num1>num3){
        console.log("Second largest num1");
        console.log(`Sorted order: ${num3},${num1},${num2}`);
    }
    else{
        console.log(`Second largest num3`);
        console.log(`Sorted order: ${num1},${num3},${num2}`);
    }
}
else if(num3>num2 && num3>num1){
    console.log("largest num3");
    if(num2>num1){
        console.log("Second largest num2");
        console.log(`Sorted order: ${num1},${num2},${num3}`);
    }
    else{
        console.log(`Second largest num1`);
        console.log(`Sorted order: ${num2},${num1},${num3}`);
    }
}



