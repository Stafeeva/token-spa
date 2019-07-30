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
        const countries = response.data.map(country => ({
          name: country.name,
          code: country.alpha2Code,
        }));

        store.dispatch(setCountries(countries));
      }).catch(err => console.log(err));
      break;

    default:
      return next(action);
  }
};

export default countryMiddleware;
