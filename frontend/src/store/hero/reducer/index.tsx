import {
  CREATE_HERO,
  BUY_EQUIPMENT,
  WIN_GOLD,
  LOSE_GOLD,
  GAME_OVER,
  GAIN_LIFE,
  LOSE_LIFE
} from '../actions';
import { EquipmentType } from '../../equipment/types';
import { HeroType } from '../types';

const initialState: HeroType = {
  name: '',
  gold: 0,
  life: 0,
  equipment: []
};

export function heroReducer(
  state = initialState,
  action: { type: string, name: string, goldAmount: number, lifeAmount: number, equipment: EquipmentType }) {
    switch (action.type) {
      case CREATE_HERO:
        return {
          ...state,
          gold: 10,
          life: 100,
          name: action.name
        };
      case BUY_EQUIPMENT:
        const newEquipmentList = state.equipment.concat(action.equipment);
        return {
          ...state,
          gold: state.gold - action.equipment.price,
          equipment: newEquipmentList
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
      case GAME_OVER:
        return {
          name: '',
          gold: 0,
          life: 0,
          equipment: []
        };
      default:
        return state;
    };
};

export default heroReducer;