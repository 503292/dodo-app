/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Task from '../Task/Task';

import css from './Column.module.css';
import Clock from '../Clock/Clock';

class Column extends Component {
  state = {};

  render() {
    const {
      tasksDraw,
      column,
      modalAddTasksOpen,
      updateCompleted,
      updateTask,
      deleteTask,
    } = this.props;

    return (
      <div className={css.wrapColumn}>
        <h3 className={css.title}>{column.title}</h3>
        <div className={css.wrapClock}>
          <Clock />
        </div>

        {tasksDraw.length <= 0 && (
          <div>
            <p className={css.start}>
              Для початку роботи натисніть &quot;+&quot;
            </p>
          </div>
        )}
        <Droppable droppableId={column.id}>
          {provided => {
            return (
              <div
                className={css.tasks}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasksDraw.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    updateCompleted={updateCompleted}
                    modalAddTasksOpen={modalAddTasksOpen}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                  />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    );
  }
}

export default Column;
