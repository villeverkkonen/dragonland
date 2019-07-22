import {
  SWITCH_FIGHT_ON
} from '../actions';

interface State {
  fightOn: boolean;
}

const initialState: State = {
  fightOn: false
};

export function battlefieldReducer(
  state = initialState,
  action: { type: string }) {
  switch (action.type) {
    case SWITCH_FIGHT_ON:
      return {
        fightOn: !state.fightOn
      };
    default:
      return state;
  };
};

export default battlefieldReducer;