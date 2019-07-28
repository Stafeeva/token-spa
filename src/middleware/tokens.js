import { setTokens, FETCH_TOKENS } from '../actions';

const tokenMiddleware = store => next => action => {
  switch (action.type) {
    case FETCH_TOKENS:
      const tokens = JSON.parse(localStorage.getItem('tokens'));

      store.dispatch(setTokens(tokens ? tokens : []));

      break;

    default:
      return next(action);
  }
};

export default tokenMiddleware;
