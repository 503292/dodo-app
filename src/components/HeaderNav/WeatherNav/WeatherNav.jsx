import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import css from './WeatherNav.module.css';

class WeatherNav extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { weather: [] };

  render() {
    return (
      <>
        <div className={css.wrapWeather}>
          <FontAwesomeIcon className={css.cloudSun} icon={faCloudSun} />
          <p className={css.degree}>16&deg;</p>
        </div>
      </>
    );
  }
}

export default WeatherNav;
