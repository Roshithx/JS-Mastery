//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
//1. print all employee name

for(let emp of employee){
  console.log(emp[1]);
}

//Good way to use forEach to avoid loops
employee.forEach((emp,index)=>{
  console.log(emp[1]);
})


//2.print total number of employee
console.log(`Total no of employee= ${employee.length}`);


//3. print developer employee details
employee.forEach((dev)=>{
  if(dev[2]=='developer')
  {
      console.log(dev);
  }
})

dev=employee.filter((emp)=>emp[2]=='developer')
console.log(dev);

//4. print employee whose salary > 30000
 result=employee.filter((emp)=>emp[4]>30000)
 console.log(result);


//5. print details of employee Laisha
names=employee.filter((emp)=>emp[1]=='Laisha')
console.log(names);

// //6. Sort employee based on their salary in descending order
employee.sort((a,b)=>b[4]-a[4])
 console.log(employee);

// //7. Sort employee based on their experience in ascending order
employee.sort((a,b)=>a[5]-b[5])
 console.log(employee);
 




        



