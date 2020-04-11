import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { getColor } from '../../../../utils/Priority';

import css from './Task.module.css';

const Container = styled.div`
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgrey' : 'white')};
  color: grey;
  // color: ${props => (props.isDragging ? 'white' : 'black')};
  // font-weight: ${props => (props.isDragging ? '700' : '400')};
`;

class Task extends Component {
  state = {};

  formatEndTime = endTime => {
    let hour = endTime.getHours();
    if (hour < 10) hour = '0'.concat(hour);
    let minutes = endTime.getMinutes();
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

    return (
      <>
        <Draggable
          className={css.dragContainer}
          draggableId={task.id}
          index={index}
        >
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
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
                  <p
                    className={
                      task.completed === true
                        ? `${css.text} ${css.lineThrough}`
                        : css.text
                    }
                  >
                    {task.text}
                  </p>
                  <p
                    className={
                      task.completed === true
                        ? `${css.completedCheckbox} ${css.endTime}`
                        : css.endTime
                    }
                  >
                    {this.formatEndTime(task.endTime)}
                  </p>
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
                      <FontAwesomeIcon className={css.penIcon} icon={faPen} />
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
                      <FontAwesomeIcon
                        className={css.trashIcon}
                        icon={faTrashAlt}
                      />
                    </button>
                  )}
                </div>
              </div>
            </Container>
          )}
        </Draggable>
      </>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
  index: PropTypes.number.isRequired,
  modalAddTasksOpen: PropTypes.func.isRequired,
  updateCompleted: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
