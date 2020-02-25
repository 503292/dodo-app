/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Task from '../Task/Task';

import css from './Column.module.css';

class Column extends Component {
  state = {};

  render() {
    const { tasksDraw, column } = this.props;
    // console.log(tasksDraw, 'tasksDraw');
    // console.log(column, 'column');
    return (
      <div>
        {/* <div className={css.wrapTasks}> */}
        <h3 className={css.title}>{column.title}</h3>
        <Droppable droppableId={column.id}>
          {provided => {
            //   console.log("provided", provided);
            return (
              <div
                className={css.tasks}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasksDraw.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
        {/* </div> */}
      </div>
    );
  }
}

export default Column;
