import React from 'react';
import PropTypes from 'prop-types';

import WeatherHours from '../WeatherHours/WeatherHours';
import WeatherDays from '../WeatherDays/WeatherDays';

import switchIcon from '../../Header/WeatherNav/switchIcon';

import css from './WeatherDescription.module.css';

const WeatherDescription = ({ weather, indexDay, handleIndexDay }) => {
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
  indexDay: PropTypes.number.isRequired,
  handleIndexDay: PropTypes.func.isRequired,
};

export default WeatherDescription;
