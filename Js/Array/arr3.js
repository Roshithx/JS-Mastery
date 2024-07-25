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
// 1. print all employee name

// for(let item of employee){
//     console.log(item[1]);
// }

 employee.forEach((item)=>{
    console.log(item[1]);
 })

 
//2.print total number of employee
console.log(`Total Employees:${employee.length} `);

//3. print developer employee details

// for(let item of employee){
//     if(item[2]=='developer'){
//         console.log(item);
//     }
// }

// employee.forEach((item)=>{
//    if(item[2]=='developer'){
//     console.log(item);
//    }
// })

newDev=employee.filter((item)=>item[2]=='developer')
console.log(newDev);

// 4. print employee whose salary > 30000

// for(let item of employee){
//     if(item[4]>30000){
//         console.log(item);
//     }
// }

//  employee.forEach((item)=>{
//     if(item[4]>30000){
//         console.log(item);
//     }
//  })

   newSala=employee.filter((item)=>item[4]>30000)
   console.log(newSala);
//5. print details of employee Laisha

// Emp=employee.filter((item)=>item[1]=='Laisha')
// console.log(Emp);

     Emp=employee.find((item)=>item[1]=='Laisha')
     console.log(Emp);

     employee.forEach((item)=>{
        if(item[1]=='Laisha'){
         console.log(item);
        }
     }
   )
//6. Sort employee based on their salary in descending order

        sortArrayD=employee.sort((a,b)=>(b[4]-a[4]))
        console.log(sortArrayD);


//7. Sort employee based on their experience in ascending order

sortArrayD=employee.sort((a,b)=>(a[5]-b[5]))
console.log(sortArrayD);