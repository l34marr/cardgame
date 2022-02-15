import React from 'react';

const PlayingCard = (props) => {

    return (
        <div>
          <img src={require(`../cards/${props.cgr}${props.num}.jpg`)} width='65%' alt='Display Card' />
        </div>
    );
}

export default PlayingCard;
