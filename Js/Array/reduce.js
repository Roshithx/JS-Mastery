numArray=[2,3,4,5,6]

//sum of element
let result =numArray.reduce((sum,n1)=>sum+n1)
console.log(result);

//highest
let highest =numArray.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);

//lowest
let lowest =numArray.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);