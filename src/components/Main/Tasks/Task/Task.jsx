import React from 'react';

import css from './Task.module.css';

const Task = () => (
  // сюди прилітає у this.props одна {task}
  <li className={css.wrapTask}>
    <p className={css.textTask}>text task</p>
    <p className={css.timeTask}>time when task END</p>
    <p className={css.categoryTask}>Color for task: red, green, yellow</p>
    <img className={css.imageTask} src="" alt="коли є фото" />
  </li>
);

export default Task;
