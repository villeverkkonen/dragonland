import {
  CREATE_HERO,
  BUY_EQUIPMENT,
  WIN_GOLD,
  LOSE_GOLD,
  GAME_OVER,
  GAIN_LIFE,
  LOSE_LIFE,
  EVERY_EQUIPMENT_COLLECTED,
  INCREMENT_ROUNDS_FOUGHT,
  INCREMENT_HITS
} from '../actions';
import { EquipmentType } from '../../equipment/types';
import { HeroType } from '../types';

const initialState: HeroType = {
  name: '',
  gold: 0,
  life: 0,
  attack: 0,
  defense: 0,
  maxHit: 30,
  everyEquipmentCollected: false,
  roundsFought: 0,
  hits: 0,
  equipment: []
};

export function heroReducer(
  state = initialState,
  action: { type: string, name: string, goldAmount: number, lifeAmount: number, equipment: EquipmentType }) {
  switch (action.type) {
    case CREATE_HERO:
      return {
        ...state,
        gold: 4,
        life: 100,
        maxHit: 30,
        name: action.name
      };
    case BUY_EQUIPMENT:
      let attack = 0;
      let defense = 0;
      action.equipment.stats.map(stat => {
        if (stat.title.toLowerCase() === 'attack') {
          attack = stat.points;
        } else if (stat.title.toLowerCase() === 'defense') {
          defense = stat.points;
        }
        return null;
      });
      return {
        ...state,
        gold: state.gold - action.equipment.price,
        attack: state.attack + attack,
        defense: state.defense + defense,
        maxHit: state.maxHit + attack,
        equipment: state.equipment.concat(action.equipment)
      };
    case WIN_GOLD:
      return {
        ...state,
        gold: state.gold + action.goldAmount
      };
    case LOSE_GOLD:
      let newGoldAmount = state.gold - action.goldAmount;
      if (newGoldAmount < 0) {
        newGoldAmount = 0;
      }
      return {
        ...state,
        gold: newGoldAmount
      };
    case GAIN_LIFE:
      return {
        ...state,
        life: state.life + action.lifeAmount
      };
    case LOSE_LIFE:
      let newLifeAmount = state.life - action.lifeAmount;
      if (newLifeAmount < 0) {
        newLifeAmount = 0;
      }
      return {
        ...state,
        life: newLifeAmount
      };
    case INCREMENT_ROUNDS_FOUGHT:
      return {
        ...state,
        roundsFought: state.roundsFought + 1
      };
    case INCREMENT_HITS:
      return {
        ...state,
        hits: state.hits + 1
      };
    case EVERY_EQUIPMENT_COLLECTED:
      return {
        ...state,
        everyEquipmentCollected: true
      };
    case GAME_OVER:
      return {
        name: '',
        gold: 0,
        life: 0,
        attack: 0,
        defense: 0,
        maxHit: 0,
        everyEquipmentCollected: false,
        roundsFought: 0,
        hits: 0,
        equipment: []
      };
    default:
      return state;
  };
};

export default heroReducer;