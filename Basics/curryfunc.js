//wap to find volume

// let volume=(length,breadth,height)=>{
//     return length*breadth*height
// }
// console.log(volume(10,5,20));

let volume=(breadth)=>{         //Inorder to make function entirely depend on the arguments.
    return function(length){
        return function(height){
            return breadth*length*height
        }
    }
}

console.log(volume(10)(20)(5));