const uuidv4 = require('uuid/v4');
import { setTokens, fetchTokens, ADD_TOKEN, FETCH_TOKENS } from '../actions';

const getTokensFromLocalStorage = () => {
  const tokens = JSON.parse(localStorage.getItem('tokens'));

  return tokens || [];
};

const writeTokensToLocalStorage = tokens => {
  localStorage.setItem('tokens', JSON.stringify(tokens));
};

const addTokenToLocalStorage = token => {
  const generatedId = uuidv4();
  const tokensToUpdate = getTokensFromLocalStorage();

  token.id = generatedId;
  tokensToUpdate.push(token);

  writeTokensToLocalStorage(tokensToUpdate);
};

const tokenMiddleware = store => next => action => {
  switch (action.type) {
    case ADD_TOKEN:
      addTokenToLocalStorage(action.token);

      store.dispatch(fetchTokens());

      break;
    case FETCH_TOKENS:
      store.dispatch(setTokens(getTokensFromLocalStorage()));

      break;
    default:
      return next(action);
  }
};

export default tokenMiddleware;
