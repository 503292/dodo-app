export const Type = {
  CREATE_TASK: 'CREATE_TASK',
  READ_ALL_TASKS: 'READ_ALL_TASKS',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

export const getAllTasks = value => ({
  type: Type.READ_ALL_TASKS,
  payload: value,
});

export const addOneTask = value => ({
  type: Type.CREATE_ONE_TASK,
  payload: value,
});
