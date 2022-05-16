function computerPlay() {
    let playNumber = Math.floor(Math.random()*3 + 1);
    let playName = "Rock";
    if (playNumber === 2) {
        playName = "Paper";
    } else if (playNumber === 3) {
        playName = "Scissors";
    }
    return playName;
}

function isString(str) {
    return typeof str === "string";
  }

function capitalizeFirst(str) {
    if (!isString(str)) return;
    let firstLetter = str.charAt(0);
    let capFirstLetter = firstLetter.toUpperCase();
    let capitalizedStr = str.replace(firstLetter, capFirstLetter);
    return capitalizedStr;
}

function normalizeString(str) { // Makes every letter lowercase and capitalizes first one
    if (!isString(str)) return;
    let lowerCaseStr = str.toLowerCase();
    let normalizedStr = capitalizeFirst(lowerCaseStr);
    return normalizedStr;
}

function isInputValid(input) {
    let normalizedInput = normalizeString(input);
    if (normalizedInput === "Rock" ||
    normalizedInput === "Paper" ||
    normalizedInput === "Scissors") {
        return true;
    } else {
        return false;
    }
}

function playRound(playerSelection, computerSelection) {

    let winner;
    let playerPlay = normalizeString(playerSelection);
    let computerPlay = normalizeString(computerSelection);
    
    if (playerPlay === "Rock") {
        if (computerPlay === "Rock") {
            winner = "none";
        } else if (computerPlay === "Paper") {
            winner = "computer";
        } else if (computerPlay === "Scissors") {
            winner = "player";
        }
    } else if (playerPlay === "Paper") {
        if (computerPlay === "Rock") {
            winner = "player";
        } else if (computerPlay === "Paper") {
            winner = "none";
        } else if (computerPlay === "Scissors") {
            winner = "computer";
        }
    } else if (playerPlay === "Scissors") {
        if (computerPlay === "Rock") {
            winner = "computer";
        } else if (computerPlay === "Paper") {
            winner = "player";
        } else if (computerPlay === "Scissors") {
            winner = "none";
        }
    }

    switch (winner) {
        case "none":
            console.log(`It's a tie! You both picked ${playerPlay}`);
            break;
        
        case "player":
            console.log(`You win! ${playerPlay} beats ${computerPlay}`);
            break;

        case "computer":
            console.log(`You lose! ${computerPlay} beats ${playerPlay}`);
            break;

        default:
            console.log("Something went wrong.");
            break;
    }

    return winner;

}

function game() { // Play a 5 round game of Rock, Paper, Scissors
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What will you play?");
        if (!isInputValid(playerSelection)) {
            console.log("Input a valid play!")
            i--;
            continue;
        }
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);

        switch (winner) {
            case "player":
                playerScore++;
                break;
    
            case "computer":
                computerScore++;
                break;
    
            default:
                break;
        }

    }

    if (playerScore > computerScore) {
        console.log("\nYou won! Congratulations!")
    } else if (playerScore < computerScore) {
        console.log("\nYou lost, better luck next time!");
    } else {
        console.log("\nIt's a tie! How interesting!")
    }

}