const score=400
console.log(score);


const balance=new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

const amount=new Number(2000.50)
console.log(amount.toFixed(1))

const cash=23.8966
console.log(cash.toPrecision(2));

const debt=1000000
console.log(debt.toLocaleString('en-IN'));


//***************************MATHS******************************* */

console.log(Math);
console.log(Math.abs(-4))  //To change the negative to +ve value only

console.log(Math.round(5.8)); // To round of number

console.log(Math.ceil(4.2)); // round value to upper only

console.log(Math.floor(4.2)); // round value to lower only

console.log(Math.max(4,2)); // to find the large no

console.log(Math.min(4,2,6));  // to find small no

console.log(Math.random());    // random no btw 0 and 1

console.log(Math.floor(Math.random()*10)+1);

const minvalue=10
const maxvalue=50

console.log(Math.floor(Math.random() * (maxvalue - minvalue + 1)) + minvalue)
