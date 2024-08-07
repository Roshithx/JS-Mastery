let buttons=document.querySelectorAll(".box")
let resetbtn=document.querySelector(".reset")

let turnO=true

winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

buttons.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(turnO){
            item.innerHTML="O"
            turnO=false
        }else{
            item.innerHTML="X"
            turnO=true
        }
        item.disabled=true
    })
   
})
