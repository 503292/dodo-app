import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import parseWeatherData from './ParseWorlWeather';
import { fetchWorldWeather } from '../../../services/api';

import switchIcon from './switchIcon';

import css from './WeatherNav.module.css';

class WeatherNav extends Component {
  state = {
    weather: '',
    location: '',
  };

  componentDidMount() {
    const { locationFromRedux, updateLocation } = this.props;

    const setLocation = () => {
      const localLocation = localStorage.getItem('location');
      if (localLocation) {
        return localLocation;
      }
      return locationFromRedux;
    };

    fetchWorldWeather(setLocation())
      .then(data => {
        const parseData = parseWeatherData(data);
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        localStorage.setItem('location', parseData.timezone);

        this.setState({
          weather: parseData,
          location: parseData.timezone,
        });
        updateLocation(parseData.timezone);
      })
      // eslint-disable-next-line no-unused-vars
      .catch(error => {
        toast('Якщо ви не бачите погоду. Зверніться у техпідтримку');
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { locationFromRedux } = this.props;

    if (locationFromRedux !== prevState.location) {
      this.setState({
        location: locationFromRedux,
      });
    }
  }

  render() {
    const { weather, location } = this.state;

    return (
      <>
        {weather && (
          <div className={css.wrapWeather}>
            <div className={css.wrapIcon}>
              {switchIcon(
                weather.currentWeather.descrEn,
                weather.currentWeather.isDayTime,
              )}
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
