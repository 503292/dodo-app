import React from 'react';
import PropTypes from 'prop-types';

import css from './Task.module.css';

// eslint-disable-next-line react/prop-types
const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map(task => (
        <li key={task.id} className={css.wrapTask}>
          <p className={css.textTask}>{task.text}</p>
          <p className={css.timeTask}>{task.time} </p>
          <p className={css.categoryTask}>{task.color}</p>
          <img className={css.imageTask} src={task.fotoUrl} alt="коли є фото" />
        </li>
      ))}
    </>
  );
};

export default Task;

Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
