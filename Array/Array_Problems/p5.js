//wap to print numbers less than 10
array=[ [1,2] ,[45,67] ,[90,89],[9,10] ]
for (let subarray of array){
    for(let num of subarray){
        if(num<=10)
        {
            console.log(num);
        }
    }
}