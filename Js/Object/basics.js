product={
    id:2,
    pName:"Oreo",
    price:20,
    Stock:100

}
console.log(product);
console.log(`Product Name:${product["pName"]}`);

product["ExpiryDate"]="02-05-2020"
Object.assign(product,{discount:"50%"})
console.log(product);


console.log(product.hasOwnProperty("price"));

console.log(Object.keys(product)); 
console.log(Object.values(product)); 


for(let key in product){
    console.log(`${key}: ${product[key]}`);
}

console.log(product['price']+=30); 

delete product.discount
console.log(product);
