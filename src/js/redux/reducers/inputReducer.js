import { CHANGE_INPUT } from '../actions/types';

const initialState = "";

let inputReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_INPUT:
      return action.input;
    default:
      return state;
  }
}

export default inputReducer;