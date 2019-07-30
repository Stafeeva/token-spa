import { combineReducers } from 'redux';
import tokens from './tokens';
import countries from './countries';

export default combineReducers({
  tokens,
  countries,
});
