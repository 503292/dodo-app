import { Type } from './locationActions';

const locationReducer = (state = 'Chervonograd', { type, payload }) => {
  switch (type) {
    case Type.UPDATE_LOCATION:
      return payload;
    default:
      return state;
  }
};

export default locationReducer;
