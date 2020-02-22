import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// import moment from 'moment';
import 'moment/locale/uk';
// import { validateAll } from 'indicative/validator';
import DatePicker from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';

import css from './AddTaskForm.module.css';

class AddTaskForm extends Component {
  state = {
    endTime: new Date(),
    text: '',
    // colorLevel: 'LOW',
    // errors: null,
    // id: 0,
  };

  handleChangeTime = time => {
    this.setState({
      endTime: time,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { modalAddTasksClose } = this.props;
    modalAddTasksClose();
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { modalAddTasksClose } = this.props;
    const { endTime, text } = this.state;
    return (
      <div className={css.wrapAllForm}>
        <button
          type="button"
          className={css.backBtn}
          onClick={modalAddTasksClose}
        >
          <span>⤫</span>
        </button>

        <form
          onSubmit={this.handleSubmit}
          className={css.addForm}
          type="submit"
        >
          <h2 className={css.title}>Нове завдання</h2>

          <div className={css.formAdd_textarea}>
            <textarea
              className={css.inputTask}
              type="text"
              autoFocus
              required
              placeholder=" . . ."
              name="text"
              value={text}
              onChange={this.handleChange}
            />
          </div>

          {/* <input className={css.inputTask} required placeholder=" ..." /> */}
          <div>
            <div className={css.wrapTimeEnd}>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <span role="img">час виконання 🕘</span>
              <DatePicker
                locale={uk}
                // todayButton="Сьогодні"
                className={css.dataInput}
                selected={endTime}
                onChange={this.handleChangeTime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Час"
                dateFormat="HH:mm "
                name="endTime"
                value={endTime}
              />
            </div>
            <div className={css.wrapTimeEnd}>
              <span>колір завдання</span>
              <input className={css.inputLevel} placeholder=" . . ." />
            </div>
          </div>

          <button className={css.addBtn} type="submit">
            Добавити
          </button>
        </form>
      </div>
    );
  }
}

AddTaskForm.propTypes = {
  // addTransactionOperation: PropTypes.func.isRequired,
  modalAddTasksClose: PropTypes.func.isRequired,
};

export default AddTaskForm;
