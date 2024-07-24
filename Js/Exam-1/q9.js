const prompt = require('prompt-sync')({sigint: true});
let side1 = parseFloat(prompt("Enter side 1:"));
let side2 = parseFloat(prompt("Enter side 2:"));
let side3 = parseFloat(prompt("Enter side 3:"));

    if (side1 === side2 && side2 === side3) 
        {
        console.log("Triangle is equilateral.");
       }
     else if (side1 === side2 || side1 === side3 || side2 === side3)
         {
        console.log("Triangle is isosceles.");
        } 
    else {
        console.log("Triangle is scalene.");
    }
