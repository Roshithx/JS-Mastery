const displayContent=(content)=>{
    display.value+=content
}

const clearCalc=()=>{
    display.value=""
}

const CalcNum=()=>{
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value=""
        display.placeholder="Invalid Exp"
    }
   
}
const DelEnd=()=>{
    display.value=display.value.toString().slice(0,-1)
}