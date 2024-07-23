class Product{

     constructor(id,name,price,stock){
        this.productid=id
        this.productName=name
        this.productPrice=price
        this.productStock=stock
     }
     printproduct(){
        console.log(`
            ID:${this.productid}
            PRODUCT NAME:${this.productName}
            PRODUCT RATE:${this.productPrice}
            PRODUCT STOCK:${this.productStock}
            `);
     }
}
const obj1=new Product(101,"Parly-G",200,1800)
obj1.printproduct()