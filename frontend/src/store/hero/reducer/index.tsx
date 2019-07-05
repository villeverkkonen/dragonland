import {
  CREATE_HERO,
  BUY_EQUIPMENT,
  WIN_GOLD,
  LOSE_GOLD,
  GAME_OVER
} from '../actions';
import { EquipmentType } from '../../equipment/types';

interface State {
  name?: string;
  gold: number;
  equipment: EquipmentType[];
}

const initialState: State = {
  name: '',
  gold: 0,
  equipment: []
};

export function heroReducer(
  state = initialState,
  action: { type: string, name?: string, goldAmount: number, equipment: EquipmentType }) {
    switch (action.type) {
      case CREATE_HERO:
        return {
          ...state,
          gold: 10,
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
        let goldToDecrease = action.goldAmount;
        let newAmount = state.gold - goldToDecrease;
        if (newAmount < 0) {
          newAmount = 0;
        }
        return {
          ...state,
          gold: newAmount
        };
      case GAME_OVER:
        return {
          name: '',
          gold: 0,
          equipment: []
        };
      default:
        return state;
    };
};

export default heroReducer;