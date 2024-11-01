const playAgain = document.getElementById('play');
playAgain.addEventListener('click', startOver);
const score = document.getElementById("score");
const outCome = document.getElementById('out-come');
const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const selections = document.getElementById('choices');
const reloadBtn = document.getElementById('btn');
selections.addEventListener('click', pickColor);
const timerDisplay = document.querySelector("#timer");
const gameContainer = document.querySelector(".game-container")
const gameOver = document.querySelector(".game-over")
let countDown = 15000;
let gameScore = 0;

// This the count Down that's set to 15 second!!!!
function timer() {
    const myCountDown = setInterval(function () {
        document.querySelector("#timer").textContent = countDown / 1000;
        if (countDown <= 0) {
            gameOver.style.display = 'block';
            gameContainer.style.display = 'none';
            clearInterval(myCountDown);
        }
        // if(countDown <= 5){
        //     timerDisplay.style.color = 'red'
        // }
        countDown -= 1000;
    }, 1000);
};

//randomly selecting my charactors//
function randomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//generating the 6 colors I need for my hex colors//
function generateColor() {
    const testArr = [1, 2, 3, 4, 5, 6];
    const randomColor = testArr.map((item) => randomItem(options));
    return '#' + randomColor.join("");
}

//these are my 3 random colors to show up//
let chosenColors = [generateColor(), generateColor(), generateColor(), generateColor()]


let colorSelector = randomItem(chosenColors);
document.querySelector('p').textContent = colorSelector;
console.log(chosenColors);
console.log(colorSelector);

const spans = document.querySelectorAll('span');
const spanArr = [...spans]

//display the colors to choose from//
spans.forEach((item, index) => (item.style.backgroundColor = chosenColors[index]));

const hexColor = document.getElementById('hex-color');
//function to restart the Game//
function restartGame() {
    chosenColors = [generateColor(), generateColor(), generateColor()]
    colorSelector = randomItem(chosenColors);
    hexColor.textContent = colorSelector;
    spans.forEach((item, index) => (item.style.backgroundColor = chosenColors[index]));
};

function pickColor(e) {
    console.log(e.target.id);
    if (chosenColors[e.target.id] === colorSelector) {
        console.log('Correct')
        restartGame();
        gameScore++
        countDown += 1000;
        score.textContent = gameScore;
        outCome.textContent = 'You Win'
    } else if (chosenColors[e.target.id] != colorSelector) {
        outCome.textContent = ' Wrong!'

        console.log('false');
    }
    // else{
    //     outCome.textContent = 'Try Again!'

    // }
};

function startOver(e) {
    timer();
    return restartGame();
}
reloadBtn.addEventListener('click', startNewGame);
function startNewGame() {
    gameContainer.style.display = 'block';
    gameOver.style.display = 'none';
    countDown = 15000;
    timerDisplay.textContent = "15";
    score.textContent = 0;
    outCome.textContent = "Lets Play";
    // select.value = "";
    // playerInput.value="";
};