const prompt=require('prompt-sync')({sigint:true})
const Side1=prompt("Enter the Side 1:")
const Side2=prompt("Enter the Side 2:")
const Side3=prompt("Enter the Side 3:")
if (Side1 === Side2 && Side2 === Side3) {
    console.log(" triangle is equilateral.");
} 
else if (Side1==Side3 || Side2==Side3 || Side1==Side2) {
    console.log("triangle is isosceles.");
} 
else if(Side1!=Side2 || Side1!=Side3 || Side2!=Side3 ) {
    console.log(" triangle is scalene.");
}