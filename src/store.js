import { createStore, combineReducers } from 'redux';

import cart from './reducers/cart'
import currency from './reducers/currency'
import pizzas from './reducers/pizzas'

const reducer = combineReducers({
  cart,
  currency,
  pizzas
});

const store = createStore(reducer);

export default store;