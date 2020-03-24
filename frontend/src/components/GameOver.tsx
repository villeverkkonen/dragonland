import React from 'react'
import Highscores from './Highscores'

const GameOver = () => {
  return (
    <div className="gameover">
      <h3>The dragons took over the land.</h3>
      <h3>Try again with a new hero!</h3>
      <img
        src="/images/dragon.png"
        alt="dragon"
        className="gameover-img reverse-img"
      />
      <img src="/images/dragon.png" alt="dragon" className="gameover-img" />
      <Highscores />
    </div>
  )
}

export default GameOver
