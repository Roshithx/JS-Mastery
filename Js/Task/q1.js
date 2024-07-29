//Write a program that determines the type of a triangle based on the lengths of its sides (equilateral, isosceles, scalene, or not a triangle).
let prompt=require('prompt-sync')({sigint:true})
let length1= parseInt(prompt(("Enter the side1:"))) 
let length2= parseInt(prompt(("Enter the side2:"))) 
let length3= parseInt(prompt(("Enter the side3:"))) 
if(length1===length2 && length2 ===length3){
    console.log("Triangle is Equilateral");
}
else if(length1==length2 || length2==length3 || length1==length3 ){
    console.log("Triangle is isosceles");
}
else{
    console.log("Triangle is scalene");
}
