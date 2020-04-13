import { Type } from './locationActions';

const locationReducer = (state = 'Lviv', { type, payload }) => {
  switch (type) {
    case Type.UPDATE_LOCATION:
      return payload;
    // [state, payload]
    default:
      return state;
  }
};

export default locationReducer;
