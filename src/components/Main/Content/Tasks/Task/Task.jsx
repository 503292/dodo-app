import React from 'react';

import css from './Task.module.css';

//  text, time, color, fotoUrl
// eslint-disable-next-line react/prop-types
const Task = task => {
  // const { task } = this.props;
  return (
    <li className={css.wrapTask}>
      <p className={css.textTask}>{task.text}</p>
      <p className={css.timeTask}>{task.time} </p>
      <p className={css.categoryTask}>{task.color}</p>
      <img className={css.imageTask} src={task.fotoUrl} alt="коли є фото" />
    </li>
    // сюди прилітає у this.props одна {task}
  );
};

export default Task;
