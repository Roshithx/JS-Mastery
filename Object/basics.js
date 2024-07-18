//[2,'lays',20,30] Array 

product={
    id:2,
    pName:"lays",
    price:20,
    stock:30
}

//Acessing values
console.log(product);
console.log(typeof(product));
console.log(`${product['pName']}`);
console.log(`${product.pName}`)


//Inserting Value to existing array
product.expiryDate="20-12-2024"
product.isExpired=false
//another way
product['Quality']=3.9
console.log(product);

//Check a key is available in a object
console.log(`${"price" in product}`);
console.log(`${product.hasOwnProperty("stock")}`);



//Object methods predefined

//insertion
Object.assign(product,{discount:false})
console.log(product);

//to display key of obj as array
console.log(Object.keys(product));

//to display value of obj as array
console.log(Object.values(product));

//to display one by one key value pair

for(let item in product){

    console.log(`${item}:${product[item]}`);
}

//update value
product.stock+=60
console.log(`new Price:${product.stock}`);
console.log(product);

//delete a key
delete product.discount
console.log(product);


