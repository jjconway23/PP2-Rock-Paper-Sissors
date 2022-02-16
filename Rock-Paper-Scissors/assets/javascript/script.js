let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;
const choices = ["Rock", "Paper", "Scissors"];

// let randomChoice = choices[Math.floor(Math.random() * choices.length)]; // Don't think im no longer using this .

// Dom Elements
// page selectors
let welcomePage = document.querySelector(".welcome-page");
let winnersPage = document.getElementById("winners-page");
let gamePage = document.getElementById("game-page");
// interactive selctors
let playersTurn = document.getElementById("players-turn");
let playerOneScoreboard = document.getElementById("player-one-scoreboard");
let playerTwoScoreboard = document.getElementById("player-two-scoreboard");
let playerOneChoice = document.querySelector(".player-one-area");
let playerTwoChoice = document.querySelector(".player-two-area");
let winningMessage = document.getElementById("winning-player");
//button selectors
let playerOneButton = document.getElementById("player-one-roll");
let playerTwoButton = document.getElementById("player-two-roll");
let welcomeBtn = document.getElementById("welcome-button");
let playAgainBtn = document.getElementById("play-again");

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
playAgainBtn.addEventListener("click", startGameAgain )

// Player One Function
function playerOneRoll(){
    
    if (playerOneTurn === true){
    playerOneChoice.textContent = random(choices);
    playersTurn.textContent = "Player Two's Turn";
    playerOneChoice.classList.remove("active");
    playerTwoChoice.classList.add("active");
    playerOneTurn = false;
    } 
    firstToFive()
}

// Player Two Function
function playerTwoRoll(){
    
    if (playerOneTurn === false){
    playerTwoChoice.textContent = random(choices);
    playersTurn.textContent = "Player One's Turn";
    playerTwoChoice.classList.remove("active");
    playerOneChoice.classList.add("active");
    
    }   
        roundWinner();
        playerOneTurn = true;
        firstToFive()
}


//  function that selects random array item
function randomInt(limit){
    return Math.floor(Math.random() * limit);
}
function random(choices){
    var index = randomInt(choices.length);
    return choices[index];
};

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
                playerOneScore++;
                playerOneScoreboard.textContent = playerOneScore;
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
    
    
}

//Function to check who won game first to 5!

function firstToFive () {
        if (playerOneScore === 5){
                endGame("Player One")
        } else if(playerTwoScore === 5){
                endGame("Player Two")
        }

}
// This brings up the winner is screen
function endGame(winner){
        winnersPage.style.display = "block";
        gamePage.style.display = "none"
        winningMessage.textContent = winner

}
// this attached to the playAgainBtn. Starts game again and sets everything back to 0
function startGameAgain(){
        welcomePage.style.display = "block";
        winnersPage.style.display = "none";
        playerOneTurn = true;
        playersTurn.textContent = "Player One's Turn";
        playerTwoChoice.classList.remove("active");
        playerOneChoice.classList.add("active");
        playerOneScore = 0;
        playerTwoScore = 0;
        playerTwoScoreboard.textContent = 0
        playerOneScoreboard.textContent = 0
        playerOneChoice.textContent = ""
        playerTwoChoice.textContent = ""
}