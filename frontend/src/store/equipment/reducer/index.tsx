import {
  FETCH_EQUIPMENT
} from '../actions';
import { EquipmentType } from '../../equipment/types';

interface State {
  equipment?: EquipmentType[];
}

const initialState: State = {
  equipment: []
};

export function equipmentReducer(
  state = initialState,
  action: { type: string, equipment?: EquipmentType[] }) {
    switch (action.type) {
      case FETCH_EQUIPMENT:
        return {
          equipment: action.equipment
        };
      default:
        return state;
    };
};

export default equipmentReducer;