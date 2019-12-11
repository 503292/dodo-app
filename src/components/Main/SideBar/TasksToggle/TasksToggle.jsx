import React from 'react';

import css from './TasksToggle.module.css';

const TasksToggle = () => (
  <>
    <div className={css.wrapTasksToggle}>
      <div className={css.titleTasksToggle}>Завдання</div>
      <div className={css.groupBtnTasks}>
        <button className={css.lowTasks} type="button">
          LOW
        </button>
        <button className={css.middleTasks} type="button">
          MIDDLE
        </button>
        <button className={css.hardTasks} type="button">
          HARD
        </button>
      </div>
    </div>
  </>
);

export default TasksToggle;
