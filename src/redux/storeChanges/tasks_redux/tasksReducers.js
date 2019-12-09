import Type from '../types';

const initialState = {
  tasks: {
    task: [null],
  },
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.ON_LOADER: {
      return {
        ...state,
        // Redux Store
        tasks: payload,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};
// Exports
export default taskReducer;
