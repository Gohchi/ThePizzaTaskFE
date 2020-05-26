import { createStore, combineReducers } from 'redux';

import cart from './reducers/cart'
import currency from './reducers/currency'
import pizzas from './reducers/pizzas'
import contact from './reducers/contact'
import orders from './reducers/orders'

const reducer = combineReducers({
  cart,
  currency,
  pizzas,
  contact,
  orders
});

const store = createStore(reducer);

export default store;