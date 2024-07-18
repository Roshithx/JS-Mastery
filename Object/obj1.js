var car ={
    name:"baleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//display car name and its manufacturer
console.log(`Car:${car['name']} , Manifacture:${car['manufacturer']}`);
//check 'model' key is present then display its value
if(`${"model" in car}`){
  console.log(`${car['model']}`);
}
//add 'varient' as automatic, manual   //multiple values assign to array
car['Varient']=["automatic","manual"]


//add hybrid to varient
car['Varient'].push("hybrid")

//add color as red,white,blue,ash,black
car['color']=["red","white","blue","black"]
console.log(car);

