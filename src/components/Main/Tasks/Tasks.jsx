import React, { Component } from 'react';
import Task from './Task/Task';

class Tasks extends Component {
  state = {
    tasks: {},
  };

  render() {
    return (
      <>
        {/* тут треба поставити tasks.map(task => console.log(task)) || inTask  task={task} */}
        <Task />
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
