expense=[23000,34000,56000,20000,67000,12000,45000]
//wap to print the highest expense
highest=expense[0]
for(let item of expense){
    if(item>highest){
        highest=item
    }
}
console.log(highest);

//wap to print the lowest
lowest=expense[0]
for(let item of expense){
    if(item<lowest){
        lowest=item
    }
}
console.log(lowest);

//wap to print total expense
sum=0
for(let total of expense)
{
   sum+=total
}
console.log(sum);

