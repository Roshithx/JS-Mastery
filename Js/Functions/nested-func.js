let global="Global Data"
const parent=()=>{
    parentVariable="PARENT DATA"
    console.log(`inside parent func ,parent variable is ${parentVariable} and global var is ${global}` );

  let child=()=>{
    childvariable="CHILD DATA"
    console.log(`inside parent func ,parent variable is ${parentVariable} and global var is ${global} , child variable is ${childvariable}` );

  }
  child()
}
parent()