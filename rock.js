const buttons = document.querySelectorAll('button');
const theOutput = document.querySelector("#output");
const userScore = document.getElementById("scoreforuser");
const computerScore =document.getElementById("scoreforcomputer");
let scoreForComputer= 0;
let ScoreForPlayer = 0;


buttons.forEach(button =>{
    button.addEventListener("click" , () => {
         const result = playAround( button.id,computerPlay());
     theOutput.textContent= result;
;    });
});

// the computer choice randomly

function computerPlay() {
    const choices = ["rock","paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices [randomChoice];
}

// function that will help to deteremine the winner between the user and computer 

function playAround(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {

    return " It's a tie!";

}else

if( (playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "paper" && computerSelection === "rock")||  (playerSelection === "scissors" && computerSelection === "paper")){
    
    ScoreForPlayer++;
    userScore.textContent = ScoreForPlayer;
    return "You won ! " +  playerSelection  + " beats " + computerSelection;
}

else{

    scoreForComputer++;
    computerScore.textContent = scoreForComputer;
    return "you lost " +  computerSelection  + "  beats  " + playerSelection;
}
}  
 



