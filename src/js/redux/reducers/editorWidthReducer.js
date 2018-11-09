import { CHANGE_EDITOR_WIDTH } from '../actions/types';

const initialState = (window.outerWidth - 5)/2;

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EDITOR_WIDTH:
      return action.width;
    default:
      return state;
  }
};