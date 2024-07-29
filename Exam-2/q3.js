//Given two strings, s and t, write a function to determine if t is an anagram of s

//Example: s= "dear", t="read", return true. 

//s="rat" , t="cat" return false


s="dear"
t="read"
let anagram=()=>{
  
    str1=s.split("")
    sortStr1=str1.sort().join(",")
    str2=t.split("")
    sortStr2=str2.sort().join(",")
    if(sortStr1==sortStr2){
        console.log("Anagram");
        return true
    }
    else{
        console.log("Not Anagram");
        return false
    }
}
anagram()