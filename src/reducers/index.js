import { combineReducers } from 'redux';
import quoteReducer from './quote_reducer';

export default combineReducers({
  quote: quoteReducer
});
