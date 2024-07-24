//wap to check an email is valid gmail or not
// const prompt=require('prompt-sync')({sigint:true})
// let email=prompt("Enter the Email:")
// if(email.endsWith('@gmail.com'))
// {
//     console.log("Email is valid");
// }
// else{
//     console.log("Not valid");
// }


// //wap to check word start with "A"
// const prompts=require('prompt-sync')({sigint:true})
// let word=prompts("Enter the word:")
// if(word.startsWith("A"))
// {
//     console.log("Word start with letter A");
// }
// else{
//     console.log("Not ");
// }

// //wap to print all vowels in word
// word="Abhilash"
// vowel='AaEeiIoOuU'
// for(i=0;i<=word.length-1;i++)
// {
//     if(vowel.includes(word[i]))
//     {
//         console.log(word[i]);
//     }
// }

//Display the word count of the given paragraph:
//“Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.”

// let str="Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them."
// count=0
// let str1=str.split(" ")
// console.log(str1.length);


//search a string is available in a product array, it return an array of product which include sthe given string otherwise display no products are available

//search string= a
//output= ['hide and seek','lays','parleG','good day']

products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]
str="tiger"
let output=products.filter((num)=>num[1]==str)
if(output.length==0){
    console.log("No Product");
}
else{
    console.log(output[0]); 
}