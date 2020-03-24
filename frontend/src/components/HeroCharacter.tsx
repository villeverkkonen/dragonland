import React from 'react'
import HeroStats from './HeroStats'
import LifeBar from './LifeBar'

interface HeroCharacterProps {
  maxHit: number
  life: number
  hitAmount: number
  fightOn: boolean
  fightOver: boolean
  heroWon: boolean
}

const HeroCharacter = (props: HeroCharacterProps) => {
  return (
    <div className="battlefield-character hero-character">
      <HeroStats />
      <LifeBar
        life={props.life}
        fightOn={props.fightOn}
        fightOver={props.fightOver}
        hitAmount={props.hitAmount}
      />
      {props.fightOver && !props.fightOn ? (
        props.heroWon ? (
          <img
            src="/images/hero.png"
            alt="hero"
            className="battlefield-character-image"
            id="hero-character"
          />
        ) : (
          <img
            src="/images/hero.png"
            alt="hero"
            className="battlefield-character-image invisible-img"
            id="hero-character"
          />
        )
      ) : (
        <img
          src="/images/hero.png"
          alt="hero"
          className="battlefield-character-image"
          id="hero-character"
        />
      )}
    </div>
  )
}

export default HeroCharacter
