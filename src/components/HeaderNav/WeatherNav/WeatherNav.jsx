import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
// import { fetchDarkSkyWeather } from '../../../services/api';
import { fetchWorldWeather } from '../../../services/api';

import css from './WeatherNav.module.css';

class WeatherNav extends Component {
  state = {
    weather: '',
  };

  componentDidMount() {
    fetchWorldWeather('Kiev')
      .then(data => {
        // localStorage.setItem('localWeather', JSON.stringify(data));
        console.log(data, 'data');
        // this.setState({
        //   weather: data,
        // });
      })
      .catch(error => {
        console.log(error, 'err wheather darkSky');
      });
    // fetchDarkSkyWeather('50.45,30.51')
    //   .then(data => {
    //     localStorage.setItem('localWeather', JSON.stringify(data));
    //     this.setState({
    //       weather: data,
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error, 'err wheather darkSky');
    //   });
  }

  render() {
    const { weather } = this.state;

    console.log(weather, 'weather');
    if (weather) {
      console.log(weather.currently.temperature, 'weather');
    }

    return (
      <>
        {weather && (
          <>
            <div className={css.wrapWeather}>
              <FontAwesomeIcon className={css.cloudSun} icon={faCloudSun} />
              <p className={css.degree}>{weather.currently.temperature}&deg;</p>
            </div>
            <div className={css.timezone}>{weather.timezone}</div>
          </>
        )}
      </>
    );
  }
}

export default WeatherNav;
