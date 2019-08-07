import { SET_TOKENS, FILTER_TOKENS } from '../actions/tokens';

const initialState = {
  tokenList: [],
  filterText: '',
};

const tokens = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKENS:
      return Object.assign({}, state, {
        tokenList: action.tokens
      });

    case FILTER_TOKENS:
      return Object.assign({}, state, {
        filterText: action.filterText
      });

    default:
      return state;
  }
};

export default tokens;
