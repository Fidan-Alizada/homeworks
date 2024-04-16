/*
const choices = ["камень", "ножницы", "бумага"];
document.getElementById("rock").addEventListener("click", function() {
    playRound("камень");
});
document.getElementById("scissors").addEventListener("click", function() {
    playRound("ножницы");
});
document.getElementById("paper").addEventListener("click", function() {
    playRound("бумага");
});

}
*/
const choices = ["rock", "scissors", "paper"];
let playerScore = 0;
let botScore = 0;
document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});
document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors");
});
document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});
function playRound(playerChoice) {
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, botChoice);
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        botScore++;
    }
    document.getElementById("result").innerHTML = `
        <p>You chose: ${playerChoice}</p>
        <img src="${playerChoice}.jpg" alt="${playerChoice}">
        <p>Bot chose: ${botChoice}</p>
        <img src="${botChoice}.jpg" alt="${botChoice}">
        <p class="${result === 'Draw!' ? 'text-primary' : result === 'You win!' ? 'text-success' : 'text-danger'}">${result}</p>
    `;
    document.getElementById("score").innerHTML = `
        <p>Score: Player ${playerScore} - ${botScore} Bot</p>
    `;
    if (playerScore === 3) {
        alert("Congratulations! You won!");
        resetScore();
    } else if (botScore === 3) {
        alert("Sorry, you lost.");
        resetScore();
    }
}
function determineWinner(playerChoice, botChoice) {
    if (playerChoice === botChoice) {
        return "Draw!";
    } else if (
        (playerChoice === "rock" && botChoice === "scissors") ||
        (playerChoice === "scissors" && botChoice === "paper") ||
        (playerChoice === "paper" && botChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
function resetScore() {
    playerScore = 0;
    botScore = 0;
    document.getElementById("score").innerHTML = `
        <p>Score: Player ${playerScore} - ${botScore} Bot</p>
    `;
}