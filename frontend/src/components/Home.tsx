import React from 'react';
import HighScores from './Highscores';

const Home = () => {
  return (
    <div className="home">
      <h1>DragonLand</h1>
      <div className="home-introduction">
        <span className="home-introduction-1">Create a hero,</span>
        <span className="home-introduction-2">equip yourself,</span>
        <span className="home-introduction-3">slay the dragons!</span>
      </div>
      <div className="home-info">
        <span className="home-info-row">Your quest is to vanquish the dragons with as few fought rounds and hits as possible.</span>
        <span className="home-info-row">Green Dragon, the final boss, appears when you have collected all the equipment.</span>
        <span className="home-info-row">Losing all your money or getting crushed by the Green Dragon ends the game.</span>
        <span className="home-info-row">Winning a fight earns you 3 gold, getting defeated makes you lose 2 gold.</span>
      </div>
      <HighScores />
    </div>
  );
}

export default Home;