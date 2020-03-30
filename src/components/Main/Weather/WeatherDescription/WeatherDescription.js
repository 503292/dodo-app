import React, { Component } from 'react';
import PropTypes from 'prop-types';

import switchIcon from '../../../HeaderNav/WeatherNav/weatherIcons';

import css from './WeatherDescription.module.css';

class WeatherDescription extends Component {
  state = {
    // checkedDay: '',
  };

  render() {
    const { weather } = this.props;
    // const currentWeather = weather.currentWeather;
    const daysWeather = weather.days;

    console.log(weather, 'weather');
    return (
      <div className={css.wrapDescription}>
        {daysWeather.map(el => (
          <div key={el.dayOfWeek} className={css.wrapDays}>
            <div className={css.dayWeek}>{el.dayOfWeek}</div>
            <div className={css.numDay}>{el.dayOfMonth}</div>
            <div className={css.nameMonth}>{el.month}</div>
            <div className={css.wrapIcon}>
              <img
                className={css.icon}
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
            {el.hourly.map(h => (
              <div key={h.time}>{h.time}:00</div>
            ))}
          </div>
        ))}

        {/* <div className={css.wrapHourly}>
          {daysWeather.map(el => (
            <div key={el.dayOfWeek}>
              {el.hourly.map(h => (
                <div key={h.time}>{h.time}:00</div>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}

WeatherDescription.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
};

export default WeatherDescription;
