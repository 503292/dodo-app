import React from 'react';

import css from './TasksToggle.module.css';

const TasksToggle = () => (
  <>
    <div className={css.wrapTasksToggle}>
      <div className={css.titleTasksToggle}>
        ◷ Завдання / Всі
        <div>
          <span className={css.red} role="img" aria-label="dot">
            ⚫
          </span>
          <span className={css.yellow} role="img" aria-label="dot">
            ⚫
          </span>
          <span className={css.green} role="img" aria-label="dot">
            ⚫
          </span>
        </div>
      </div>

      <div className={css.groupBtnTasks}>
        <button className={css.hardTasks} type="button">
          HARD
        </button>
        <button className={css.middleTasks} type="button">
          MIDDLE
        </button>
        <button className={css.lowTasks} type="button">
          LOW
        </button>
      </div>
    </div>
  </>
);

export default TasksToggle;
