import React, { useState } from 'react';
import logo from './logo.svg';
import PlayingCard from './components/PlayingCard'
import Stars from './components/Stars'
import './App.scss';

const App = () => {
  //const num1 = Math.floor(Math.random() * Math.floor(13));


  const generateRandom = () => {
    return Math.floor(Math.random() * 13) + 1
  }


  return (
    <div className="container">
      <section className="section">
        <div className="title has-text-white">Hi Welcome to the card game</div>
        <div className="columns">
          <div className="column">
            <PlayingCard generateRandom={generateRandom} player="Saniya" />
          </div>
          <div className="column">
            <Stars />
          </div>
          <div className="column">
            <PlayingCard generateRandom={generateRandom} player="Daddy" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column">
            <p className="has-text-white is-uppercase has-text-danger has-text-centered">Saniya Score</p>
            <hr />
          </div>
          <div className="column"></div>
          <div className="column">
            <p className="has-text-white is-uppercase has-text-primary has-text-centered">Daddy Score</p>
            <hr />
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
