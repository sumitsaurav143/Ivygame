import './App.css';
import { useState } from 'react';
import Pic1 from '../src/pic1.png';
import Pic2 from '../src/pic2.png';
import Pic3 from '../src/pic3.png';
import Pic4 from '../src/pic4.png';
import Pic5 from '../src/pic5.png';
//import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
  const Data = [{
    id: 1,
    img: Pic1,
    ques: 'Which label is this loader belongs to?',
    answer: "BETMGM",
    options: ["BETMGM", "GALABINGO", "PARTYPOKER", "LADBROKES"]
  }, {
    id: 2,
    img: Pic2,
    ques: 'Which label is this tournament section belongs to?',
    answer: "PARTYPOKER",
    options: ["BETMGM", "LADBROKES", "PARTYPOKER", "CORAL.UK"]
  },
  {
    id: 3,
    img: Pic3,
    ques: 'Which label is this footer belongs to?',
    answer: "BWIN.COM",
    options: ["BWIN.COM", "GALABINGO", "CORAL.UK", "LADBROKES"]
  },
  {
    id: 4,
    img: Pic4,
    ques: 'Which label is this home page/betslip section belongs to?',
    answer: "LADBROKES",
    options: ["BETMGM", "GALABINGO", "PARTYPOKER", "LADBROKES"]
  },
  {
    id: 5,
    img: Pic5,
    ques: 'Which label is this home page belongs to?',
    answer: "CORAL.UK",
    options: ["PARTYPOKER", "CORAL.UK", "LADBROKES", "BETMGM"]
  }];

  var [counter, setCounter] = useState(0);
  var [isDone, setIsdone] = useState(false);
  var [score, setScore] = useState(0);
  var [startGame, setStartGame] = useState(false);

  const Next = (ans) => {
    //alert(ans);
    if (Data[counter - 1].answer === ans) {
      setScore(score += 100);
    } else {
      setScore(score -= 50);
    }
    if (counter === 5) {
      setIsdone(true);
    } else
      setCounter(counter + 1);

  }

  const startGameFn = () => {
    setStartGame(true);
    setCounter(counter + 1);
  }


  return (
    <div className="App">
      <div className="Header">
        <h1>IVY GUESSING GAME</h1>
      </div>

      <div>
        <div className="GameMainDiv">
          {!isDone ?
            <>
              <div className="GameDiv1">
                <div className="GameInstruction">
                  <h2>Game Instructions:-</h2>
                  <ul>
                    <li>1. We are showing a screenshot part of a label of ivy, please guess the label name correctly to earn points.</li>
                    <li>2. Each image will be shown in screenshot section, guess correct label to see next image.</li>
                    <li>3. Total 5 Images will shown. Each correct answer give you 100points and wrong will deduct 50 points.</li>
                  </ul>
                </div>
                <div>
                  <div className="GamePonitInstruction">
                    <h5>Correct Guess : 100pts</h5>
                  </div>
                  <div className="GamePonitInstruction">
                    <h5>Wrong Guess : -50pts</h5>
                  </div>
                </div>
                <div>
                  <h1>{counter}/5</h1>
                  <p>Attempted</p>
                </div>
              </div>
              <div className="GameDiv2">
                {startGame ? <>
                  <div className="Imgdiv">
                    <h4>Screenshot </h4>
                    <img src={Data[counter - 1].img} width="500" height="500"></img>
                  </div>
                  <div className="Ansdiv">
                    <h3>{Data[counter - 1].ques}</h3>

                    <button className="option" onClick={() => Next(`${Data[counter - 1].options[0]}`)}>{Data[counter - 1].options[0]}</button>
                    <button className="option" onClick={() => Next(`${Data[counter - 1].options[1]}`)}>{Data[counter - 1].options[1]}</button>
                    <button className="option" onClick={() => Next(`${Data[counter - 1].options[2]}`)}>{Data[counter - 1].options[2]}</button>
                    <button className="option" onClick={() => Next(`${Data[counter - 1].options[3]}`)}>{Data[counter - 1].options[3]}</button>

                  </div>
                </>
                  : <button className="option" onClick={() => startGameFn()}>START</button>}
              </div>
            </>
            : <div className='Final'>
              <Confetti
                width="1248px"
                height="650px"
              />
              <h1>  Game Over 😁</h1>
              <h3> 🏆 Your Score: {score}/500 🏆</h3></div>}
        </div>
      </div>
    </div>
  );
}

export default App;
