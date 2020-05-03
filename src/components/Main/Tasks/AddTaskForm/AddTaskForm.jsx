import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import shortid from 'shortid';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import { Priority, getColor } from '../../../../utils/Priority';

import 'react-datepicker/dist/react-datepicker.css';
import css from './AddTaskForm.module.css';

const options = Object.values(Priority);

const errorMessage = 'Введіть будь ласка, текст';

class AddTaskForm extends Component {
  state = {
    endTime: new Date(),
    text: '',
    priority: Priority.NORMAL,
    id: '',
    completed: false,
  };

  componentDidMount() {
    const { editTask } = this.props;

    if (editTask !== null) {
      const date = new Date(editTask.endTime);

      this.setState({
        endTime: date,
        text: editTask.text,
        priority: editTask.priority,
        id: editTask.id,
      });
    }
  }

  handleChangeTime = time => {
    this.setState({
      endTime: time,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'text' && value.length > 0) {
      const error = document.querySelector('#missingText');
      error.style.opacity = 0;
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { endTime, text, priority, completed, id } = this.state;
    const {
      modalAddTasksClose,
      addTaskToRedux,
      allTasks,
      updateTaskToRedux,
    } = this.props;

    const error = document.querySelector('#missingText');
    if (text === '') {
      error.style.opacity = 1;
      return;
    }

    const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));

    const idTmp = shortid.generate();

    const data = {
      endTime,
      text,
      priority,
      id: idTmp,
      completed,
    };

    let getTasks = allTasks.find(el => el.id === id);
    if (getTasks) {
      getTasks = { ...getTasks, text, priority, endTime };
      this.setState(state => ({
        ...state,
        getTasks,
      }));

      updateTaskToRedux(getTasks);

      // update task to localStorage
      const filterArr = localTasksArr.filter(el => el.id !== id);
      filterArr.push(getTasks);
      localStorage.setItem('localTasks', JSON.stringify(filterArr));
    } else {
      this.setState(state => ({
        ...state,
        data,
      }));

      addTaskToRedux(data);

      // add task to localStorage
      if (localTasksArr) {
        localTasksArr.push(data);
        localStorage.setItem('localTasks', JSON.stringify(localTasksArr));
      } else {
        const arr = [];
        arr.push(data);
        localStorage.setItem('localTasks', JSON.stringify(arr));
      }
    }

    modalAddTasksClose();
  };

  render() {
    const { modalAddTasksClose, editTask } = this.props;
    const { endTime, text, priority } = this.state;

    return (
      <div className={css.wrapAllForm}>
        <button
          type="button"
          className={`${css.backBtn} ${css[`${getColor(priority)}`]}`}
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

          <div className={css.wrapTextarea}>
            <textarea
              className={css.inputTask}
              type="text"
              autoFocus
              // required
              placeholder=" . . ."
              name="text"
              value={text}
              onChange={this.handleChange}
            />
            <p id="missingText" className={css.error}>
              {errorMessage}
            </p>
          </div>

          <div className={css.twoInputs}>
            <div className={css.wrapInput}>
              <span role="img" aria-label="Clock">
                час виконання: 🕘
              </span>
              <DatePicker
                locale={uk}
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

          <button
            className={`${css.addBtn} ${css[`${getColor(priority)}`]}`}
            type="submit"
          >
            {editTask === null ? 'Зберегти' : 'Редагувати'}
          </button>
        </form>
      </div>
    );
  }
}

AddTaskForm.defaultProps = {
  editTask: null,
};

AddTaskForm.propTypes = {
  // addTransactionOperation: PropTypes.func.isRequired,
  modalAddTasksClose: PropTypes.func.isRequired,
  addTaskToRedux: PropTypes.func.isRequired,
  updateTaskToRedux: PropTypes.func.isRequired,
  editTask: PropTypes.shape(PropTypes.string.isRequired),
  allTasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AddTaskForm;
