import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import icons from './weatherIcons';
import parseWeatherData from './ParseWorlWeather';
import { fetchWorldWeather } from '../../../services/api';
import switchIcon from './weatherIcons';

import css from './WeatherNav.module.css';

// wind S SW SSW SSE SE ESE E NE NNE N NNW  NW WNW WSW ENE

class WeatherNav extends Component {
  state = {
    weather: '',
    location: '',
  };

  componentDidMount() {
    const { locationFromRedux } = this.props;
    fetchWorldWeather(locationFromRedux)
      .then(data => {
        // console.log(data, 'data');
        const parseData = parseWeatherData(data);
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        localStorage.setItem('location', parseData.timezone);
        console.log(parseData, 'parseData');
        this.setState({
          weather: parseData,
          location: parseData.timezone,
        });
      })
      .catch(error => {
        console.log(error, 'err wheather worldWeather');
      });
  }

  render() {
    const { weather, location } = this.state;
    let icon = '';
    if (weather) {
      icon = switchIcon(
        weather.currentWeather.descrEn,
        weather.currentWeather.isdaytime,
      );
    }

    // console.log(weather, 'weather');
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
            <div className={css.timezone}>{location}</div>
          </>
        )}
      </>
    );
  }
}
WeatherNav.propTypes = {
  locationFromRedux: PropTypes.string.isRequired,
};

export default WeatherNav;
