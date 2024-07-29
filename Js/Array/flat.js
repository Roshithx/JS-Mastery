numarr=[
    [10,20],
    [23,45],
    [56,78],
    [89,90]
]

//print number<50
flatArr=numarr.flat(2-1)
ResultArr=flatArr.filter((n1)=>n1<50)
console.log(ResultArr);

//print highest
flatArr1=numarr.flat(Infinity)
ResultA=flatArr1.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(ResultA);

//print square of each square
flatArr1=numarr.flat(Infinity)
Sqr=flatArr1.map((n1)=>n1**2)
console.log(Sqr);