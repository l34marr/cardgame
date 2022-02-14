import React, { useState } from 'react';
import PlayingCard from './components/PlayingCard'
import Stars from './components/Stars'
import './App.scss';

const App = () => {
  //const num1 = Math.floor(Math.random() * Math.floor(13));

  const colors = ['bdm', 'bdf']
  const divStyle = { fontSize: 'x-large', margin: '0px 10px 25px 0px', width: '45%' };
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
            <button className="button is-warning" onClick={drawSidelineJob} style={divStyle}>副業</button>
            <button className="button is-warning" onClick={drawFinance} style={divStyle}>金融</button>
            <button className="button is-warning" onClick={drawRealEstate} style={divStyle}>地產</button>
            <button className="button is-warning" onClick={drawCorporate} style={divStyle}>企業</button>
            <button className="button is-warning" onClick={drawAwareness} style={divStyle}>覺察</button>
            <button className="button is-warning" onClick={drawQuotes} style={divStyle}>行情</button>
            <button className="button is-warning" onClick={drawBlindDateMan} style={divStyle}>相親男</button>
            <button className="button is-warning" onClick={drawBlindDateWoman} style={divStyle}>相親女</button>
            <button className="button is-warning" onClick={drawCounterFlow} style={divStyle}>逆流</button>
            <button className="button is-warning" onClick={drawCharity} style={divStyle}>慈善</button>
            <button className="button is-warning" onClick={drawProject} style={divStyle}>項目</button>
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
