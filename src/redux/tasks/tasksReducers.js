import { Type } from './tasksActions';

const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TASK_TO_REDUX:
      return [...state, payload];

    // case Type.ADD_TASK_SUCCESS:
    //   return payload.data;

    // case Type.GET_TASKS_SUCCESS:
    //   return [payload, ...state];

    default:
      return state;
  }
};

export default taskReducer;
