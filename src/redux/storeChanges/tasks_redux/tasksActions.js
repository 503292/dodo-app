import Type from '../../../constants/types';

export const getAllTasks = value => ({
  type: Type.READ_ALL_TASKS,
  payload: value,
});

export const addOneTask = value => ({
  type: Type.CREATE_ONE_TASK,
  payload: value,
});
