namearray=["Nimi","Mili","Mini","Minju"]
// console.log(namearray.includes("Mili"));

//includes() return boolean value for the condition as same as some()


//print index of item "milo"
index=namearray.indexOf("Mini")
console.log(index);

//delete "Milo" from this given array
console.log(namearray.splice(index,1,"Rosh"));
console.log(namearray);
//splice() used to delete specific item from array and return a new array of deleted items or replace deleted item

//display all names from namearray without "roshi]" :filter()
console.log(namearray.filter(item=>item!=="Rosh"));

//join
console.log(namearray.join(","));

//reverse an items in array
console.log(namearray.reverse());



