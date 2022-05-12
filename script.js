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
