import React from 'react';

const Task = () => (
  // сюди прилітає у this.props одна {task}
  <li className={CSS.wrapTask}>
    <p className={CSS.textTask}>text task</p>
    <p className={CSS.timeTask}>time when task END</p>
    <p className={CSS.categoryTask}>Color for task: red, green, yellow</p>
    <img className={CSS.imageTask} src="" alt="коли є фото" />
  </li>
);

export default Task;
