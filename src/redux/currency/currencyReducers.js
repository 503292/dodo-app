import { Type } from './currencyActions';

const currencyReducer = (state = 'USD', { type, payload }) => {
  switch (type) {
    case Type.UPDATE_CURRENCY:
      return payload;
    // [state, payload]
    default:
      return state;
  }
};

export default currencyReducer;
