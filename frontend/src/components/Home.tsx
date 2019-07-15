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
        <span>Your quest is to vanquish the dragons with as few fought rounds as possible.</span><br />
        <span>Green Dragon, the final boss, appears when you have collected all the equipment.</span><br />
        <span>Losing all your money or getting crushed by the Green Dragon ends the game.</span><br />
        <span>Winning a fight earns you 3 gold, getting defeated makes you lose 2 gold.</span><br />
      </div>
      <HighScores />
    </div>
  );
}

export default Home;