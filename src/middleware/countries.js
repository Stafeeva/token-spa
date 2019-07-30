const axios = require('axios');
import {
  fetchCountries,
  setCountries,
  FETCH_COUNTRIES,
} from '../actions';

const COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';

const countryMiddleware = store => next => action => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      axios.get(COUNTRIES_API).then(response => {
        store.dispatch(setCountries(response.data));
      }).catch(err => console.log(err));
      break;

    default:
      return next(action);
  }
};

export default countryMiddleware;
