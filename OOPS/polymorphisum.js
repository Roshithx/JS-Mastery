//Polymorphisum  -- there is no feature in js  

// function sum(num2,num2){
//     console.log("Addition of 2");
// }

// function sum(num2,num2,num3){
//     console.log("Addition of 3");
// }
// function sum(num2,num2,num3,num4){
//     console.log("Addition of 4");
// }

function sum(...arg){       //Rest operator used to combine rest of data to a single array
    console.log("Argumemt method");
    console.log(arg);
    output=arg.reduce((n1,n2)=>n1+n2)
    console.log(output);
}


sum(10,30)
