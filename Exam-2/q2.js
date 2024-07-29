// Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.  

miles=[200,300,400,500]

// let findKilo=()=>{
//     let kilometer=miles.map((n1)=>n1*1.6)
//      console.log(kilometer);
//     return kilometer
// }
// findKilo()

let func=()=>{
   let totalDistanceInKilometers=miles.map((num1)=>num1*1.6).reduce((n1,n2)=>(n1+n2))
   console.log(totalDistanceInKilometers);
}
func()



