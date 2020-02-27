import React, { Component } from 'react';

import PropTypes from 'prop-types';
import AddTaskForm from '../AddTaskForm/AddTaskForm.Container';

import css from './ModalAddTask.module.css';

class ModalAddTask extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.modalAddTasksClose();
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget && target !== currentTarget) {
      return;
    }
    this.props.modalAddTasksClose();
  };

  render() {
    const { isModalAddTasksOpen, editTask } = this.props;
    // console.log(editTask, 'editTask MMM');
    return (
      <>
        {isModalAddTasksOpen && (
          <div
            role="toolbar"
            aria-label="Закрыть"
            tabIndex={-1}
            className={css.modal_overlay}
            onClick={this.handleBackdropClick}
            onKeyUp={this.handleKeyPress}
          >
            <div className={css.modal}>
              {/* {oneTask ? <AddTaskForm oneTask={oneTask} /> : <AddTaskForm />} */}
              <AddTaskForm editTask={editTask} />
            </div>
          </div>
        )}
      </>
    );
  }
}

ModalAddTask.defaultProps = {
  editTask: null,
};

ModalAddTask.propTypes = {
  modalAddTasksClose: PropTypes.func.isRequired,
  isModalAddTasksOpen: PropTypes.bool.isRequired,
  editTask: PropTypes.shape({}),
};

export default ModalAddTask;
