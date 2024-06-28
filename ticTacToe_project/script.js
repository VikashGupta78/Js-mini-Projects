let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#resetBtn");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector(".newgame");

let cross = true;

const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let ind = 0;
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        //console.log("button was clicked");
        if(cross){
            box.style.color = "red";
            box.innerText = "X";
        } 
        else{
            box.innerText = "0";
            box.style.color = "green";
        } 
        cross = !cross;
        box.disabled = true;

        checkWineer();
        ind++;
        if(ind == 9) draw();
    })
})
const draw = () => {
    msg.innerText = `Its Draw`;
    msg.style.display = "block";
    newGameBtn.style.display = "block";
    resetBtn.style.display = "none";
}

const showWinner = (winner) => {
    disableBtns();
    msg.innerText = `Congrats, Winner is ${winner}`;
    msg.style.display = "block";
    newGameBtn.style.display = "block";
    resetBtn.style.display = "none";
}

const checkWineer = () => {
    for(let val of winPatterns){
        let pos0val = boxes[val[0]].innerText;
        let pos1val = boxes[val[1]].innerText;
        let pos2val = boxes[val[2]].innerText;

        if(pos0val!="" && pos1val!="" && pos2val!=""){
            if(pos0val===pos1val && pos1val===pos2val){
                ind--;
                showWinner(pos0val);
            }
        }
    }
}
const disableBtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtns = () => {
    ind = 0;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    enableBtns();
    cross = true;
    msg.style.display = "none"; 
    newGameBtn.style.display = "none"; 
    resetBtn.style.display = "block";
}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);