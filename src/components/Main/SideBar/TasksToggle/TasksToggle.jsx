import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import css from './TasksToggle.module.css';

const TasksToggle = () => (
  <>
    <div className={css.wrapTasksToggle}>
      <div className={css.titleTasksToggle}>◷ Завдання / Всі</div>
      <div className={css.wrapTasksLevels}>
        <FontAwesomeIcon className={css.red} icon={faCircle} />
        <FontAwesomeIcon className={css.yellow} icon={faCircle} />
        <FontAwesomeIcon className={css.green} icon={faCircle} />
      </div>

      {/* <div className={css.groupBtnTasks}>
        <button className={css.hardTasks} type="button">
          HARD
        </button>
        <button className={css.middleTasks} type="button">
          MIDDLE
        </button>
        <button className={css.lowTasks} type="button">
          LOW
        </button>
      </div> */}
    </div>
  </>
);

export default TasksToggle;
