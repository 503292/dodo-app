import React from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer/Timer';
import Clock from '../Clock/Clock';
import DateView from '../DateView/DateView';

import { ReactComponent as Plus } from '../../../assets/image/plus.svg';

import css from './TodoFooter.module.scss';

const TodoFooter = ({ modalAddTasksOpen }) => {
  return (
    <div className={css.footerWrap}>
      <Timer />
      <div className={css.wrapBtn}>
        <div className={css.wrapDate}>
          <DateView />
          <Clock />
        </div>
        <button
          type="button"
          className={`${css.addButton} animateBtn`}
          onClick={modalAddTasksOpen}
          aria-label="Add new task"
        >
          <Plus className={css.plus} />
        </button>
      </div>
    </div>
  );
};
TodoFooter.propTypes = {
  modalAddTasksOpen: PropTypes.func.isRequired,
};
export default TodoFooter;
