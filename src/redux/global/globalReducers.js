import { combineReducers } from 'redux';
import { Type } from './globalActions';

const isModalAddTasksOpen = (state = false, { type }) => {
  switch (type) {
    case Type.MODAL_ADD_TASKS_OPEN:
      return true;
    case Type.MODAL_ADD_TASKS_CLOSE:
      return false;
    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON:
      return true;
    case Type.LOADER_OFF:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isModalAddTasksOpen,
  isLoading,
});
