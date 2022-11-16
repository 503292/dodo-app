import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import AddTaskForm from '../AddTaskForm/AddTaskForm';

import { modalAddTasksClose } from '../../../redux/global/globalActions';
import css from './ModalAddTask.module.css';

const ModalAddTask = ({ editTask, handleResetEditTask }) => {
  const dispatch = useDispatch();
  const isModalAddTasksOpen = useSelector(s => s.global.isModalAddTasksOpen);

  //  Helpers
  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    dispatch(modalAddTasksClose());
  };

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget && target !== currentTarget) {
      return;
    }
    dispatch(modalAddTasksClose());
  };

  //  Effects
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isModalAddTasksOpen && (
        <div
          role="toolbar"
          aria-label="Закрити"
          tabIndex={-1}
          className={css.modal_overlay}
          onClick={handleBackdropClick}
          onKeyUp={handleKeyPress}
        >
          <div className={css.modal}>
            <AddTaskForm
              editTask={editTask}
              handleResetEditTask={handleResetEditTask}
            />
          </div>
        </div>
      )}
    </>
  );
};

ModalAddTask.defaultProps = {
  editTask: null,
};

ModalAddTask.propTypes = {
  editTask: PropTypes.shape({}),
  handleResetEditTask: PropTypes.func.isRequired,
};

export default ModalAddTask;
