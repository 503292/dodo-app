import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './WeatherDescription.module.css';

class WeatherDescription extends Component {
  state = {
    // checkedDay: '',
  };

  render() {
    const { weather } = this.props;
    // const currentWeather = weather.currentWeather;
    // const daysWeather = weather.days;

    console.log(weather, 'weather');
    return (
      <div className={css.wrapDescription}>
        <div className={css.wrapDays}>
          <div className={css.currentDay}>
            <div className={css.dayWeek}>понеділок</div>
            <div className={css.numDay}>30</div>
            <div className={css.nameMonth}>березня</div>
            <div className={css.icon}>іконка</div>
            <div className={css.descrTemp}>
              <p>мін.</p>
              <p>макс.</p>
            </div>
            <div className={css.valueTemp}>
              <p>+2°</p>
              <p>+9°</p>
            </div>
          </div>
          {/* <div className={css.nextDays}>map() 2.3.4.5.6.7</div> */}
        </div>
        {/* <div className={css.wrapHourly}>2.5.8.11.14.17.20</div> */}
      </div>
    );
  }
}

WeatherDescription.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
};

export default WeatherDescription;
