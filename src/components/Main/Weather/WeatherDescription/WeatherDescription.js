import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WeatherHours from './WeatherHours/WeatherHours';
import WeatherDays from './WeatherDays/WeatherDays';

import switchIcon from '../../../HeaderNav/WeatherNav/weatherIcons';

import css from './WeatherDescription.module.css';

class WeatherDescription extends Component {
  state = {
    indexDay: 2,
  };

  render() {
    const { weather } = this.props;
    const { indexDay } = this.state;

    console.log(weather, 'weather');
    return (
      <div className={css.wrapDescription}>
        <WeatherDays weather={weather} switchIcon={switchIcon} />

        <WeatherHours
          weather={weather}
          indexDay={indexDay}
          switchIcon={switchIcon}
        />
      </div>
    );
  }
}

WeatherDescription.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
};

export default WeatherDescription;
