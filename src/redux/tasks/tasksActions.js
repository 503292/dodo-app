export const Type = {
  ADD_TASK_TO_REDUX: 'ADD_TASK_TO_REDUX',
  UPDATE_TASK_TO_REDUX: 'UPDATE_TASK_TO_REDUX',

  ADD_TASK_START: 'ADD_TASK_START',
  ADD_TASK_SUCCESS: 'ADD_TASK_SUCCESS',
  ADD_TASK_ERROR: 'ADD_TASK_ERROR',

  GET_TASKS_START: 'GET_TASKS_START',
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
  GET_TASKS_ERROR: 'GET_TASKS_ERROR',

  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};
/*
 * SELECT => to REDUX
 */

export const addTaskToRedux = data => ({
  type: Type.ADD_TASK_TO_REDUX,
  payload: data,
});

export const updateTaskToRedux = data => ({
  type: Type.UPDATE_TASK_TO_REDUX,
  payload: data,
});

/*
 * OPERATION TO SERVER
 */

// ADD
export const addTaskStart = () => ({
  type: Type.ADD_TASK_START,
});
export const addTaskSuccess = data => ({
  type: Type.ADD_TASK_SUCCESS,
  payload: data,
});

export const addTaskError = error => ({
  type: Type.ADD_TASK_ERROR,
  payload: error,
});

// GET
export const getTasksStart = () => ({
  type: Type.GET_TASKS_START,
});
export const getTasksSuccess = () => ({
  type: Type.GET_TASKS_SUCCESS,
});
export const getTasksError = () => ({
  type: Type.GET_TASKS_ERROR,
});

// UPDATE

// DELETE
