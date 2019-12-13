import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import css from './Weather.module.css';

class Weather extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { weather: [] };

  render() {
    return (
      <>
        <div className={css.wrapWeather}>
          <FontAwesomeIcon icon={faCloudSun} />
          <p className={css.degree}>16&deg;</p>
        </div>
      </>
    );
  }
}

export default Weather;
