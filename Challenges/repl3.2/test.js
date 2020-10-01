let randomNumber = Math.floor(Math.random()*10+1);//! generates random number
console.log("random:",randomNumber);

let guessCount = 0; //!counts number of guesses


function guessNumber() {
    let guess = Number(enterGuess.value);//!user guess
        console.log('guess:',guess)

    if(guess === randomNumber) {

        console.log("Congrats, You win");
    }else if (guessCount ===3){
        console.log("Game Over");
    }else {
        if(guess < randomNumber){
            console.log("Too Low");
        }else if(guess>randomNumber){
            console.log("Too High")
        }
    }
    
    
    
    
    
    // else if (guess < randomNumber) {                       //if g !== r, then need to go back to guess, while increasing guess count, until 3
    //     console.log("You are too low");
    //     guessCount++;
    // }else if (guess> randomNumber){
    //     console.log("You are too High")
guessCount++;
console.log('count:',guessCount);
};


guessNumber();