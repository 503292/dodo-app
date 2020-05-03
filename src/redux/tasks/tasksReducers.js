import { Type } from './tasksActions';

const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TASK_TO_REDUX:
      return [...state, payload];
    case Type.UPDATE_TASK_TO_REDUX:
    case Type.UPDATE_IS_COMPLETED_TASK_TO_REDUX:
      return state.map(el => (el.id === payload.id ? { ...payload } : el));
    case Type.DELETE_TASK_FROM_REDUX:
      return state.filter(el => el.id !== payload);
    case Type.UPDATE_ALL_TASKS_TO_REDUX:
      return payload;

    // case Type.ADD_TASK_SUCCESS:
    //   return payload.data;

    // case Type.GET_TASKS_SUCCESS:
    //   return [payload, ...state];

    default:
      return state;
  }
};

export default taskReducer;
