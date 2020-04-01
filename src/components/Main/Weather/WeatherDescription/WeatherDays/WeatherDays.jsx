import React, { Component } from 'react';

import PropTypes from 'prop-types';
import css from './WeatherDays.module.css';

class WeatherDays extends Component {
  state = {};

  render() {
    const { weather, switchIcon } = this.props;
    const daysWeather = weather.days;

    return (
      <div className={css.wrap}>
        {daysWeather.map(el => (
          <div className={css.dayOfWeek} key={el.dayOfWeek}>
            <div className={css.wrapDays}>
              <div className={css.dayWeek}>{el.dayOfWeek}</div>
              <div className={css.numDay}>{el.dayOfMonth}</div>
              <div className={css.nameMonth}>{el.month}</div>
              <div className={css.wrapIcon}>
                <img
                  src={switchIcon(
                    el.hourly[5].descrEn,
                    weather.currentWeather.isdaytime,
                  )}
                  alt="img"
                />
              </div>
              <div className={css.descrTemp}>
                <p>мін.</p>
                <p>макс.</p>
              </div>
              <div className={css.valueTemp}>
                <p>{el.minTemp}°</p>
                <p>{el.maxTemp}°</p>
              </div>
            </div>
            <div className={css.arrowSelect}>▼</div>
          </div>
        ))}
      </div>
    );
  }
}
WeatherDays.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
  switchIcon: PropTypes.func.isRequired,
};

export default WeatherDays;
