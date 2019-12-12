import React, { Component } from 'react';

import css from './Weather.module.css';

class Weather extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { weather: [] };

  render() {
    return (
      <>
        <div className={css.wrapWeather}>
          <img
            src="https://www.freepik.com/free-icon/summer_877022.htm"
            alt="ff"
          />
          {/* <div> */}
          {/* <Icon>alarm</Icon>
          <WbSunnyIcon className={css.sun} />
          <CloudIcon className={css.cloud} /> */}
          {/* </div> */}
          <p className={css.degree}>16&deg;</p>
        </div>
      </>
    );
  }
}

export default Weather;
