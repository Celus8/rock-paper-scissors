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