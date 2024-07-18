// print all duplicate elemnt in array

array=[10,30,10,20,40,50,20]
// duplicate=[]

// for(i=0;i<array.length;i++)
// {

//     for(j=i+1;j<array.length;j++)
//     {
//         if(array[i]==array[j])
//         {
//             console.log(array[i]);
//             break
//         }
//     }
// }

duplicate={}
search={}
for(let item of array)
{
    if(search[item]) {
        duplicate[item]=true
    }
    else{
        search[item]=true
    }
}

for(let dup in duplicate){
    console.log(duplicate);
}



