import React, { useState } from 'react';
import PlayingCard from './components/PlayingCard'
import Stars from './components/Stars'
import './App.scss';

const App = () => {
  //const num1 = Math.floor(Math.random() * Math.floor(13));

  const colors = ['bdm', 'bdf']
  const divStyle = { margin: '0 10px 10px' };
  const [ saniyaScore, setSaniyaScore ] = useState(0);
  const [ daddyScore, setDaddyScore ] = useState(0);
  const [ saniyaNum, setSaniyaNum ] = useState(1);
  const [ daddyNum, setDaddyNum ] = useState(1);
  const [ saniyaColor, setSaniyaColor ] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [ daddyColor, setDaddyColor ] = useState(colors[Math.floor(Math.random() * colors.length)]);


  const drawSidelineJob = () => {
    const colors = ['slj']
    setDaddyNum(Math.floor(Math.random() * 20) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawFinance = () => {
    const colors = ['fnc']
    setDaddyNum(Math.floor(Math.random() * 20) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawRealEstate = () => {
    const colors = ['est']
    setDaddyNum(Math.floor(Math.random() * 20) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawCorporate = () => {
    const colors = ['cpr']
    setDaddyNum(Math.floor(Math.random() * 30) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawAwareness = () => {
    const colors = ['awr']
    setDaddyNum(Math.floor(Math.random() * 54) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawQuotes = () => {
    const colors = ['quo']
    setDaddyNum(Math.floor(Math.random() * 26) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
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

  const drawCounterFlow = () => {
    const colors = ['ctr']
    setDaddyNum(Math.floor(Math.random() * 54) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawCharity = () => {
    const colors = ['chr']
    setDaddyNum(Math.floor(Math.random() * 17) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const drawProject = () => {
    const colors = ['prj']
    setDaddyNum(Math.floor(Math.random() * 30) + 1)
    setDaddyColor(colors[Math.floor(Math.random() * colors.length)])
  }


  return (
    <div className="container">
      <section className="section">
        <div className="title has-text-white">WealthFlow Sand Table</div>
        <div className="columns">
          <div className="column">
            <button className="button is-warning" onClick={drawSidelineJob} style={divStyle}>SidelineJob</button>
            <button className="button is-warning" onClick={drawFinance} style={divStyle}>Finance</button>
            <button className="button is-warning" onClick={drawRealEstate} style={divStyle}>RealEstate</button>
            <button className="button is-warning" onClick={drawCorporate} style={divStyle}>Corporate</button>
            <button className="button is-warning" onClick={drawAwareness} style={divStyle}>Awareness</button>
            <button className="button is-warning" onClick={drawQuotes} style={divStyle}>Quotes</button>
            <button className="button is-warning" onClick={drawBlindDateMan} style={divStyle}>BlindDateMan</button>
            <button className="button is-warning" onClick={drawBlindDateWoman} style={divStyle}>BlindDateWoman</button>
            <button className="button is-warning" onClick={drawCounterFlow} style={divStyle}>CounterFlow</button>
            <button className="button is-warning" onClick={drawCharity} style={divStyle}>Charity</button>
            <button className="button is-warning" onClick={drawProject} style={divStyle}>Project</button>
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
