import React, { useState } from 'react';
import PlayingCard from './components/PlayingCard'
import './App.scss';

const App = () => {

  const cgrs = ['default']
  const divStyle = { fontSize: 'x-large', margin: '0px 10px 25px 0px', width: '45%' };
  const [ curStage, setCurStage ] = useState('stw');
  const [ curCards, setCurCards ] = useState([]);
  const [ cardNum, setCardNum ] = useState(1);
  const [ cardCgr, setCardCgr ] = useState(cgrs[Math.floor(Math.random() * cgrs.length)]);


  const drawSideline = () => {
    const cgrs = ['slj']
    setCardNum(Math.floor(Math.random() * 20) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawFinance = () => {
    const cgrs = ['fnc']
    setCardNum(Math.floor(Math.random() * 20) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawRealEstate = () => {
    const cgrs = ['est']
    setCardNum(Math.floor(Math.random() * 20) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawCorporate = () => {
    const cgrs = ['cpr']
    setCardNum(Math.floor(Math.random() * 30) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawAwareness = () => {
    const cgrs = ['awr']
    setCardNum(Math.floor(Math.random() * 54) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawQuotes = () => {
    const cgrs = ['quo']
    setCardNum(Math.floor(Math.random() * 26) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawBlindDateMan = () => {
    const cgrs = ['bdm']
    setCardNum(Math.floor(Math.random() * 10) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawBlindDateWoman = () => {
    const cgrs = ['bdf']
    setCardNum(Math.floor(Math.random() * 10) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawCounterFlow = () => {
    const cgrs = ['ctr']
    setCardNum(Math.floor(Math.random() * 54) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawCharity = () => {
    const cgrs = ['chr']
    setCardNum(Math.floor(Math.random() * 17) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }

  const drawProject = () => {
    const cgrs = ['prj']
    setCardNum(Math.floor(Math.random() * 30) + 1)
    setCardCgr(cgrs[Math.floor(Math.random() * cgrs.length)])
  }


  return (
    <div className="container">
      <section className="section">
        <div className="title has-text-white">WealthFlow Sand Table</div>
        <div className="columns">
          <div className="column">
            <button className="button is-warning" onClick={drawSideline} style={divStyle}>副業</button>
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
            <PlayingCard num={cardNum} player="Daddy" cgr={cardCgr}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
