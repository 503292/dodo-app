import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

import weatherFolk from './weatherFolkData';

import css from './WeatherFolk.module.scss';

function isLeapYear() {
  const year = new Date().getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDayFolk(indexDay) {
  const selectedDay = dayjs(new Date()).dayOfYear() + indexDay;

  const index = isLeapYear()
    ? selectedDay - 1
    : selectedDay < 60
    ? selectedDay - 1
    : selectedDay;

  return weatherFolk[index];
}

const WeatherFolk = ({ indexDay }) => {
  dayjs.extend(dayOfYear);

  const folk = useMemo(() => {
    return getDayFolk(indexDay);
  }, [indexDay]);

  return <p className={css.wrapWeatherFolk}>{folk}</p>;
};

WeatherFolk.propTypes = {
  indexDay: PropTypes.number.isRequired,
};

export default WeatherFolk;
