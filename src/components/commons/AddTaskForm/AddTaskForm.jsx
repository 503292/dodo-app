import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import shortid from 'shortid';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

import { Priority, getColor } from '../../../utils/Priority';
import {
  addTaskToRedux,
  updateTaskToRedux,
} from '../../../redux/tasks/tasksActions';
import { modalAddTasksClose } from '../../../redux/global/globalActions';

import { ReactComponent as СrissСross } from '../../../assets/image/criss_cross.svg';
import { ReactComponent as Clock } from '../../../assets/image/clock.svg';
import { ReactComponent as Level } from '../../../assets/image/level.svg';

import 'react-datepicker/dist/react-datepicker.css';
import css from './AddTaskForm.module.scss';

const options = Object.values(Priority);
const errorMessage = 'Введіть будь ласка, текст';

const AddTaskForm = ({ editTask, handleResetEditTask }) => {
  const dispatch = useDispatch();
  const allTasks = useSelector(s => s.tasks);
  const [endTime, setEndTime] = useState(new Date());
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(Priority.NORMAL);
  const [id, setId] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (editTask !== null) {
      const date = new Date(editTask.endTime);
      setEndTime(date);
      setText(editTask.text);
      setPriority(editTask.priority);
      setId(editTask.id);
      setCompleted(editTask.completed);
    }
  }, [editTask]);

  const handleText = ({ target }) => {
    const { name, value } = target;

    if (name === 'text' && value.length > 0) {
      const error = document.querySelector('#missingText');
      error.style.opacity = 0;
    }
    setText(value);
  };
  const handleChangePriority = ({ target }) => {
    setPriority(target.value);
  };
  const handleChangeTime = time => {
    setEndTime(time);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const error = document.querySelector('#missingText');
    if (text === '') {
      error.style.opacity = 1;
      return;
    }

    const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));
    const idTmp = shortid.generate();

    let oneTask = allTasks.find(el => el.id === id);
    if (oneTask) {
      oneTask = { ...oneTask, text, priority, endTime };

      dispatch(updateTaskToRedux(oneTask));

      // update task to localStorage
      const filterArr = localTasksArr.filter(el => el.id !== id);
      filterArr.unshift(oneTask);
      localStorage.setItem('localTasks', JSON.stringify(filterArr));
    } else {
      const data = {
        endTime,
        text,
        priority,
        id: idTmp,
        completed,
      };

      dispatch(addTaskToRedux(data));

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

    dispatch(modalAddTasksClose());
  };

  return (
    <div className={css.wrapAllForm}>
      <form onSubmit={handleSubmit} className={css.addForm} type="submit">
        <div className={css.topAddForm}>
          <h2 className={css.title}>Нове завдання</h2>
          <button
            type="button"
            className={`${css.backBtn} ${css[`${getColor(priority)}`]}`}
            onClick={() => {
              dispatch(modalAddTasksClose());
              handleResetEditTask();
            }}
          >
            <СrissСross className={css.close} />
          </button>
        </div>

        <div className={css.wrapTextarea}>
          <textarea
            className={css.inputTask}
            type="text"
            autoFocus
            placeholder=" . . ."
            name="text"
            value={text}
            onChange={handleText}
          />
          <p id="missingText" className={css.error}>
            {errorMessage}
          </p>
        </div>

        <div className={css.twoInputs}>
          <div className={css.wrapInput}>
            <div className={css.wrapDescr}>
              <p>час виконання:</p>
              <Clock className={css.clock} />
            </div>

            <DatePicker
              locale={uk}
              className={css.dataInput}
              selected={endTime}
              onChange={handleChangeTime}
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
            <div className={css.wrapDescr}>
              <p> важливість: </p>
              <Level className={css.level} />
            </div>
            <PrioritySelector
              className={css.priorityInput}
              options={options}
              value={priority}
              onChange={handleChangePriority}
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
};

AddTaskForm.defaultProps = {
  editTask: null,
};

AddTaskForm.propTypes = {
  editTask: PropTypes.shape(PropTypes.string.isRequired),
  handleResetEditTask: PropTypes.func.isRequired,
};
export default AddTaskForm;
