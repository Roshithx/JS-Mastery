//wap to print numbers<10 from the given array

numArray=[
    [1,2],[45,67],[6,7],[90,89],[9,10]
]

for(let subarray of numArray){
    // console.log(subarray);
    for(let num of subarray){
        if(num<10)
        { console.log(num);}
       
    }
}


