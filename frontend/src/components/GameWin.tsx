import React from 'react';
import Highscores from './Highscores';

const GameOver = () => {
  return (
    <div className="gameover">
      <h3>Congratulations!</h3>
      <h3>The dragons have been vanquished and the land is free once and for all!</h3>
      <img src="/images/hero.png" alt="dragon" className="gameover-img" />
      <img src="/images/dragon-boss.png" alt="dragon" className="gameover-img revert-img" />
      <Highscores />
    </div>
  );
};

export default GameOver;