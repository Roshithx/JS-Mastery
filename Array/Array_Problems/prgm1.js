//wap to input=[4,5,6]  
//output  [11,10,9]
input=[4,5,6]
sum=0
output=[]
for(let add of input){
    sum+=add
    
}
for(let add of input)
{
    output.push(sum-add)
}
console.log( output);
