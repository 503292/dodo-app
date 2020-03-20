import { Type } from './currencyActions';

const currencyReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.ADD_CURRENCY:
      return payload;
    // [state, payload]
    default:
      return state;
  }
};

export default currencyReducer;
