import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import css from './Task.module.css';

// eslint-disable-next-line react/prop-types
const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map(task => (
        <li key={task.id} className={css.wrapTask}>
          <FontAwesomeIcon className={css.checkBox} icon={faCircle} />
          <div className={css.wrapInsert}>
            <p className={css.textTask}>{task.text}</p>
            <p className={css.timeTask}>{task.time} </p>
            <p className={css.categoryTask}>{task.color}</p>

            {task.imgUrl && (
              <img className={css.imageTask} src={task.imgUrl} alt="task" />
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default Task;

Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
