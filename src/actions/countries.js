export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
});

export const setCountries = countries => ({
  type: SET_COUNTRIES,
  countries,
});
