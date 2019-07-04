import { EquipmentType } from '../../equipment/types';

export const CREATE_HERO = 'CREATE_HERO';
export const BUY_EQUIPMENT = 'BUY_EQUIPMENT';

export const createHero = (name: string) => {
  return {
    type: CREATE_HERO,
    name
  };
};

export const buyEquipment = (equipment: EquipmentType) => {
  return {
    type: BUY_EQUIPMENT,
    equipment
  };
};