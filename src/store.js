import { createStore, combineReducers } from 'redux';

import cart from './reducers/cart'
import currency from './reducers/currency'

const reducer = combineReducers({
  cart,
  currency
});

const store = createStore(reducer);

export default store;