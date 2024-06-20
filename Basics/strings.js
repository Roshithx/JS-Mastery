const name="Roshi"
const repocount=10
console.log(name+repocount+"Value");  //outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename=new String("Pubg-Mobile-PC")
//length => inorder to calculate the total length of the string.
console.log(gamename.length);


//sub => used to split word from beggining to make it a new string
const newgame=gamename.substring(0,2)
console.log(newgame);

//slice => used to split the words from beggining as well as ending by giving -ve and +ve value
const game2=gamename.slice(-10,5)
console.log(game2);


//trim -=> cut off the unwanted spaces in the statement from end and start
const newString1="     Aswin     "
console.log(newString1.trim());

//replace => replace the character to another
const url="https://hithesh.com/roshith%20arakkat"
console.log(url.replace('%20','-'))

//include => checks the given word is available in the declaration statement
const names="Aswin Paayaand Undappara"
console.log(names.includes('Aswin'));
console.log(names.includes('Roamncham'));
console.log(names.includes('unda'));

//split => to convert strings into array form by using seperators like space ,-, etc
const newname="Aswin-madapally-Edakkad"
console.log(newname.split('-'));

//To Uppercase => change all character to UPPERCASE letters
const nename="Aswin-madapally-Edakkad"
console.log(nename.toUpperCase())

//To Uppercase => change all character to UPPERCASE letters
const noname="PYATHON IS SNAKE"
console.log(noname.toLowerCase())

//charAt => inorder to find character at a given index
console.log(noname.charAt(2))

//charAt => inorder to find index  at a given character
console.log(noname.indexOf('A'))