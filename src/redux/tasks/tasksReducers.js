import { Type } from './tasksActions';

// eslint-disable-next-line no-unused-vars
const taskReducer = (state = { task: 'End Task store' }, { type, payload }) => {
  switch (type) {
    case Type.READ_ALL_TASKS: {
      return {
        payload,
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default taskReducer;
