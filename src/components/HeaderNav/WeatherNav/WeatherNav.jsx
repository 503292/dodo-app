import React, { Component } from 'react';

// import icons from './weatherIcons';
import parseWeatherData from './ParseWorlWeather';
import { fetchWorldWeather } from '../../../services/api';
import switchIcon from './weatherIcons';

import css from './WeatherNav.module.css';

// wind S SW SSW SSE SE ESE E NE NNE N NNW  NW WNW WSW ENE

class WeatherNav extends Component {
  state = {
    weather: '',
  };

  componentDidMount() {
    fetchWorldWeather('kiev')
      .then(data => {
        console.log(data, 'data');
        const parseData = parseWeatherData(data);
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        console.log(parseData, 'parseData');
        this.setState({
          weather: parseData,
        });
      })
      .catch(error => {
        console.log(error, 'err wheather darkSky');
      });
  }

  render() {
    const { weather } = this.state;
    // weather.currentWeather.descEn
    let icon = '';
    if (weather) {
      icon = switchIcon(weather.currentWeather.descrEn, true);
    }

    console.log(weather, 'weather');
    // console.log(icons.cloud_moon, 'cloud-moon-rain.svg');

    return (
      <>
        {weather && (
          <>
            <div className={css.wrapWeather}>
              <div className={css.wrapIcon}>
                <img className={css.icon} src={icon} alt="img" />
              </div>

              <p className={css.degree}>{weather.currentWeather.tempC}&deg;</p>
            </div>
            <div className={css.timezone}>{weather.timezone}</div>
          </>
        )}
      </>
    );
  }
}

export default WeatherNav;
