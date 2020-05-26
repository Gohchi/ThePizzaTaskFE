import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, CLEAR_FROM_CART } from '../actions'

const cart = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      newState = Object.assign({}, state);
      newState[action.id] = typeof newState[action.id] === 'undefined' ? 1 : newState[action.id]+1;
      return newState;
    case REMOVE_FROM_CART:
      newState = Object.assign({}, state);
      newState[action.id] = newState[action.id] === 0 ? 0 : newState[action.id]-1;
      return newState;
    case CLEAR_FROM_CART:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;    
    case CLEAR_CART:
      return {};
    default:
      return state
  }
}

export default cart