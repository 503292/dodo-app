import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import PropTypes from 'prop-types';

import { ReactComponent as Delete } from '../../../assets/image/delete.svg';
import { ReactComponent as Pen } from '../../../assets/image/pen.svg';
import { getColor } from '../../../utils/Priority';

import css from './TaskItem.module.css';

class TaskItem extends Component {
  state = {};

  formatEndTime = endTime => {
    let hour = new Date(endTime).getHours();
    if (hour < 10) hour = '0'.concat(hour);
    let minutes = new Date(endTime).getMinutes();
    if (minutes < 10) minutes = '0'.concat(minutes);

    const newEndTime = `${hour}:${minutes}`;
    return newEndTime;
  };

  render() {
    const {
      task,
      index,
      modalAddTasksOpen,
      updateCompleted,
      updateTask,
      deleteTask,
    } = this.props;

    const { text } = task;
    const splitText = text.split(/\r?\n/);

    return (
      <>
        <Draggable
          className={css.dragContainer}
          draggableId={task.id}
          index={index}
        >
          {(provided, snapshot) => (
            // eslint-disable-next-line
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isdragging={snapshot.isDragging.toString()}
              onClick={this.onClick}
              className={css.dragContainer}
            >
              <div
                className={`${css.task} ${css[`${getColor(task.priority)}`]}`}
              >
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={css.wrapText}>
                  <input
                    className={css.completedCheckbox}
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => updateCompleted(task.id)}
                  />
                  <div
                    className={
                      task.completed === true
                        ? `${css.text} ${css.lineThrough}`
                        : css.text
                    }
                  >
                    {splitText.map((el, ind) => {
                      // eslint-disable-next-line react/no-array-index-key
                      return <p key={ind}>{el}</p>;
                    })}
                  </div>
                </label>

                <div className={css.actions}>
                  {!task.completed ? (
                    <button
                      type="button"
                      onClick={() => {
                        modalAddTasksOpen();
                        updateTask(task);
                      }}
                      value={task.id}
                      className={css.wrapIcon}
                    >
                      <Pen className={css.penIcon} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        deleteTask(task.id);
                      }}
                      value={task.id}
                      className={css.wrapIcon}
                    >
                      <Delete className={css.deleteIcon} />
                    </button>
                  )}

                  <p
                    className={
                      task.completed === true
                        ? `${css.completedCheckbox} ${css.endTime}`
                        : css.endTime
                    }
                  >
                    {this.formatEndTime(task.endTime)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Draggable>
      </>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
  index: PropTypes.number.isRequired,
  modalAddTasksOpen: PropTypes.func.isRequired,
  updateCompleted: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
