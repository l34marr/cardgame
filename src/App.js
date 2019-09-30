import React, { useState } from 'react';
import logo from './logo.svg';
import PlayingCard from './components/PlayingCard'
import './App.scss';

const App = () => {
  //const num1 = Math.floor(Math.random() * Math.floor(13));


  const generateRandom = () => {
    return Math.floor(Math.random() * 13) + 1
  }




  return (
    <div className="App-header">
        <div className="title">Hi Welcome to the card game</div>
        <div className="columns">
          <div className="column">
            <PlayingCard generateRandom={generateRandom}  player="Saniya"/>
          </div>
          <div className="column">
            <PlayingCard generateRandom={generateRandom}  player="Daddy"/>
          </div>
      </div>

    </div>
  );
}

export default App;
