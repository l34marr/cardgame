import React, { useState } from 'react';

const PlayingCard = (props) => {

  const [num, setNum ] = useState(props.generateRandom);

  const randomColor = () => {
    const colors = ['S', 'H', 'C', 'D']
    const color = colors[Math.floor(Math.random() * colors.length)]
    return color;
  }

  const [color, setColor ] = useState(randomColor);

  const generateRandom = () => {
    return Math.floor(Math.random() * 13) + 1
  }


  const randomColorAndNumber = () => {
    setColor(randomColor)
    setNum(props.generateRandom)
  }



    return (
        <div>
        <img src={require(`../cards/${num}${color}.svg`)} />
        <br/>
        <button className="button is-warning" onClick={randomColorAndNumber}>{props.player}</button>
        </div>
    );
}

export default PlayingCard;
