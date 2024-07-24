//Ticket Pricing: Write a program that takes a person's age as input and prints the ticket price based on the following criteria:

// Children (age < 12): $5
// Adults (age >= 12 && age < 65): $10
// Seniors (age >= 65): $7

const prompt=require('prompt-sync')({sigint:true})
let age=prompt("Enter  the age:")
if(age<=12)
{
    console.log("ticket price is $5");
}
else if(age>=65)
    {
        console.log("ticket price is $7");
    }
else if(age>=12 && age <65)
{
    console.log("ticket price is $10");
}