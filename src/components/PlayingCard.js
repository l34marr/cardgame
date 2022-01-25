import React, { useState } from 'react';

const PlayingCard = (props) => {

    return (
        <div>
          <img src={require(`../cards/${props.color}${props.num}.jpg`)} />
        </div>
    );
}

export default PlayingCard;
