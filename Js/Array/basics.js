let users=["NIKHIL","ROSHITH","SNEHA","THRILOK","NANDANA","VAISHNAV","ASWIN"]


//To find Total length of an array
console.log(users.length);

//To specify display an element in array
console.log(users[0]);

//To display last element in array
console.log(users[users.length-1]);

//Insert an item to an array end  - push()
users.push("AKHIL")
console.log(users);

//Insert an item to front of array - unshift()
users.unshift("AROMAL")
console.log(users);

//delete an item from an array from end - pop()
users.pop()
console.log(users);


//delete an item from an array from end - unshift()
users.shift()
console.log(users);

//Display an array item by item using for-of loop
for( let item of users ){
    console.log(item);
}

//display an array item one by one using for in loop
for(let index in users){
    console.log(users[index]);
}



