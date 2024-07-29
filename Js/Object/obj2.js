// sentence="hai hello hello world"
// output={}
// sentence.split(" ").map((item)=>output.hasOwnProperty(item)?output[item]+=1:output[item]=1)
// console.log(output );


// pattern="ABBCCBAD"
// Items=pattern.split("")
// console.log(Items);
// output={}

// for(let item of Items){
     
//     if(output.hasOwnProperty(item)){
//         console.log("First Recursive Char is ",item);
//         break
//     }
//     else{
//         output[item]=1
//     }
// }

numArray=[10,20,30,40,20,30,20,10,60,70,40,50]
output={}
numArray.forEach((num)=>output.hasOwnProperty(num)?output[num]+=1:output[num]=1)
console.log(output);