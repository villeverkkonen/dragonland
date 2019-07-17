import React from 'react';
import { EquipmentType } from '../store/equipment/types';

interface EquipmentProps {
  equipment: EquipmentType;
};

const Equipment = (props: EquipmentProps) => {
  return (
    <div className="equipment">
      <p>{props.equipment.title}</p>
      {props.equipment.stats.map(stat => {
        return (
          <div key={stat.title}>
            {stat.title + ": +" + stat.points}
          </div>
        );
      })}
      <img src={props.equipment.imageUrl} alt={props.equipment.title} className="equipment-img" />
    </div>
  );
};

export default Equipment;