let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;
const choices = ["Rock", "Paper", "Scissors"]

let randomChoice = choices[Math.floor(Math.random() * choices.length)]

let welcomeBtn = document.getElementById("welcome-button");
let welcomePage = document.querySelector(".welcome-page");
let gamePage = document.getElementById("game-page");
let playersTurn = document.getElementById("players-turn");
let playerOneScoreboard = document.getElementById("player-one-scoreboard");
let playerTwoScoreboard = document.getElementById("player-two-scoreboard");
let playerOneChoice = document.querySelector(".player-one-area");
let playerTwoChoice = document.querySelector(".player-two-area");
let playerOneButton = document.getElementById("player-one-roll");
let playerTwoButton = document.getElementById("player-two-roll");

//Event Listeners

// switches to game screen
welcomeBtn.addEventListener("click", startGamePage );
function startGamePage(){
    welcomePage.style.display = "none";
    gamePage.style.display = "block";
};

//Player Button Click listeners
playerOneButton.addEventListener("click", playerOneRoll );
playerTwoButton.addEventListener("click", playerTwoRoll );

// Player One Function
function playerOneRoll(){
    
    if (playerOneTurn === true){
    playerOneChoice.textContent = random(choices);
    playersTurn.textContent = "Player Two's Turn";
    playerOneChoice.classList.remove("active");
    playerTwoChoice.classList.add("active");
    playerOneTurn = false
    } else{
        playerTwoRoll
    }
    roundWinner()
}

// Player Two Function
function playerTwoRoll(){
    
    if (playerOneTurn === false){
    playerTwoChoice.textContent = random(choices);
    playersTurn.textContent = "Player One's Turn";
    playerTwoChoice.classList.remove("active");
    playerOneChoice.classList.add("active");
    playerOneTurn = true;
    } else {
        playerOneRoll
    }
    roundWinner()
}


//  function that selects random array item
function randomInt(limit){
    return Math.floor(Math.random() * limit)
}

function random(choices){
    var index = randomInt(choices.length)
    return choices[index];
}

// function that checks who won round

function roundWinner(){
    if (playerOneChoice.textContent === "Rock" && playerTwoChoice.textContent === "Scissors"){
            playerOneScore++;
            playerOneScoreboard.textContent = playerOneScore;
            playerOneRoll()
    }else if (playerOneChoice.textContent === "Rock" && playerTwoChoice.textContent === "Paper"){
            playerTwoScore++
            playerTwoScoreboard.textContent = playerTwoScore;
            playerOneRoll()
    }else if(playerTwoChoice.textContent === "Rock" && playerOneChoice.textContent === "Scissors"){
            playerTwoScore++;
            playerTwoScoreboard.textContent = playerTwoScore;
            playerOneRoll()
    }else if (playerTwoChoice.textContent === "Rock" && playerOneChoice.textContent === "Paper"){
            playerTwoScore++
            playerTwoScoreboard.textContent = playerTwoScore;
            playerOneRoll()
    } else if (playerOneChoice.textContent === "Paper" && playerTwoChoice.textContent === "Rock"){
            playerOneScore++;
            playerOneScoreboard.textContent = playerOneScore;
            playerOneRoll()
    }else if (playerOneChoice.textContent === "Paper" && playerTwoChoice.textContent === "Scissors"){
            playerTwoScore++
            playerTwoScoreboard.textContent = playerTwoScore;
            playerOneRoll()
    }else if (playerTwoChoice.textContent === "Paper" && playerOneChoice.textContent === "Rock"){
            playerTwoScore++
            playerTwoScoreboard.textContent = playerTwoScore;
            playerOneRoll()
    }else if (playerTwoChoice.textContent === "Paper" && playerOneChoice.textContent === "Scissors"){
            playerOneScore++;
            playerOneScoreboard.textContent = playerOneScore;
            playerOneRoll()
    }else if (playerOneChoice.textContent === "Scissors" && playerTwoChoice.textContent === "Paper"){
            playerOneScore++;
            playerOneScoreboard.textContent = playerOneScore;
            playerOneRoll()
    }else if (playerOneChoice.textContent === "Scissors" && playerTwoChoice.textContent === "Rock"){
            playerTwoScore++
            playerTwoScoreboard.textContent = playerTwoScore;
            playerOneRoll()
    }else if (playerTwoChoice.textContent === "Scissors" && playerOneChoice.textContent === "Paper"){
            playerTwoScore++
            playerTwoScoreboard.textContent = playerTwoScore;
            playerOneRoll()
    }else if (playerTwoChoice.textContent === "Scissors" && playerOneChoice.textContent === "Rock"){
            playerOneScore++;
            playerOneScoreboard.textContent = playerOneScore;
            playerOneRoll()
    }else  (playerOneChoice.textContent === playerTwoChoice.textContent) 
            playerOneRoll()
    
    if(playerOneScore === 5){
        gameWinner()
        // console.log("Player One has won!")
    }else if (playerTwoScore === 5){
        gameWinnner()
        // console.log("Player 2 has won!")
    }
}

function gameWinner(){
    checkRockVsScissors(gameWinner)
}


function checkRockVsScissors(gameWinner){
    if(playerOneChoice.textContent === gameWinner && playerTwoChoice.textContent === gameWinner){
        playerOneScore++
        playerOneScoreboard.textContent = playerOneScore;
    }
}