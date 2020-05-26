import { SET_CURRENCY } from '../actions'

const currencies = {
  EUR: { code: 'EUR', base: 1, symbol: '€' },
  USD: { code: 'USD', base: 1.09, symbol: 'US$' }
}
const cart = (state = currencies['EUR'], action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return currencies[action.code];
    default:
      return state
  }
}

export default cart