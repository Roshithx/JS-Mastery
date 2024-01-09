//Primitive

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const mark=10
const grade=12.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);

const bigNumber = 3423546363456345624626n


//Reference (Non Primitive)

//Array,Object,Functions


const heros =["superman","batman","roshi"]
let myObj=
{
    name:"peter",
    age:22,
}

const myfunc=function(){
    console.log("helo world");
}

// //4. If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint".