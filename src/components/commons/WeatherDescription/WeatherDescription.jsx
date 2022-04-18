import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WeatherHours from '../WeatherHours/WeatherHours';
import WeatherDays from '../WeatherDays/WeatherDays';

import switchIcon from '../../Header/WeatherNav/switchIcon';

import css from './WeatherDescription.module.css';

const WeatherDescription = ({ weather }) => {
  const [indexDay, setIndexDay] = useState(0);

  const handleIndexDay = idx => {
    setIndexDay(idx);
  };

  return (
    <div className={css.wrapDescription}>
      <WeatherDays
        weather={weather}
        handleIndexDay={handleIndexDay}
        switchIcon={switchIcon}
        indexDay={indexDay}
      />

      <WeatherHours
        weather={weather}
        indexDay={indexDay}
        switchIcon={switchIcon}
      />
    </div>
  );
};

WeatherDescription.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
};

export default WeatherDescription;
