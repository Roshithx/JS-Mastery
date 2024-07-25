numArray=[23,45,78,2,89,10,9]
//Binary Search

//We need to sort the array
sortArray=numArray.sort((a,b)=>(a-b))
console.log(sortArray);
low=0
high=sortArray.length-1
key=28
isfound=false

while(low<=high)
{
mid=Math.floor((low+high)/2)
     if(key==mid){
        isfound=true
        break
     }
     else if(mid>key){
         high=mid-1
     }
     else if(mid<key){
         low=mid+1
     }
}
console.log(isfound?"Found":"Not");
