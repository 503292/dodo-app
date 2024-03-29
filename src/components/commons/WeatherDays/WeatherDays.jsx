import React from 'react';

import PropTypes from 'prop-types';
import css from './WeatherDays.module.scss';

const weekend = {
  saturday: 'Субота',
  sunday: 'Неділя',
};

const WeatherDays = ({ weather, switchIcon, handleIndexDay, indexDay }) => {
  const daysWeather = weather.days;
  return (
    <div className={css.wrap}>
      {daysWeather.map(el => (
        <div className={css.dayOfWeek} key={el.dayOfWeek}>
          <button
            onClick={() => handleIndexDay(el.index)}
            type="button"
            className={
              indexDay === el.index
                ? `${css.active} ${css.btnDays}`
                : `${css.btnDays}`
            }
          >
            <div>{el.dayOfWeek}</div>
            <div
              className={
                el.dayOfWeek === weekend.saturday ||
                el.dayOfWeek === weekend.sunday
                  ? `${css.weekend} ${css.numDay}`
                  : `${css.numDay}`
              }
            >
              {el.dayOfMonth}
            </div>
            <div className={css.nameMonth}>{el.month}</div>
            <div className={css.wrapIcon}>
              {switchIcon(
                el.hourly[5].descrEn,
                weather.currentWeather.isdaytime,
              )}
            </div>
            <div className={css.descrTemp}>
              <p>мін.</p>
              <p>макс.</p>
            </div>
            <div className={css.valueTemp}>
              <p>{el.minTemp}°</p>
              <p>{el.maxTemp}°</p>
            </div>
          </button>
          {indexDay === el.index && <div className={css.arrowSelect}>▼</div>}
        </div>
      ))}
    </div>
  );
};

WeatherDays.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
  switchIcon: PropTypes.func.isRequired,
  handleIndexDay: PropTypes.func.isRequired,
  indexDay: PropTypes.number.isRequired,
};

export default WeatherDays;
