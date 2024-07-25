//if element >30 then subtract 1 from that element 
//else add1 to that
numArray=[10,22,12,13,67,89,56]
newArr=numArray.map((num)=>num>30?num-=1:num+=1)
console.log(newArr);
console.log(numArray);


Arr=[2,3,4,5,6]
//display an array with squares of each item

NewArrs=Arr.map((num)=>num**2)
console.log(NewArrs);

Arr.forEach((item)=>{
    item=item**2
    console.log(item);
}) 


//display an array with cube of each item
Arry=Arr.map((item)=>item**3)
console.log(Arry);

// if element >4 then subtract 1 from that element 
//else add1 to that
SubArr=Arr.map((item)=>item<4?item-=1:item+=1)
console.log(SubArr);
