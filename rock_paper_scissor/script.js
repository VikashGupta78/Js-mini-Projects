let choices = document.querySelectorAll(".image-btn");
let userScore = document.querySelector("#your-score");
let compScore = document.querySelector("#comp-score");
let result = document.querySelector(".result");
let score1 = 0;
let score2 = 0;

const generateChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomInd = Math.floor(Math.random() * 3);
    return options[randomInd];
}
const playGame = (userChoice) => {
    const compChoice = generateChoice();
    console.log(userChoice, compChoice);
    if(userChoice==="rock"&&compChoice==="scissor" || userChoice==="paper"&&compChoice==="rock" || userChoice==="scissor"&&compChoice==="paper"){
        score1++;
        userScore.innerText = score1;
        result.innerText = `You won! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
    }
    else if(compChoice==="rock"&&userChoice==="scissor" || compChoice==="paper"&&userChoice==="rock" || compChoice==="scissor"&&userChoice==="paper"){
        score2++;
        compScore.innerText = score2;
        result.innerText = `You Lost ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "red";
    }
    else{
        // console.log("draw");
        result.innerText = `Game draw, Play again`;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})