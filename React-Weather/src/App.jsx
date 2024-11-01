import './components/weather.css'


const weather = [
  {
    image: 'src/assets/sunny.png',
    message: 'Sunny all day'
  },
  {
    image: 'src/assets/windy.png',
    message: 'Windy'
  },
  {
    image: 'src/assets/partly cloudy.png',
    message: 'Partly cloudy'
  },
  {
    image: 'src/assets/cloudy.png',
    message: 'Cloudy with chance of rain'
  },
  {
    image: 'src/assets/stormy.png',
    message: 'Thounder storm with a few lightning'
  },
  {
    image: 'src/assets/rainy.png',
    message: 'Rainy all day'

  },
  {
    image: 'src/assets/snow and rain.png',
    message: 'A mixer of snow and rain'
  },
  {
    image: 'src/assets/snowing.png',
    message: 'Snowing'
  },
];

const week = [
  {
    days: 'Sunday',
  },
  {
    days: 'Monday',
  },
  {
    days: 'Tuesday',
  },
  {
    days: 'wednesday',
  },
  {
    days: 'Thursday',
  },
  {
    days: 'Friday',
  },
  {
    days: 'Saturday',
  }
];


function random() {
  return Math.floor(Math.random() * 110)
}
const DayOne = ({ name, temp, pic }) => {
  let img
  let text

  if (temp >= 90) {
    img = weather[0].image
    text = weather[0].message
  }
  else if (temp >= 86 && temp <= 89) {
    img = weather[1].image
    text = weather[1].message
  } else if (temp >= 76 && temp <= 85) {
    img = weather[2].image
    text = weather[2].message
  } else if (temp >= 56 && temp <= 75) {
    img = weather[3].image
    text = weather[3].message
  } else if (temp >= 36 && temp <= 55) {
    img = weather[4].image
    text = weather[4].message
  } else if (temp >= 21 && temp <= 35) {
    img = weather[5].image
    text = weather[5].message
  } else if (temp >= 10 && temp <= 20) {
    img = weather[6].image
    text = weather[6].message
  } else if (temp >= 0 && temp <= 9) {
    img = weather[7].image
    text = weather[7].message
  }
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <h2 className="name">{temp}</h2>
      <h2 className="temp">{temp > 95 && <p>Gunna Be Supper Hot 🥵</p>}</h2>
      {temp >= 80 && temp <= 94 && <h2 className="name">Gunna Be Supper Hot 😎</h2>}
      {temp >= 70 && temp <= 89 && <h2 className="name">Bring an 🍃</h2>}
      {temp >= 0 && temp <= 44 && <h2 className="name">Windy☔</h2>}
      {temp >= 0 && temp <= 20 && <h2 className="name">It's Frezzing Cold 🥶</h2>}
      <img className="img" src={img} />
      <p className="text">{text}</p>
    </div>
  )
};



export default function App() {
  return (
    <div>
      <h1 className="header">Weather Check</h1>
      <DayOne name='Sunday' temp={random()} />
      <DayOne name='Monday' temp={random()} />
      <DayOne name='Tuseday' temp={random()} />
      <DayOne name='Wednesday' temp={random()} />
      <DayOne name='Thursday' temp={random()} />
      <DayOne name='Friday' temp={random()} />
      <DayOne name='Saturday' temp={random()} />
    </div>
  )
}


