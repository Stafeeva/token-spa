import { SET_TOKENS } from '../actions';

const tokens = (state = [], action) => {
  switch (action.type) {
    case SET_TOKENS:
      return action.tokens;

    default:
      return state;
  }
}

export default tokens;
