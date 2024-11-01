let userScore = 0;
let compScore = 0;

let player = document.getElementById('player');
let playerContainer = document.getElementById('player-container');
let playerPic = document.getElementById('player-pic')
let compPic = document.getElementById("angry-comp")
let userChoice;
let userPick = document.getElementById('user-pick');
let compChoice;
let compPick = document.getElementById('computer-pick');
let computerChoiceElement;
let playerImage = document.getElementById('player-image');
const picks = [userPick, compPick]
picks.forEach(elem => {
    elem.firstElementChild.style.display = 'none'
})

window.addEventListener("click", (e) => {
    console.log(e);
})

const userScoreCountElement = document.getElementById('user-score-count');
const compScoreCountElement = document.getElementById('comp-score-count');

let compArr = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

let compTextArr = ['Computer: You suck at this game!', 'Computer: You are trash!',
    'Computer: Man, I thought you were the best!', 'Computer: You just need to forfeit this game!',
    'Computer: You are real shitty at this game!'];
let userTextArr = ["Player: Comp, you are no match for me!", "Player: I thought you were AI intelligence?",
    "Player: You call me trash, you are a garbage dump!"];


const youWinElement = document.getElementById('who-won');
const tryAgainElement = document.getElementById('try-again');

let sectionDiv = document.getElementById('geo');
sectionDiv.addEventListener('click', handleUserPick);

function youWin(){
    if(userScoreCountElement > compScoreCountElement){
        
    }
}

function handleUserPick(e) {
    if (e.target.classList.contains("icon")) {
        playerPic.style.display = "none";
        userChoice = e.target.parentElement.id;
        let compChoice = random(compArr);

        compArr.forEach(str => picks.forEach(elem => {
            // console.log(str);
            // console.log(elem);
            let pic = elem.firstElementChild
            pic.style.display = 'inline-block'
            pic.classList.add('icon')
            // console.log(pic);
            if (elem.classList.contains(str)) {
                elem.classList.remove(str)
            }
            if (elem.id === 'user-pick') {
                pic.src = `images/icon-${userChoice}.svg`;
                elem.classList.add(`${userChoice}`)
            } else {
                pic.src = `images/icon-${compChoice}.svg`;
                elem.classList.add(`${compChoice}`)
            }
        }))

        determineWinner(userChoice, compChoice);
    }
};

const startOverElement = document.getElementById('reset');
startOverElement.addEventListener('click', playAgain);

// Computer's Random Pick Function:
function random(arr) {
    const totalPick = arr.length;
    const randomPick = Math.floor(Math.random() * totalPick);
    return arr[randomPick];
};

// Determine Winner Function:
function determineWinner(user, comp) {
    if (user === 'rock') {
        switch (comp) {
            case 'paper':
            case 'spock':
                youWinElement.textContent = random(compTextArr);
                increaseCompScore();
                break;
            case 'scissors':
            case 'lizard':
                youWinElement.textContent = random(userTextArr);
                increaseUserScore();
                break;
            default:
                youWinElement.textContent = 'Try Again!';
        };
    };

    if (user === 'paper') {
        switch (comp) {
            case 'rock':
            case 'lizard':
                youWinElement.textContent = random(compTextArr);;
                increaseCompScore();
                break;
            case 'scissors':
            case 'spock':
                youWinElement.textContent = random(userTextArr);
                increaseUserScore();
                break;
            default:
                youWinElement.textContent = 'Try Again!';
        };
    };

    if (user === 'scissors') {
        switch (comp) {
            case 'lizard':
            case 'rock':
                youWinElement.textContent = random(compTextArr);
                increaseCompScore();
                break;
            case 'paper':
            case 'spock':
                youWinElement.textContent = random(userTextArr);
                increaseUserScore();
                break;
            default:
                youWinElement.textContent = 'Try Again!';
        };
    };

    if (user === 'spock') {
        switch (comp) {
            case 'scissors':
            case 'lizard':
                youWinElement.textContent = random(compTextArr);
                increaseCompScore();
                break;
            case 'paper':
            case 'rock':
                youWinElement.textContent = random(userTextArr);
                increaseUserScore();
                break;
            default:
                youWinElement.textContent = 'Try Again!';
        };
    };

    if (user === 'lizard') {
        switch (comp) {
            case 'paper':
            case 'rock':
                youWinElement.textContent = random(compTextArr);
                increaseCompScore();
                break;
            case 'scissors':
            case 'spock':
                youWinElement.textContent = random(userTextArr);
                increaseUserScore();
                break;
            default:
                youWinElement.textContent = 'Try Again!';
        };
    };
};

// Increase User Score:
function increaseUserScore() {
    playerPic.style.display = "block";
    compPic.style.display = "none";
    userScore++;
    userScoreCountElement.textContent = userScore;
    console.log(userScore);
};

// Increase Comp Score:
function increaseCompScore() {
    compPic.style.display = "block";
    playerPic.style.display = "none";
    compScore++;
    compScoreCountElement.textContent = compScore;
    console.log(compScore);
};

// Play Again Function:
function playAgain() {
    userScore = 0;
    compScore = 0;
    userScoreCountElement.textContent = userScore;
    compScoreCountElement.textContent = compScore;
    youWinElement.textContent = "";
    compPic.style.display = "none";
    playerPic.style.display = "none";
    compArr.forEach(str => picks.forEach(elem => {
        let pic = elem.firstElementChild
        pic.style.display = "none"
        if (elem.classList.contains(str)) {
            elem.classList.remove(str)
        }
    }))
};