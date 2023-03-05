import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

import weatherFolk from './weatherFolkData';

import css from './WeatherFolk.module.scss';

// helpers
function getDayOfYear(indexDay) {
  return dayjs(new Date()).dayOfYear() + indexDay;
}

function getDayFolk(num, arr) {
  // TODO fix for 29march year (365 to 366 days)
  const folk = arr[num];
  // const folk = arr[num];
  return folk;
}

const WeatherFolk = ({ indexDay }) => {
  dayjs.extend(dayOfYear);

  const folk = useMemo(() => {
    return getDayFolk(getDayOfYear(indexDay), weatherFolk);
  }, [indexDay]);

  return <p className={css.wrapWeatherFolk}>{folk}</p>;
};

WeatherFolk.propTypes = {
  indexDay: PropTypes.number.isRequired,
};

export default WeatherFolk;
