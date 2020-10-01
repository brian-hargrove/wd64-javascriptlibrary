/*Create a guessing game where a user, when prompted, can input a number between 1 and 10. The user has up the three (3) opportunities to guess the correct number. Upon evaluation of the user's input, the computer can nudge the user to guess higher or lower.


What is needed for a guessing game?
A range for our user to guess between. This should be 1-10. 
A randomized computer answer.
A user guess that will provide a prompt 
A guess count (for loop variable declaration) 
gameLost = false
The user will have 3 guesses to guess the correct answer.

Logic 
A way to validate the user guess 
Check if the user guess === the computer answer and alert that they won 
If the user guess is greater than the computer answer - nudge them to guess lower 
If the user guess is lower than the computer answer - nudge them to guess higher 
Handle the case when a user loses

*** You will need to explore documentation on:
parseInt(), 
prompt, 
alert, 
Math.floor(), 
and Math.random()


*** You will NOT need to use the provided HTML or CSS file - just JS!
*/
let randomNumber = Math.floor(Math.random()*10+1);//! generates random number
console.log("random:",randomNumber);
const enterGuess = document.querySelector('.enterGuess')
const guessSubmit = document.querySelector('.guessSubmit');
let resetButton;

let guessCount = 1; //!counts number of guesses
guessSubmit.addEventListener('click',guessNumber);   

function guessNumber() {
    let guess = Number(enterGuess.value);//!user guess
        console.log('guess:',guess)
            

    if (guessCount ===3){
            alert(`Strike Three, YOU"RE OUT. The number we were looking for was ${randomNumber}`);
            console.log("Game Over");
            gameOver();
    }else if(guess === randomNumber) {
        alert("Congrats, It's a HOME RUN!!!!!!")
        gameOver();
        console.log("Congrats, You win");
        
    }else {
        if(guess < randomNumber){
            alert('Too Low, Guess higher',"");
            console.log("Too Low");
        }else if(guess>randomNumber){
            alert('Too High, Guess Lower');
            console.log("Too High")
        }
    }
    
    guessCount++;
    enterGuess.value='';
    console.log('count:',guessCount);
};    

function gameOver(){
    enterGuess.disabled=true;
    guessSubmit.disabled-true;
    resetButton=document.createElement('button');
    resetButton.textContent='Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame(){
    guessCount=1;
    resetButton.parentNode.removeChild(resetButton);
    enterGuess.disabled=false;
    guessSubmit.disabled=false;
    enterGuess.value='';
    randomNumber = Math.floor(Math.random()*10+1);
};

 
    
    // else if (guess < randomNumber) {                       //if g !== r, then need to go back to guess, while increasing guess count, until 3
    //     console.log("You are too low");
    //     guessCount++;
    // }else if (guess> randomNumber){
    //     console.log("You are too High")



