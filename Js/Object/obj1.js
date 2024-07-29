var car ={
    name:"baleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//display car name and its manufacturer
 console.log(`Car Name:${car['name']}`);
 console.log(`Manifacture:${car['manufacturer']}`);

//check 'model' key is present then display its value
 console.log(car.hasOwnProperty("model"));
//add 'varient' as automatic, manual
 car['varient']=['Amt','Manual']
 car['varient'].push("Hybrid")

//add color as red,white,blue,ash,black
car['color']=['red','white','blue','ash','black']
console.log(car);