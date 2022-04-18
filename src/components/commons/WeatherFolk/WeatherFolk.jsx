import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

import weatherFolk from './weatherFolkData';

import css from './WeatherFolk.module.scss';

const WeatherFolk = ({ indexDay }) => {
  // const today = new Date().
  // console.log(weatherFolk, 'weatherFolk');
  dayjs.extend(dayOfYear);

  const getDayOfYear = () => {
    return dayjs(new Date()).dayOfYear() + indexDay;
  };

  // console.log(getDayOfYear(), 'getDayOfYear');

  function getDayFolk(num, arr) {
    // TODO fix for 29march year (365 to 366 days)
    // const folk = arr[num - 1];
    const folk = arr[num];
    return folk;
  }

  return (
    <div className={css.wrapWeatherFolk}>
      {getDayFolk(getDayOfYear(), weatherFolk)}
    </div>
  );
};

WeatherFolk.propTypes = {
  indexDay: PropTypes.number.isRequired,
};

export default WeatherFolk;
