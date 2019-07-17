import React from 'react';
import DragonStats from './DragonStats';
import LifeBar from './LifeBar';

interface DragonCharacterProps {
  maxHit: number;
  life: number;
  hitAmount: number;
  fightOn: boolean;
  fightOver: boolean;
  heroWon: boolean;
  everyEquipmentCollected: boolean;
};

const DragonCharacter = (props: DragonCharacterProps) => {
  return (
    <div className="battlefield-character dragon-character">
      <DragonStats maxHit={props.maxHit} />
      <LifeBar
        life={props.life}
        fightOn={props.fightOn}
        fightOver={props.fightOver}
        hitAmount={props.hitAmount}
      />
      {props.fightOver && !props.fightOn
      ?
        !props.heroWon
        ?
          props.everyEquipmentCollected
          ? <img src="/images/dragon-boss.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
          : <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
        : <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image invisible-img" id="dragon-character" />
      :
        props.everyEquipmentCollected
        ? <img src="/images/dragon-boss.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
        : <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
      }
    </div>
  );
};

export default DragonCharacter;