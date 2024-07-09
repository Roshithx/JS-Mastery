// const week=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(week.length);
// console.log(week[week.length-1]);

// //Insert Item to a array 
// week.push("end")
// week.unshift("Start")
// console.log(week);
// //delete an item from array
// week.pop()
// week.shift()
// console.log(week);

// //display array elemnts one by one using loop

// for(index=0;index<week.length;index++)
// {
//     console.log(week[index]);
// }

// //display array elements one by one using for-of loop

// for(let item of week){
//     console.log(item);
// }

// //display array elements one by one using for-in loop
// for(let index in week){
//     console.log(week[index]);
// }

expense=[23000,34000,56000,20000,67000,12000,23000,34000,56000,20000,67000,12000,45000]
highest=expense[0]
count=0
for(let num of expense){
    count++
    if(num>highest)
    {
        highest=num
    }
 
}
console.log(`Highest:${highest}`);
console.log(count);


expense=[23000,34000,56000,20000,67000,12000,23000,34000,56000,20000,67000,12000,45000]
highest=expense[0]
count=0
for(i=0;i<expense.length;i++)
{
    for(j=i+1;j<expense.length;j++)
    {
        if(expense[i])
    }

}
console.log(`Highest:${highest}`);
console.log(count);


// expense=[23000,34000,56000,20000,67000,12000,45000]
// lowest=expense[0]
// for(let num of expense){
    
//     if(num<lowest)
//     {
//         lowest=num
//     }
 
// }
// console.log(`Lowest:${lowest}`);


// expense=[23000,34000,56000,20000,67000,12000,45000]
// sum=0
// for(let num of expense){
//     sum+=num
 
// }
// console.log(`Sum:${sum}`);

// array=[23,45,6,7,2,67]
// ispresent=true
// for(let item of array)
// {
//     if(item==9)
//     {
//         ispresent=true
//         break
//     }
//     else{
//         ispresent=false
//     }
// }
// console.log(ispresent?"2 is present":"Not present");


