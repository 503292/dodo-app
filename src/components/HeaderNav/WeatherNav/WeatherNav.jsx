/* eslint-disable  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parseWeatherData from './ParseWorlWeather';
import { fetchWorldWeather } from '../../../services/api';

import switchIcon from './switchIcon';

import css from './WeatherNav.module.css';

// wind S SW SSW SSE SE ESE E NE NNE N NNW  NW WNW WSW ENE

class WeatherNav extends Component {
  state = {
    weather: '',
    location: '',
  };

  componentDidMount() {
    this._isMounted = true;
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
      .catch(error => {
        toast('Якщо ви не бачите погоду. Зверніться у техпідтримку');
        // console.log(error, 'Наразі якість трабли з сервером.(');
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
    const { isLoading, loaderOff } = this.props;
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
