import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
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
          <div className={css.wrapIcon}>
            <FontAwesomeIcon className={css.calendar} icon={faCalendarAlt} />
          </div>

          <DatePicker
            className={css.dataPicker}
            selected={startDate}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

export default EnterDay;

// calendar-alt
