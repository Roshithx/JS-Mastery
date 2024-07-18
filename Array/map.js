//display array of squares 
Array=[2,3,4,5,6]

//display cube
cube=Array.map((num)=>num**3)
console.log(cube);

//
sub=Array.map((num)=>num>4?num-=1:num+=1)
console.log(sub);

//diplay total sum of all no in array.
  ar=Array.reduce((sum,num)=>sum+=num)
  console.log(ar);

//display highest from array
 ar=Array.reduce((num,num1)=>num>num1?num:num1);
 console.log(ar);

 //display highest from array
 ar=Array.reduce((num,num1)=>num<num1?num:num1);
 console.log(ar);