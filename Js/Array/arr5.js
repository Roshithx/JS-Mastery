
//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name

console.log('ProductName:');
products.forEach((n1)=>{
    console.log(n1[1]);
})
//2. display product whose price < Rs.50

console.log('Product whose price < Rs.50');
NewProducts=products.filter((n1)=>n1[2]<50)
console.log(NewProducts);

//3. print price of oreo

console.log(' price of oreo');
NwP=products.find((item)=>item[1]=="oreo")
console.log(NwP[2]);

//4. print costly product name

console.log('costly product name');
HighCost=products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(HighCost[1]);


//5. display out of stock product
console.log('out of stock product');
Out=products.filter((n1)=>n1[3]==0)
console.log(Out);


//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order');
SortProducts=products.sort((a,b)=>b[3]-a[3])
console.log(SortProducts);

//7. print product having maximum available stock
console.log('maximum available stock');
MaxStock=products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
console.log(MaxStock);

//8. is there any product can be purchased by Rs. 10
console.log(`${products.some((n1)=>n1[2]<=10)?"Yes":"No Products"}`);
//9. Is there any product in the range of 10 to 30
console.log(`${products.some((n1)=>n1[2]>=10 && n1[2]<=30)?"YES AVAILABLE":"NO PRODUCTS"}`);

//10. print all products in the range of 10 to 30
console.log('print all products in the range of 10 to 30');

products.filter((n1)=>n1[2]>=10 && n1[2]<=30).forEach((n1=>console.log(n1[1])))
