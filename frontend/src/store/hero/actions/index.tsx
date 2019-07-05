import { EquipmentType } from '../../equipment/types';

export const CREATE_HERO = 'CREATE_HERO';
export const BUY_EQUIPMENT = 'BUY_EQUIPMENT';
export const WIN_GOLD = 'WIN_GOLD';
export const LOSE_GOLD = 'LOSE_GOLD';
export const GAME_OVER = 'GAME_OVER';
export const GAIN_LIFE = 'GAIN_LIFE';
export const LOSE_LIFE = 'LOSE_LIFE';

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

export const winGold = (amount: number) => {
  return {
    type: WIN_GOLD,
    goldAmount: amount
  };
};

export const loseGold = (amount: number) => {
  return {
    type: LOSE_GOLD,
    goldAmount: amount
  };
};

export const gainLife = (amount: number) => {
  return {
    type: GAIN_LIFE,
    lifeAmount: amount
  };
};

export const loseLife = (amount: number) => {
  return {
    type: LOSE_LIFE,
    lifeAmount: amount
  };
};

export const gameOver = () => {
  return {
    type: GAME_OVER
  }
}