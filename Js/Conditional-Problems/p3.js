//Grade Calculator: Write a program that takes a numerical grade input (0-100) and prints the corresponding letter grade based on the following criteria:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
const prompt = require('prompt-sync')({sigint:true})
const mark = prompt("Enter the mark: ")
             if(mark>=90 && mark<=100)
             {
                console.log("GRADE A");
              
             }

    
            else if(mark>=80 && mark<89)
             {
                console.log("GRADE B");
             }

   
           else  if(mark>70 && mark<79)
             {
                console.log("GRADE C");
             
             } 
    
           else if(mark>60 && mark<69)
             {
                console.log("GRADE D");
             }
  
           else if(mark<60)
             {
                console.log("Failed");
             }
    
           else if(mark>100)
             {
                console.log("data dont exist");
             }


