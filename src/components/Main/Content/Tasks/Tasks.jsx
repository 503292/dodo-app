import React, { Component } from 'react';
import Task from './Task/Task';
import tasks from '../../../../tasks.json';
import css from './Tasks.module.css';

class Tasks extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    tasks: {},
    // day: 0,
  };

  // getDay = () => {
  //   const { day } = this.state;
  //   const date = new Date();

  //   const day1 = date.getTime();
  //   this.setState({ day: day1 });
  // };

  render() {
    return (
      <>
        <h3 className={css.titleTasks}>Today </h3>
        <ul className={css.wrapTasks}>
          <Task tasks={tasks} />
        </ul>

        {/* 
        TO-DO 
        зі стора redux сюди падають tasks: [] 
        */}
        {/* 
        <TaskDay /> всі таски конкретно вибраного дня
        <TaskFuture /> всі таски заплановані без дати 
        */}
      </>
    );
  }
}

export default Tasks;
