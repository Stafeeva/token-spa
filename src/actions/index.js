export const FETCH_TOKENS = 'FETCH_TOKENS';
export const SET_TOKENS = 'SET_TOKENS';
export const ADD_TOKEN = 'ADD_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const FILTER_TOKENS = 'FILTER_TOKENS';

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

export const filterTokens = filterText => ({
  type: FILTER_TOKENS,
  filterText,
});

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
});

export const setCountries = countries => ({
  type: SET_COUNTRIES,
  countries,
})
