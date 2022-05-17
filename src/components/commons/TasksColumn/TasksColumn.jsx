import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import Task from '../TaskItem/TaskItem';
import Motivator from '../Motivator/Motivator';

import css from './TasksColumn.module.scss';

class TasksColumn extends Component {
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
        <Motivator />

        {tasksDraw.length <= 0 && (
          <div>
            <p className={css.start}>
              Подумай що ти можеш зробити преємного для себе і близьких у цьому
              році. Шукай плюси свого життя. Подумай скільки всього у тебе є.
              Все що можна уявити реально).
            </p>
          </div>
        )}
        <Droppable droppableId={column.id}>
          {provided => {
            return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
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

          {/* TODO */}
          {/* <span style={{ height: '2rem' }} /> */}
        </Droppable>
      </div>
    );
  }
}
TasksColumn.propTypes = {
  tasksDraw: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  column: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
  modalAddTasksOpen: PropTypes.func.isRequired,
  updateCompleted: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TasksColumn;
