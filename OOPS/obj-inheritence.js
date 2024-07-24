//Prototype Inheritence(object to object)
const car1={
    name:"Baleno",
    manifacture:"Maruthi",
    varients:["manual","AMT"],
    Rate:"11 Lakhs"

}

const car2={
    name:"Glanza",
    manifacture:"toyota",
    Rate:"14 lakhs"
}

//here the varient property is missing in car2 so we need inherit it from car1

 car2.__proto__=car1   // to herit the property of car1 use __proto__ 
 console.log(car2['varients']);



