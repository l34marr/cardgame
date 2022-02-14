import React, { useState } from 'react';
import PlayingCard from './components/PlayingCard'
import Stars from './components/Stars'
import './App.scss';

const App = () => {
  //const num1 = Math.floor(Math.random() * Math.floor(13));

  const colors = ['bdm', 'bdf']
  const divStyle = { margin: '0 10px' };
  const [ saniyaScore, setSaniyaScore ] = useState(0);
  const [ daddyScore, setDaddyScore ] = useState(0);
  const [ saniyaNum, setSaniyaNum ] = useState(1);
  const [ daddyNum, setDaddyNum ] = useState(1);
  const [ saniyaColor, setSaniyaColor ] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [ daddyColor, setDaddyColor ] = useState(colors[Math.floor(Math.random() * colors.length)]);


  const randomColorAndNumber = () => {
    const colors = ['bdm', 'bdf']
    setSaniyaNum(Math.floor(Math.random() * 10) + 1)
    setDaddyNum(Math.floor(Math.random() * 10) + 1)
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

  const drawBlindDateMan = () => {
    const colors = ['bdm']
    setDaddyNum(Math.floor(Math.random() * 10) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawBlindDateWoman = () => {
    const colors = ['bdf']
    setDaddyNum(Math.floor(Math.random() * 10) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }


  return (
    <div className="container">
      <section className="section">
        <div className="title has-text-white">WealthFlow Sand Table</div>
        <div className="columns">
          <div className="column">
            <button className="button is-warning" onClick={drawBlindDateMan} style={divStyle}>BlindDate Man</button>
            <button className="button is-warning" onClick={drawBlindDateWoman}>BlindDate Woman</button>
          </div>
          <div className="column">
            <PlayingCard num={daddyNum} player="Daddy" color={daddyColor}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
