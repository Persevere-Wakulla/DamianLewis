// USER PICK ELEMENT
let score = 0;
let userPick = document.getElementById('user-pick');
const scoreElemenet = document.getElementById('score2')
//Rock:
// let rock = "user-pick";
let rockClickElement = document.getElementById('rock');
let userChoice = '';
// selecting the img of rock
rockClickElement.src = 'images/icon-rock.svg';
let computersChoiceElement = document.getElementById('computer-pick');

// Paper:
let paper = "images/icon-paper.svg";
// selecting the img of paper
let paperClickElement = document.getElementById('paper');
paperClickElement.src = 'images/icon-paper.svg';

// Scissors:
let scissors = "user-pick";
// selecting the img of scissors
let scissorsClickElement = document.getElementById('scissors');
scissorsClickElement.src = 'images/icon-scissors.svg';

//The House Pick:
let computerPick = "scissors";
let computerPickElement = document.getElementById('computer-pick');
let compArray = ['rock', 'paper', 'scissors'];
computerPickElement.src = 'images/icon-scissors.svg';

//rockClick EVENT HANDLERROCK:
rockClickElement.addEventListener("click", handleRock)
function handleRock() {
    const compChoice = random(compArray)
    // want change the userChoice to be rock
    userChoice = 'rock';
    // want to chnage the user-pick to display the rock picture
    userPick.src = "images/icon-rock.svg";
    // run determinWinner
    // displayChoice()
    determineWinner(userChoice, compChoice)
}

// paperClick EVENT HANDLERPAPER:
paperClickElement.addEventListener("click", handlePaper)
function handlePaper() {
    const compChoice = random(compArray)
    userChoice = 'paper';
    userPick.src = "images/icon-paper.svg";
    determineWinner(userChoice, compChoice)
    // displayChoice()

}
// how to determin who wins
// find what the player picked
// IF playerPicked IS 'rock' && computerChoice IS 'scissors'
// the play won score++

// scissorClick event handleScissors:
scissorsClickElement.addEventListener("click", handleScissors)
function handleScissors() {
    const compChoice = random(compArray)
    userChoice = 'scissors';
    userPick.src = "images/icon-scissors.svg";
    //make a variable called computers Choice which is set to our random function
    // displayChoice()
    determineWinner(userChoice, compChoice)

}

function displayChoice() {
    let computersChoice = random(compArray); // paper,rock,scissors
    // target computersChoiceElement and change icon based on the results
    computersChoiceElement.src = `images/icon-${computersChoice}.svg`
}

//computer's pick:
function random(array) {
    totalPicks = array.length;
    const randomPick = (Math.floor(Math.random() * totalPicks))
    // console.log(totalPicks)
    // console.log(randomPick)
    // console.log(array[randomPick])
    return array[randomPick]
}
//DETERMINING WINNER!!!!!!
const youWinElement = document.getElementById('outcome');

function determineWinner(userChoice, computerChoice) {
    computersChoiceElement.src = `images/icon-${computerChoice}.svg`
    //TRY AGAIN!!
    if (userChoice === computerChoice) {
        youWinElement.textContent = 'TRY AGAIN';

        // console.log('try again', userChoice, computerChoice)
        return
    }

    if (userChoice === 'rock' && computerChoice === 'scissors') {
        youWinElement.textContent = 'YOU WIN';
        // console.log('you win', userChoice, computerChoice)
        increaseScore()
        return
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        youWinElement.textContent = 'YOU WIN';
        // console.log('you win', userChoice, computerChoice)
        increaseScore()
        return
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        youWinElement.textContent = 'YOU WIN';
        // console.log('you win', userChoice, computerChoice)
        increaseScore()
        return
    }
    youWinElement.textContent = 'YOU LOSE';
    decreaseScore()
    return
}

//SCORE!!!!
// const scoreResetElemenet = document.getElementById('reset-1')


// where should we use this function?
function increaseScore(){
    score++
    scoreElemenet.textContent = score;
    // return num + 1
}

function decreaseScore(){
    if (score <= 0) {
        score = 0;
        scoreElemenet.textContent = score;
        return;
        
    }
    score--;
    scoreElemenet.textContent= score;
    return score;
}

const startOverElement = document.getElementById('reset-1');
startOverElement.addEventListener("click", PlayAgain)

function PlayAgain(){
    if (score > 0){
        score = 0;
        scoreElemenet.textContent = score;
    }
        youWinElement.textContent = '';
        PlayAgain()
        return
    
}

