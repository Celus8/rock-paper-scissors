// Create a computerPlay function that will randomly return
// either "Rock", "Paper" or "Scissors".
function computerPlay() {
    let playNumber = Math.floor(Math.random()*3 + 1); // Assign 'playNumber' a random
                                                      // number between 1 and 3
    let play = "Rock";
    if (playNumber === 2) {
        play = "Paper";
    } else if (playNumber === 3) {
        play = "Scissors";
    } // Assign each number a different play
    return play;
}

// Create a function that plays a single round of Rock Paper Scissors.
// Take playerSelection and computerSelection as parameters
// Create a string variable winner
// Compare playerSelection to computerSelection and decide winner
// If player choose rock
    // If computer choose rock, then tie
    // If computer choose paper, then assign computer to winner
    // If computer choose scissors, then assign player to winner
// If player choose paper
    // If computer choose rock, then assign player to winner
    // If computer choose paper, then tie
    // If computer choose scissors, then assign computer to winner
// If player choose scissors
    // If computer choose rock, then assign computer to winner
    // If computer choose paper, then assign player to winner
    // If computer choose scissors, then tie

// Return a string that declares the winner of the round and what was played

function isString(str) { // Checks wether the argument is a string
    return typeof str === "string";
  }

function capitalizeFirst(str) { // Capitalizes the first letter
    if (!isString(str)) return;
    let firstLetter = str.charAt(0);
    let capFirstLetter = firstLetter.toUpperCase();
    let capStr = str.replace(firstLetter, capFirstLetter);
    return capStr;
}

function normalizeString(str) { // Makes every letter lowercase and capitalizes first one
    if (!isString(str)) return;
    let lowerCaseStr = str.toLowerCase();
    let normalizedStr = capitalizeFirst(lowerCaseStr);
    return normalizedStr;
}

function playRound(playerSelection, computerSelection) {
    let winner;

    let pS = normalizeString(playerSelection);
    let cS = normalizeString(computerSelection);
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
            console.log(`It's a tie! You both picked ${pS}`);
            break;
        
        case "player":
            console.log(`You win! ${pS} beats ${cS}`);
            break;

        case "computer":
            console.log(`You lose! ${cS} beats ${pS}`);
            break;

        default:
            console.log("Something went wrong.");
            break;
    }

}