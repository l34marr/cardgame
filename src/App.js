import React, { useState } from 'react';
import logo from './logo.svg';
import PlayingCard from './components/PlayingCard'
import Stars from './components/Stars'
import './App.scss';

const App = () => {
  //const num1 = Math.floor(Math.random() * Math.floor(13));

  const colors = ['S', 'H', 'C', 'D']
  const [ saniyaScore, setSaniyaScore ] = useState(0);
  const [ daddyScore, setDaddyScore ] = useState(0);
  const [ saniyaNum, setSaniyaNum ] = useState(1);
  const [ daddyNum, setDaddyNum ] = useState(1);
  const [ saniyaColor, setSaniyaColor ] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [ daddyColor, setDaddyColor ] = useState(colors[Math.floor(Math.random() * colors.length)]);


  const randomColorAndNumber = () => {
    const colors = ['S', 'H', 'C', 'D']
    setSaniyaNum(Math.floor(Math.random() * 13) + 1)
    setDaddyNum(Math.floor(Math.random() * 13) + 1)
    setSaniyaColor(colors[Math.floor(Math.random() * colors.length)])
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
    if (saniyaNum > daddyNum) {
      setSaniyaScore(saniyaScore + 1) 
    }
    else{
      setDaddyScore(daddyScore + 1)
    }
    console.log(saniyaScore)
  }


  return (
    <div className="container">
      <section className="section">
        <div className="title has-text-white">Hi Welcome to the card game</div>
        <div className="columns">
          <div className="column">
            <PlayingCard num={saniyaNum} player="Saniya" color={saniyaColor} />
          </div>
          <div className="column">
            <button className="button is-warning" onClick={randomColorAndNumber}>Play</button>
          </div>
          <div className="column">
            <PlayingCard num={daddyNum} player="Daddy" color={daddyColor}/>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column">
            <p className="has-text-white is-uppercase has-text-danger has-text-centered">Daddy</p>
            <hr />
            <div className="columns">
              <div className="column">
                <p className="is-size-1 has-text-white has-text-centered">{saniyaScore}</p>
              </div>
              <div className="column">
                <p className="is-size-1 has-text-centered">{ saniyaScore > daddyScore ? <Stars /> : null}</p>
              </div>
            </div>
          </div>
          <div className="column"></div>
          <div className="column">
            <p className="has-text-white is-uppercase has-text-primary has-text-centered">Child</p>
            <hr />
            <div className="columns">
              <div className="column">
                <p className="is-size-1 has-text-white has-text-centered">{daddyScore}</p>
              </div>
              <div className="column">
                <p className="is-size-1 has-text-centered">{ daddyScore > saniyaScore ? <Stars /> : null}</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
