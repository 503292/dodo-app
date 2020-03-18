export const Type = {
  MODAL_ADD_TASKS_OPEN: 'MODAL_ADD_TASKS_OPEN',
  MODAL_ADD_TASKS_CLOSE: 'MODAL_ADD_TASKS_CLOSE',
};

export const modalAddTasksOpen = () => ({
  type: Type.MODAL_ADD_TASKS_OPEN,
});

export const modalAddTasksClose = () => ({
  type: Type.MODAL_ADD_TASKS_CLOSE,
});
