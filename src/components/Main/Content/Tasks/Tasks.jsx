import React, { Component } from 'react';
import Task from './Task/Task';
import tasks from '../../../../tasks.json';

class Tasks extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    tasks: {},
  };

  render() {
    return (
      <>
        {/* тут треба поставити tasks.map(task => console.log(task)) || inTask  task={task} */}
        <ul>
          {tasks.map(task => {
            console.log(task);
            return <Task key={task.id} task={task} />;
          })}
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
