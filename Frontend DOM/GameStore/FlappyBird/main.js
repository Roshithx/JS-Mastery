//board
let board
let boardHeight=900
let boardWidth=1420
let context

//bird
let birdWidth=38
let birdHeight=24




window.onload=()=>{
    board=document.getElementById("board")
    board.height=boardHeight
    board.width=boardWidth
    context=board.getContext("2d")
}
let bi