import React, { Component } from 'react';
import css from './Weather.module.css';

class Weather extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { weather: [] };

  render() {
    return (
      <>
        <div className={css.wrapWeather}>
          <img src="" alt="foto-wheather" />
          <p>temperature 16℃ </p>
        </div>
      </>
    );
  }
}

export default Weather;
