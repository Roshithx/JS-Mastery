numArray=[10,22,12,13,67,89,56]

//print even no
// numArray.forEach((item)=>{
//     if(item%2==0)
//     {
//         // console.log(item);
//     }
// })

evenNum=numArray.filter((item)=>item%2==0)
console.log(evenNum);

//print all no greater than 30

// numArray.forEach((item)=>{
//     if(item>30)
//     {
//         console.log(item);
//     }
// })\

newARRAY=numArray.filter((item)=>item>30)
console.log(newARRAY);

