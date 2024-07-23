//class Employee

class Employee{
    //property
     //constructor method:use to initialise class properties
     constructor(id,name,salary){
       
        this.empID=id
        this.empName=name
        this.empSalary=salary


     }
    //userdefined methods
    printemploy(){
        console.log(`
            ID:${this.empID}
             NAME:${this.empName}
              SALARY:${this.empSalary}
            `);
    }
}

let obj1=new Employee(1,"Roshi","Developer",55000)
obj1.printemploy()