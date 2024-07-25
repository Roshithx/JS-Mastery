//check an item present in array or not
numArray=[23,45,78,2,89,10,9]
searchitem=20
isfound=false
for(let item of numArray){
    if(item==searchitem)
        {
            isfound=true
            break
        } 
}
console.log(isfound?"Found":"Not");



//print the following

//input=[4 5 6]
//output=[11 10 9]

input=[4,5,6]
sum=0
output=[]
for(let num of input)

    {
        sum+=num
    }
for(let num of input){

    output.push(sum-num)
}
console.log(input);
console.log(output);



//print all duplicates element in array
dupArray=[10,20,30,10,20,40,50,20]
output=[]
for(i=0;i<=dupArray.length-1;i++)
{
    for(j=i+1;j<dupArray.length-1;j++)
    {
        if(dupArray[i]==dupArray[j])
        {
            console.log(dupArray[i]);
            break
        }
    }
}

//print pairs sum is 7
pairArray=[2,3,4,5]
sum=7
for(i=0;i<=pairArray.length-1;i++){
    for(j=i+1;j<=pairArray.length-1;j++)
    {
        if(pairArray[i]+pairArray[j]==sum)
        {
            console.log(pairArray[i],pairArray[j]);
        }
    }
}

//find common numbers from given arrays:
a=[10,11,23,34,30]
b=[11,20,21,30,31]

for(let num1 of a){
    for(let num2 of b){
        if(num1==num2){
            console.log(num1);
            break
        }
    }
}

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
 
