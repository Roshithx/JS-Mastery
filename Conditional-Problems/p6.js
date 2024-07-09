//Triangle Type: Write a program that takes three angles as input and determines if a triangle with those angles is acute, obtuse, or right-angled.
const prompt=require('prompt-sync')({sigint:true})
const angle1=prompt("Enter the Angle 1:")
const angle2=prompt("Enter the Angle 2:")
const angle3=prompt("Enter the Angle 3:")
if((angle1**2)+(angle2**2)<angle3**2)
{
  console.log("triangle is obtuse");
}
else if((angle1**2)+(angle2**2)<angle3**2)
    {
      console.log("triangle is obtuse");
    }
   else if((angle1**2)+(angle2**2)>angle3**2)
        {
          console.log("triangle is Acute");
        }
        else if((angle1**2)+(angle2**2)==angle3**2)
            {
              console.log("triangle is Right");
            }