
//Classical Inheritence
class Parent{  // created parent class
    showbike(){
        console.log("Bike is KTM");
    }
}
class Child  extends Parent{  //created child class
    // showbike(){
    //     console.log("Bike is KTM");   //if child has a func it always take the function of child.
    // }
}

let obj1=new Child()  //creation obj of child class
obj1.showbike()      //call the obj


