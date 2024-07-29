nameArr=["Mini","Mili","Milo","Minu","Minju"]

//is milo present in the array
// nameArr.some((item)=>item=="Milo")
console.log(nameArr.includes("Milo"));

index=nameArr.indexOf("Mini")

//delete "Milo"
nameArr.splice(index,1,"Roshi")
console.log(nameArr);

nameArr.reverse()
console.log(nameArr);