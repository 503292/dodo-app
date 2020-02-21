import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import Select from 'react-select';
import moment from 'moment';
import 'moment/locale/uk';
// import { validateAll } from 'indicative/validator';
// import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';

import css from './AddTaskForm.module.css';

class AddTaskForm extends Component {
  state = {
    // time: 0,
    // text: '',
    // colorLevel: 'LOW',
    // errors: null,
    // id: 0,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { modalAddTasksClose } = this.props;
    modalAddTasksClose();
  };

  render() {
    console.log(moment.locale(), 'local');
    // eslint-disable-next-line react/prop-types
    const { modalAddTasksClose } = this.props;
    return (
      <div className={css.wrapAllForm}>
        <button
          type="button"
          className={css.backBtn}
          onClick={modalAddTasksClose}
        >
          <span>◀</span>
          <p>До перегляду завдань</p>
        </button>

        <form
          onSubmit={this.handleSubmit}
          className={css.addForm}
          type="submit"
        >
          <h2 className={css.title}>Нове завдання</h2>

          <input
            className={css.inputTask}
            required
            autoFocus
            placeholder=" ..."
          />
          <div>
            <div className={css.wrapTimeEnd}>
              <span>час виконання</span>
              <input className={css.inputTime} placeholder=" ..." />
            </div>
            <div className={css.wrapTimeEnd}>
              <span>колір завдання</span>
              <input className={css.inputTime} placeholder=" ..." />
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
