const deckOfCards = [
  {
    suit: 'hearts',
    value: 2,
    img: './SVG-cards-1.3/2_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 3,
    img: './SVG-cards-1.3/3_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 4,
    img: './SVG-cards-1.3/4_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 5,
    img: './SVG-cards-1.3/5_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 6,
    img: './SVG-cards-1.3/6_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 7,
    img: './SVG-cards-1.3/7_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 8,
    img: './SVG-cards-1.3/8_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 9,
    img: './SVG-cards-1.3/9_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 10,
    img: './SVG-cards-1.3/10_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 'J',
    img: './SVG-cards-1.3/jack_of_hearts2.svg'
  },
  {
    suit: 'hearts',
    value: 'Q',
    img: './SVG-cards-1.3/queen_of_hearts2.svg'
  },
  {
    suit: 'hearts',
    value: 'K',
    img: './SVG-cards-1.3/king_of_hearts2.svg'
  },
  {
    suit: 'hearts', 
    value: 'A',
    img: './SVG-cards-1.3/ace_of_hearts.svg'
  },
  {
    suit: 'diamonds',
    value: 2,
    img: './SVG-cards-1.3/2_of_diamonds.svg'
  },
  {
    suit: 'diamonds', 
    value: 3,
    img: './SVG-cards-1.3/3_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 4,
    img: './SVG-cards-1.3/4_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 5,
    img: './SVG-cards-1.3/5_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 6,
    img: './SVG-cards-1.3/6_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 7,
    img: './SVG-cards-1.3/7_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 8,
    img: './SVG-cards-1.3/8_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 9,
    img: './SVG-cards-1.3/9_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 10,
    img: './SVG-cards-1.3/10_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 'J',
    img: './SVG-cards-1.3/jack_of_diamonds2.svg'
  },
  {
    suit: 'diamonds',
    value: 'Q',
    img: './SVG-cards-1.3/queen_of_diamonds2.svg'
  },
  {
    suit: 'diamonds',
    value: 'K',
    img: './SVG-cards-1.3/king_of_diamonds2.svg'
  },
  {
    suit: 'diamonds',
    value: 'A',
    img: './SVG-cards-1.3/ace_of_diamonds.svg'
  },
  {
    suit: 'clubs',
    value: 2,
    img: './SVG-cards-1.3/2_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 3,
    img: './SVG-cards-1.3/3_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 4,
    img: './SVG-cards-1.3/4_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 5,
    img: './SVG-cards-1.3/5_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 6,
    img: './SVG-cards-1.3/6_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 7,
    img: './SVG-cards-1.3/7_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 8,
    img: './SVG-cards-1.3/8_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 9,
    img: './SVG-cards-1.3/9_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 10,
    img: './SVG-cards-1.3/10_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 'J',
    img: './SVG-cards-1.3/jack_of_clubs2.svg'
  },
  {
    suit: 'clubs',
    value: 'Q',
    img: './SVG-cards-1.3/queen_of_clubs2.svg'
  },
  {
    suit: 'clubs',
    value: 'K',
    img: './SVG-cards-1.3/king_of_clubs2.svg'
  },
  {
    suit: 'clubs',
    value: 'A',
    img: './SVG-cards-1.3/ace_of_clubs.svg'
  },
  {
    suit: 'spades',
    value: 2,
    img: './SVG-cards-1.3/2_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 3,
    img: './SVG-cards-1.3/3_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 4,
    img: './SVG-cards-1.3/4_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 5,
    img: './SVG-cards-1.3/5_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 6,
    img: './SVG-cards-1.3/6_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 7,
    img: './SVG-cards-1.3/7_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 8,
    img: './SVG-cards-1.3/8_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 9,
    img: './SVG-cards-1.3/9_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 10,
    img: './SVG-cards-1.3/10_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 'J',
    img: './SVG-cards-1.3/jack_of_spades2.svg'
  },
  {
    suit: 'spades',
    value: 'Q',
    img: './SVG-cards-1.3/queen_of_spades2.svg'
  },
  {
    suit: 'spades',
    value: 'K',
    img: './SVG-cards-1.3/king_of_spades2.svg'
  },
  {
    suit: 'spades',
    value: 'A',
    img: './SVG-cards-1.3/ace_of_spades.svg'
  },
];

//SHUFFLE FUNCTION!!!
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let playerCards = [];
let dealerCards = [];

const faceCards = ['J', 'Q', 'K'];

//BUTTONS
const deal = document.getElementById('deal');
const hitBtn = document.getElementById('hit');
const stayBtn = document.getElementById('stay');
const theme = document.getElementById('theme-btn');


//AREAS
const playerArea = document.getElementById('player-area');
const dealerArea = document.getElementById('dealer-area');



//EVENTS
deal.addEventListener('click', dealClick);
theme.addEventListener('click', handleImageSwap);

//Dark & Light Mood Image Lib.
// const imageLib = ['./icon-moon.svg', './icon-sun.svg'];

// DarkiTheme &  Light-Theme Function:
let lightMood;
function handleImageSwap(e){
  lightMood = !lightMood
  document.documentElement.classList.toggle('dark-theme');
  if (lightMood){
    theme.src = './icon-sun.svg'
  }else{
   theme.src = './icon-moon.svg'
  }
}

let shuffleDeck = shuffleArray(deckOfCards)

//DEALER FUNCTION HERE:
function dealClick(ev) {
  clearBoard()
shuffleArray(deckOfCards)
myDeck = shuffleArray(deckOfCards)
// message.textContent = ''

  console.log(ev.target)
  //shuffle the cards
  hitBtn.addEventListener('click', hitMe)
  stayBtn.addEventListener('click', stayClick)
  let shuffleDeck = shuffleArray(deckOfCards)
  // deal.removeEventListener('click', dealCard)
  
  // loop to give 2 cards per player
  for (i = 0; i < 2; i++) {
    playerCards.push(shuffleDeck.shift());
    dealerCards.push(shuffleDeck.shift());
    // playerArea.append(dealCard(playerCards[i]))
    // dealerArea.append(dealCard(dealerCards[i]))
  };
  //display the cards dealt
  // dealCard(dealerCards, dealerArea)
  // dealCard(playerCards, playerArea)
  playerCards.map(card =>{
    playerArea.append(dealCard(card))
  })
  dealerCards.map((card, index) => {
    dealerArea.append(dealCard(card))
    index === 1 ? dealerArea.firstElementChild.firstElementChild.classList.add('flipped') : null
  })


  //changing values of faces and aces
  faceValue(playerCards)
  // changeAces(playerCards)
  faceValue(dealerCards)
  // changeAces(dealerCards)

  let playerScore = reducer(playerCards)
  let dealerScore = reducer(dealerCards)
  //blackjack!!
  if (playerScore === 21 && dealerScore < 21) {
    winDouble()
  }
  if (playerScore === 21 && dealerScore === 21) {
    youTie()
  }
  if (dealerScore === 21 && playerScore < 21) {
    youLose()
  }
  console.dir(playerCards)
  console.dir(dealerCards)
};


// displaying cards function
function dealCard(card) {
  //no double dealing
  deal.removeEventListener('click', dealClick)
  //style changes
  document.querySelector('#table').style.background = "blue"
  document.querySelector('#title').innerHTML = 'Playing'
  document.querySelector('#title').style.color = 'black'

  //THIS IS WHERE I CREATE MY DIVS!!!
    // createElement
    let myScene = document.createElement('div')
    let myCard = document.createElement('div')
    let myDesign = document.createElement('div')
    let cardFront = document.createElement('div')
    let cardImg = document.createElement('img')

    cardImg.src = card.img
    // classList.add
    myScene.classList.add('scene')
    myCard.classList.add('card')
    cardFront.classList.add('card_face')
    myDesign.classList.add('my-design', 'card_face')
    cardImg.classList.add('card_face')
    //appending
    cardFront.append(cardImg)
    myCard.append(myDesign)
    myCard.append(cardFront)
    myScene.append(myCard)
    return myScene
};

//THIS IS MY HIT ME FUNCTION!!
function hitMe(e) {
  let section
  let arr
  //if I click the button
 if (!e){
  arr = dealerCards
  section = dealerArea
 } else {
  arr = playerCards
  section = playerArea
 }
  // one more card
arr.push(shuffleDeck.shift())
// display only the new one
section.append(dealCard(arr[arr.length - 1]))
// no more than 5
  if (arr.length === 5) {
    hitBtn.removeEventListener('click', hitMe)
  }
  faceValue(arr)
  if (reducer(playerCards) > 21) {
    youLose()
  }
  if (reducer(dealerCards) > 21) {
    youWin()
  }
};



// THIS IS MY STAY FUNCTION!!
function stayClick(ev) {
  hitBtn.removeEventListener('click', hitMe)
  stayBtn.removeEventListener('click', stayClick)
  // console.log(ev.target)
  // hitBtn.classList.add('hit')
  // dblBtn.classList.add('non-btn')
  // console.log('dealer', reducer(dealerCards))
  //dealer hit as long as his points are under 17
  while (reducer(dealerCards) < 17) {
    hitMe()
    faceValue(dealerCards)
  }
  // who wins?
  if (reducer(dealerCards) >= 17 && reducer(dealerCards) <= 21) {
    compare()
  }
  if (reducer(dealerCards) > 21) {
    youWin()
  }
};

//utilities
function reducer(arr) {
  let score = arr.reduce((total, current) => total + current.value, 0)
  return score
};

function faceValue(arr) {
  arr.map((card) => {
    if (faceCards.includes(card.value)) {
      card.value = 10
    }
    if (card.value === 'A') {
      card.value = 11
    }
    if (reducer(arr) > 21 && card.value === 11 ) {
      card.value = 1
    }
  })
  
};

function clearBoard(){
  playerArea.replaceChildren([])
  dealerArea.replaceChildren([])
  while (playerCards.length) {
    deckOfCards.push(playerCards.pop())
  }
  while (dealerCards.length) {
    deckOfCards.push(dealerCards.pop())
  }
}

// comparisons
function compare() {
  // DO IT!
  console.log(reducer(dealerCards), reducer(playerCards));
  let playerScore = reducer(playerCards)
  let dealerScore = reducer(dealerCards)
  if (playerScore === dealerScore) {
    youTie()
  }
  if (playerScore > dealerScore) {
    youWin()
  }
  if (playerScore < dealerScore) {
    youLose()
  }
};

// win or lose
function youLose() {
  // message.textContent = 'You Lose!'
  console.log(reducer(playerCards))
  dealerArea.firstElementChild.firstElementChild.classList.remove('flipped')
  document.querySelector('#table').style.background = "red"
  document.querySelector('#title').innerHTML = 'You Lose'
  document.querySelector('#title').style.color = 'black'
  deal.addEventListener('click', dealClick);
  hitBtn.removeEventListener('click', hitMe)
  stayBtn.removeEventListener('click', stayClick)
  return
}

function youWin() {
  // message.textContent = 'You Win!'
  dealerArea.firstElementChild.firstElementChild.classList.remove('flipped')
  document.querySelector('#table').style.background = "green"
  document.querySelector('#title').innerHTML = 'You Win'
  document.querySelector('#title').style.color = 'black'
  deal.addEventListener('click', dealClick);
  return
}

function winDouble() {
  dealerArea.firstElementChild.firstElementChild.classList.remove('flipped')
  document.querySelector('#table').style.background = "green"
  // document.querySelector('#title').innerHTML = '21! Your Money Is Doubled!'
  document.querySelector('#title').style.color = 'black'
  deal.addEventListener('click', dealClick);
  return
};

function youLose() {
  // message.textContent = 'You Lose!'
  dealerArea.firstElementChild.firstElementChild.classList.remove('flipped')
  document.querySelector('#table').style.background = 'red'
  document.querySelector('#title').innerHTML = 'You Lose'
  document.querySelector('#title').style.color = 'black'
  deal.addEventListener('click', dealClick);
  return
};

function youTie() {
  // message.textContent = 'Tie!'
  dealerArea.firstElementChild.firstElementChild.classList.remove('flipped')
  document.querySelector('#table').style.background = "orange"
  document.querySelector('#title').innerHTML = 'Try Again'
  document.querySelector('#title').style.color = 'black'
  deal.addEventListener('click', dealClick);
  return
};



//SCORE!!!!
// const scoreResetElemenet = document.getElementById('reset-1')


// where should we use this function?
// function increaseScore(){
//   score++
//   scoreElemenet.textContent = score;
  // return num + 1
// }

// function decreaseScore(){
//   if (score <= 0) {
//       score = 0;
//       scoreElemenet.textContent = score;
//       return;
      
//   }
//   score--;
//   scoreElemenet.textContent= score;
//   return score;
// }

// const startOverElement = document.getElementById('reset-1');
// startOverElement.addEventListener("click", PlayAgain)

// function PlayAgain(){
//   if (score > 0){
//       score = 0;
//       scoreElemenet.textContent = score;
//   }
//       youWinElement.textContent = '';
//       PlayAgain()
//       return
  
// }