import tokens from './tokens';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
  tokens,
);
