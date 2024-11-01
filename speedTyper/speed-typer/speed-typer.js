const res = await fetch('words.json');
const words = await res.json();
console.dir(words);

const score = document.getElementById('score-count');
const gameContainer = document.querySelector('.game-container');
const gameOver = document.querySelector('.game-over');
const select = document.querySelector('#difficulty');
const wordDisplay = document.getElementById('word-display');
const reloadBtn = document.getElementById('btn');
const playerInput = document.getElementById('user-input');
const finalScore = document.querySelector('#final-score');
const timerDisplay = document.querySelector('#timer')
const body = document.getElementsByTagName('body');
// playerInput.addEventListener('keyup', enterWord);
let selectedLevel;



let countDown = 15000;
let gameScore = 0;
// let gameRunning = false;




function chooseGameWords (){
    const easy = words.twoLetterWords.concat(words.threeLetterWords);
    const medium = words.fourLetterWords.concat(words.fiveLetterWords);
    const hard = words.sixLetterWords;
    
    if (selectedLevel === "easy") {
        let randomWords = wordGenerator(easy);
        wordDisplay.textContent = randomWords;
        
    } else if (selectedLevel === "medium") {
        let randomWords = wordGenerator(medium);
        wordDisplay.textContent = randomWords;
        
    } else if (selectedLevel === "hard") {
        let randomWords = wordGenerator(hard);
        wordDisplay.textContent = randomWords;
    };
}

const wordGenerator = (arr) => {
    const randomWords = Math.floor(Math.random() * arr.length);
    return arr[randomWords]
};

// This the count Down that's set to 15 second!!!!
function timer() {
    const myCountDown = setInterval(function () {
        document.querySelector("#timer").textContent = countDown / 1000;
        if(countDown < 6){
            // timerDisplay.style.color = 'red';
            }
        if (countDown <= 5) {
            gameOver.style.display = 'block';
            gameContainer.style.display = 'none';
            clearInterval(myCountDown);
        }
        countDown -= 1000;
    }, 1000);
};

// Start New Game!!!!!!!
reloadBtn.addEventListener('click', startNewGame);
function startNewGame() {
    gameContainer.style.display = 'block';
    gameOver.style.display = 'none';
    countDown = 15000;
    timerDisplay.textContent = "15";
    score.textContent = 0;
    wordDisplay.textContent = "Select Level to Play";
    select.value = "";
    playerInput.value="";
};





select.addEventListener('change', (e) => {
    // disabledDropdown = selector
    // disabledDropdown.disabled = true;
    console.dir(e)
    selectedLevel = select.value;
    timer();
    console.log(selectedLevel);
    // gameRunning = true;
    playerInput.focus();
    chooseGameWords()

})





playerInput.addEventListener('keyup', (e) => {
    console.log(e);
    if (playerInput.value === wordDisplay.textContent) {
        playerInput.value = "";
        chooseGameWords()
        gameScore++
        score.textContent = gameScore;
        finalScore.textContent = gameScore;
        countDown += 2000;
    }
})
