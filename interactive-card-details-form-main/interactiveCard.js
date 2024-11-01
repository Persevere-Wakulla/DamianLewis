const displayUserName = document.getElementById('display-name');
const displayCardNumber = document.getElementById('displaycard-num');
const confirmBtn = document.getElementById('confirm');
const userInput = document.getElementById('input');

confirmBtn.addEventListener('click', handleClick);
displayUserName.addEventListener('input', handleKeyPress);
// function handleClick(event){
//     const name = nameEle.value
// }
function handleKeyPress(event){
    if (event.key === 'enter') {
        displayUserName.textContent = userInput;
      }
      const userInput = input.value;

}

function handleClick(event) {

  event.preventDefault();
  const userInput = displayUserInput.value;
  // userInputEle.value = '';
  displayUserName.textContent = userInput;

}


const form = document.getElementById('form');
const userInputEle = document.getElementById('userInput');
const display = document.getElementById('display');
const submitBtn = document.getElementById('submit');

// button to listen for a click event
submitBtn.addEventListener('click', handleClick);
// userInputEle.addEventListener('input', handleKeyPress);
userInputEle.addEventListener('keypress', handleKeyPress);
function handleKeyPress(event) {
  // event.target grabbing element
  console.dir(event);
  if (event.key === 'enter') {
    display.textContent = userInput;
  }
  const userInput = userInputEle.value;
}

userInputEle.addEventListener('keypress', handleKeyPress);
function handleKeyPress(event) {
  // event.target grabbing element
  console.dir(event);
  if (event.key === 'enter') {
    display.textContent = userInput;
  }
  const userInput = userInputEle.value;
}