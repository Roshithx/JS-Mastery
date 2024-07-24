array=[23,45,6,7,2,67]
key=7
array.sort((a,b)=> a - b)
low=0
high=array.length-1
isfound=false
while(low<high)
{
    mid=Math.floor((low+high/2))
    if(key==array[mid])
    {
        isfound=true
        break
    }
    else if(key<array[mid])
    {
        high=mid-1
    }
    else if(key>array[mid])
    {
        low=mid+1
    }
}

// console.log(isfound?"key is present":"key is not present");
if(isfound=true)
{
    console.log();
}

