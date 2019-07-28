export const FETCH_TOKENS = 'FETCH_TOKENS';
export const SET_TOKENS = 'SET_TOKENS';

export const fetchTokens = () => ({
  type: FETCH_TOKENS,
});

export const setTokens = tokens => ({
  type: SET_TOKENS,
  tokens,
});
