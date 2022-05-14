/* Create a computerPlay function that will randomly return
either "Rock", "Paper" or "Scissors". */
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

/* Create a function that plays a single round of Rock Paper Scissors.
Take playerSelection and computerSelection as parameters.
Create a string variable called winner.
Compare playerSelection to computerSelection and decide winner:
If player chooses rock, then
    If computer chooses rock, then tie
    If computer chooses paper, then assign computer to winner
    If computer chooses scissors, then assign player to winner
If player chooses paper, then
    If computer chooses rock, then assign player to winner
    If computer chooses paper, then tie
    If computer chooses scissors, then assign computer to winner
If player chooses scissors, then
    If computer chooses rock, then assign computer to winner
    If computer chooses paper, then assign player to winner
    If computer chooses scissors, then tie

Finally, return a string that declares the winner of the round and what was played */

function isString(str) { // Checks wether the argument is a string
    return typeof str === "string";
  }

function capitalizeFirst(str) { // Capitalizes the first letter
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

function playRound(playerSelection, computerSelection) { // Plays a round of Rock, Paper, Scissors
    let winner;
    let pS = normalizeString(playerSelection);
    let cS = normalizeString(computerSelection);
    let winMessage;

    if (pS === "Rock") {
        if (cS === "Rock") {
            winner = "none";
        } else if (cS === "Paper") {
            winner = "computer";
        } else if (cS === "Scissors") {
            winner = "player";
        }
    } else if (pS === "Paper") {
        if (cS === "Rock") {
            winner = "player";
        } else if (cS === "Paper") {
            winner = "none";
        } else if (cS === "Scissors") {
            winner = "computer";
        }
    } else if (pS === "Scissors") {
        if (cS === "Rock") {
            winner = "computer";
        } else if (cS === "Paper") {
            winner = "player";
        } else if (cS === "Scissors") {
            winner = "none";
        }
    } else {
        console.log("You must input a valid play.")
    }

    switch (winner) {
        case "none":
            winMessage = `It's a tie! You both picked ${pS}`;
            break;
        
        case "player":
            winMessage = `You win! ${pS} beats ${cS}`;
            break;

        case "computer":
            winMessage = `You lose! ${cS} beats ${pS}`;
            break;

        default:
            winMessage = "Something went wrong.";
            break;
    }

    return winMessage;

}