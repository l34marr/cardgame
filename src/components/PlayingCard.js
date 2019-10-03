import React, { useState } from 'react';

const PlayingCard = (props) => {

    return (
        <div>
          <img src={require(`../cards/${props.num}${props.color}.svg`)} />
        </div>
    );
}

export default PlayingCard;
