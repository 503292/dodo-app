import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

// import '../ModalAddTask/AddTaskForm/node_modules/react-datepicker/dist/react-datepicker.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import css from './EnterDay.module.css';

class EnterDay extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    const { startDate } = this.state;
    return (
      <>
        <div className={css.wrapEnterDay}>
          <div className={css.wrapDataPicker}>
            <div className={css.wrapIcon}>
              <FontAwesomeIcon className={css.calendar} icon={faCalendarAlt} />
            </div>
            <DatePicker
              //   locale="uk"
              todayButton="Today"
              className={css.dataPicker}
              selected={startDate}
              onChange={this.handleChange}
            />
          </div>

          <div className={css.wrapTasksLevels}>
            {/* <div className={css.wrapAllTaskIcon}>
              <FontAwesomeIcon
                className={css.allTaskIcon}
                icon={faCaretRight}
              />
            </div> */}
            <button type="button" className={css.allTaskBtn}>
              # all task
            </button>

            <FontAwesomeIcon className={css.red} icon={faCircle} />
            <FontAwesomeIcon className={css.yellow} icon={faCircle} />
            <FontAwesomeIcon className={css.green} icon={faCircle} />
          </div>
        </div>
      </>
    );
  }
}

export default EnterDay;

// calendar-alt
