import { useState, useEffect } from 'react';
import './odin.css';

const cardPics = [
  {
    image: './public/images/anne-boonchay.png'
  },
  {
    image: './public/images/captain-grime.png'
  },
  {
    image: './public/images/hop-pop-plantar.png'
  },
  {
    image: './public/images/leopold-loggle.png'
  },
  {
    image: './public/images/maddle-flour.png'
  },
  {
    image: './public/images/mayor-toadstool.png'

  },
  {
    image: './public/images/polly-plantar.png'
  },
  {
    image: './public/images/saddle-croaker.png'
  },
  {
    image: './public/images/sasha.png'
  },
  {
    image: './public/images/sprig-plantar.png'
  },
  {
    image: './public/images/sylvia-sundew.png'
  },
  {
    image: './public/images/wally.png'
  },
  
];

export default function OdinGame() {
  const [card, setCard] = useState([])
  const [cardArr, setCardArr] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
    setCardArr([...shuffleArray(cardPics)])
  }, [card])

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
    if (score === 0) {
      setCard([])
    }
  }, [score])

  const cardMap = cardArr.map((card, index) => (
    <div className='card' onClick={handleCard} key={index}>
      <img className='img' src={card.image} alt="toon-pics" />
    </div>
  ))

  function handleCard(e) {
    if (!card.includes(e.target.src)) {
      setCard([...card, e.target.src])
      console.log(score);
      setScore(score + 1)
    } else {
      setGameOver(true)
      setScore(0)
    }
  }

  function newGame() {
    setScore(0)
    setCardArr([])
  }
  return (
    <div className='game-container'>
<img src="./public/reactOne.png" alt="" />
      <div className='flex-header'>
        <div className='title'>
          <h1 className='title'>Amphibia Memory Game</h1>
          <p>Get points by clicking on an image but don't
            click on any more than once!</p>
        </div>

        <div className='scroe-container'>
          <p className='score'>Score: <span id='score'>{score}</span></p>
          <p className='b-score'>Best score: <span id='bets-score'>{bestScore}</span></p>
        </div>
      </div>
      <div className='wrapper'>
        {!gameOver && cardMap}
      <div className='game-over'>{!gameOver ? 
      <CardContainer random={cardArr} clickFunc={handleCard} /> :
        <h2 id='animation' onClick={() => setGameOver(false)}>Click Here To Start Over</h2>}
      </div>
      </div>
    </div >
  )
};

function CardContainer() {
  
}




  // const handleClick = (e)=> {
  //   if (!clicked.includes(e.target.src)){
  //     setClicked([...clicked, e.target.src])
  //     setScore(prev => prev+1)
  //   }else{

  //     setGameOver(prev => !prev)
  //   }
  // }