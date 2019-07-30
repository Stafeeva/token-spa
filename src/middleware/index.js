import tokens from './tokens';
import countries from './countries';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
  tokens,
  countries,
);
