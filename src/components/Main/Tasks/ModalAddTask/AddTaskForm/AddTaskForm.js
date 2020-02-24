import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// import moment from 'moment';
import 'moment/locale/uk';
// import { validateAll } from 'indicative/validator';
import DatePicker from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import shortid from 'shortid';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import Priority from '../../../../../utils/Priority';
// import * as tasksActions from '../../../../../redux/tasks/tasksActions';
import 'react-datepicker/dist/react-datepicker.css';
import css from './AddTaskForm.module.css';

const options = Object.values(Priority);

class AddTaskForm extends Component {
  state = {
    endTime: new Date(),
    text: '',
    priority: Priority.NORMAL,
    // eslint-disable-next-line react/no-unused-state
    id: '',
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

    const { endTime, text, priority } = this.state;
    const { modalAddTasksClose, addTaskToRedux } = this.props;
    const idTmp = shortid.generate();

    // const timeTmp = `${endTime.getHours()} : ${endTime.getMinutes()}`;
    // console.log(timeTmp, 'timeTmp');

    const data = {
      endTime: endTime.getTime(),
      text,
      priority,
      id: idTmp,
    };

    // console.log(data, 'data');

    // console.log(endTime.getTime(), 'endTime');

    this.setState({
      endTime: endTime.getTime(),
      text,
      priority,
      // eslint-disable-next-line react/no-unused-state
      id: idTmp,
    });

    addTaskToRedux(data);

    modalAddTasksClose();
  };

  render() {
    const { modalAddTasksClose } = this.props;
    const { endTime, text, priority } = this.state;
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
          <div className={css.twoInputs}>
            <div className={css.wrapInput}>
              <span role="img" aria-label="Clock">
                час виконання: 🕘
              </span>
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
            <div className={css.wrapInput}>
              <span> важливість: ▅ ▆ ▉ </span>
              <PrioritySelector
                className={css.priorityInput}
                options={options}
                value={priority}
                onChange={this.handleChange}
              />
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
  addTaskToRedux: PropTypes.func.isRequired,
};

export default AddTaskForm;
