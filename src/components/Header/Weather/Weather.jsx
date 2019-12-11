import React, { Component } from 'react';

import wheatherIcon from '../../../assets/image/weather-icon.png';
import css from './Weather.module.css';

class Weather extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { weather: [] };

  render() {
    return (
      <>
        <div className={css.wrapWeather}>
          <img
            className={css.wheatherIcon}
            src={wheatherIcon}
            alt="foto-wheather"
          />
          <p className={css.degree}> 16℃ </p>
        </div>
      </>
    );
  }
}

export default Weather;
