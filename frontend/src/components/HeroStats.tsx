import React from 'react';
import { EquipmentType } from '../store/equipment/types';

interface EquipmentProps {
  equipment: EquipmentType[];
}

const HeroStats = (props: EquipmentProps) => {
  let attack = 0, defense = 0, movement = 0;

  props.equipment.map(equip => {
    return (
      equip.stats.map(stat => {
        if (stat.title.toLowerCase() === "attack") {
          return attack += stat.points;
        } else if (stat.title.toLowerCase() === "defense") {
          return defense += stat.points;
        } else if (stat.title.toLowerCase() === "movement") {
          return movement += stat.points;
        }
        return null;
      })
    );
  })

  return (
    <div className="hero-stats">
      <p>
        <span className="left-column">Attack: </span>
        <span className="right-column">{attack}</span>
      </p>
      <p>
        <span className="left-column">Defense: </span>
        <span className="right-column">{defense}</span>
      </p>
      <p>
        <span className="left-column">Movement: </span>
        <span className="right-column">{movement}</span>
      </p>
    </div>
  );
}

export default HeroStats;