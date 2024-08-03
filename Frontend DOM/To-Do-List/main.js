const inputBox=document.getElementById("inputbox")
const ListContainer=document.getElementById("list")
let addtask=()=>{
    if(inputBox.value===""){
        alert("Add a Task")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value
        ListContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.append(span)
    }
    inputBox.value="" 
    saveData()
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

let saveData=()=>{
   localStorage.setItem("data",ListContainer.innerHTML)
}

let showlist=()=>{
    ListContainer.innerHTML=localStorage.getItem("data")
}
showlist()