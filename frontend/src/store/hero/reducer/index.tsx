import {
  CREATE_HERO,
  BUY_EQUIPMENT
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
  action: { type: string, name?: string, equipment: EquipmentType }) {
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
      default:
        return state;
    };
};

export default heroReducer;