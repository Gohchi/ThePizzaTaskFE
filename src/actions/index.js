export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CLEAR_FROM_CART = 'CLEAR_FROM_CART'

// let nextTodoId = 0
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const clearFromCart = (id) => {
  return {
    type: CLEAR_FROM_CART,
    id
  }
}