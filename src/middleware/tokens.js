import * as uuidv4 from 'uuid/v4';
import { ADD_TOKEN, DELETE_TOKEN, FETCH_TOKENS, fetchTokens, setTokens } from '../actions/tokens';

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

const deleteTokenFromLocalStorage = id => {
  const tokensToUpdate = getTokensFromLocalStorage();

  writeTokensToLocalStorage(tokensToUpdate.filter(token => token.id !== id));
};

const tokenMiddleware = store => next => action => {
  switch (action.type) {
    case ADD_TOKEN:
      addTokenToLocalStorage(action.token);
      store.dispatch(fetchTokens());
      break;

    case DELETE_TOKEN:
      deleteTokenFromLocalStorage(action.id)
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
