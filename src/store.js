import { createStore, combineReducers } from 'redux';

import cart from './reducers/cart'

const reducer = combineReducers({
  cart
});

const store = createStore(reducer);

export default store;