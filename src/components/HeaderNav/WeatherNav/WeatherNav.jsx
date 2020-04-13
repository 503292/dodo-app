import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import icons from './weatherIcons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        const parseData = parseWeatherData(data);
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        localStorage.setItem('location', parseData.timezone);
        // console.log(parseData, 'parseData');
        this.setState({
          weather: parseData,
          location: parseData.timezone,
        });
      })
      .catch(error => {
        console.log(error, 'err wheather worldWeather');
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { locationFromRedux, updateLocation } = this.props;

    if (locationFromRedux !== prevState.location) {
      fetchWorldWeather(locationFromRedux)
        .then(data => {
          // console.log(data, 'data');
          const parseData = parseWeatherData(data);
          localStorage.setItem('localWeather', JSON.stringify(parseData));
          localStorage.setItem('location', parseData.timezone);
          updateLocation(parseData.timezone);
          this.setState({
            weather: parseData,
            location: locationFromRedux,
          });
        })
        .catch(error => {
          toast('Введіть населений пункт латиницею !');
          console.log(error, 'такого населеного пункту немає');
        });
    }
  }

  render() {
    const { weather, location } = this.state;
    let icon = '';
    if (weather) {
      icon = switchIcon(
        weather.currentWeather.descrEn,
        weather.currentWeather.isDayTime,
      );
    }

    return (
      <>
        {weather && (
          <div className={css.wrapWeather}>
            <div className={css.wrapIcon}>
              <img className={css.icon} src={icon} alt="img" />
            </div>
            <div className={css.wrapDescr}>
              <p className={css.degree}>{weather.currentWeather.tempC}&deg;</p>
            </div>
            <p className={css.timezone}>{location}</p>
          </div>
        )}
        <ToastContainer autoClose={4500} position="bottom-center" />
      </>
    );
  }
}
WeatherNav.propTypes = {
  locationFromRedux: PropTypes.string.isRequired,
  updateLocation: PropTypes.func.isRequired,
};

export default WeatherNav;
