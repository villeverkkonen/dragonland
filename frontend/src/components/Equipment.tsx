import React from 'react';
import { EquipmentType } from '../store/equipment/types';

interface EquipmentProps {
  equipment: EquipmentType
}

const Equipment = (props: EquipmentProps) => {
  return (
    <div className="equipment">
      <p>Name: {props.equipment.title}</p>
      <p>Stats: {props.equipment.stats}</p>
      <img src={props.equipment.imageUrl} alt={props.equipment.title} className="equipment-img" />
    </div>
  );
}

export default Equipment;