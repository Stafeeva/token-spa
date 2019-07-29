export const FETCH_TOKENS = 'FETCH_TOKENS';
export const SET_TOKENS = 'SET_TOKENS';
export const ADD_TOKEN = 'ADD_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';

export const fetchTokens = () => ({
  type: FETCH_TOKENS,
});

export const setTokens = tokens => ({
  type: SET_TOKENS,
  tokens,
});

export const addToken = token => ({
  type: ADD_TOKEN,
  token,
});

export const deleteToken = id => ({
  type: DELETE_TOKEN,
  id,
});
