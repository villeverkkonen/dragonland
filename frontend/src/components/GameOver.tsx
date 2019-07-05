import React from 'react';

const GameOver = () => {
  return (
    <div className="gameover">
      <h3>The dragons took over the land.</h3>
      <h3>Try again with a new hero!</h3>
      <img src="/images/dragon.png" alt="dragon" className="gameover-dragon reverse-img" />
      <img src="/images/dragon.png" alt="dragon" className="gameover-dragon" />
    </div>
  );
}

export default GameOver;