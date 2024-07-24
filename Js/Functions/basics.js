
// function  add(num1,num2)
// {
//  sum=num1+num2
//  return sum
// }

// let add=(num1,num2)=>{
//     sum=num1+num2
//     return sum
// }
// console.log(add(30,40));

// // function cube(num){
// //     return num**3
// // }
// // console.log(cube(3)); 

// let cube=(num)=>{
//     return num**3
// }
// console.log(cube(4));
// function evenodd(num){
//    return num%2==0?"Even":"Odd"
// }
// console.log(evenodd(7));

//super subtraction

let fact=(num)=>{
    if(num==0){
        return 1
    }
  return  num * fact(num-1)
}
console.log(fact(4));
