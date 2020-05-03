export const Type = {
  MODAL_ADD_TASKS_OPEN: 'MODAL_ADD_TASKS_OPEN',
  MODAL_ADD_TASKS_CLOSE: 'MODAL_ADD_TASKS_CLOSE',
  LOADER_ON: 'LOADER_ON',
  LOADER_OFF: 'LOADER_OFF',
  IS_ANIMATION_CHECK: 'IS_ANIMATION_CHECK',
};

export const modalAddTasksOpen = () => ({
  type: Type.MODAL_ADD_TASKS_OPEN,
});

export const modalAddTasksClose = () => ({
  type: Type.MODAL_ADD_TASKS_CLOSE,
});

export const loaderOn = () => ({
  type: Type.LOADER_ON,
});

export const loaderOff = () => ({
  type: Type.LOADER_OFF,
});

export const setAnimationCheched = () => ({
  type: Type.IS_ANIMATION_CHECK,
});
