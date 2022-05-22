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

let winMessage = document.querySelector("#results");

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
            winMessage.textContent = `It's a tie! You both picked ${playerPlay}`;
            break;
        
        case "player":
            winMessage.textContent = `You win! ${playerPlay} beats ${computerPlay}`;
            break;

        case "computer":
            winMessage.textContent = `You lose! ${computerPlay} beats ${playerPlay}`;
            break;

        default:
            winMessage.textContent = "Something went wrong.";
            break;
    }

    return winner;

}

let buttons = document.querySelectorAll("button");

buttons.forEach((currentValue) => {
    
    currentValue.addEventListener("click", () => playRound(currentValue.id, computerPlay()))
    
}); // plays a game against computer with chosen selection