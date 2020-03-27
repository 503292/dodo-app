import React, { Component } from 'react';

import icons from './weatherIcons';
import parseWeatherData from './ParseWorlWeather';
import { fetchWorldWeather } from '../../../services/api';

import css from './WeatherNav.module.css';

// wind S SW SSW SSE SE ESE E NE NNE N NNW  NW WNW WSW ENE

class WeatherNav extends Component {
  state = {
    weather: '',
  };

  // getIcon = (descUk) => {
  //   switch(descUk) {
  //     case 'Ясно':
  //     case 'Сонячно':
  //       ...
  //       break;

  //     case 'Невелика хмарність':

  //       ...
  //       break;
  //     case 'Суцільна хмарність':
  //     case 'Хмарно':
  //       ...
  //       break;
  //     case 'Невеликий сніг':
  //     case 'Місцями невеликий сніг':
  //     case 'Помірний або сильний снігопад':
  //     case 'Низова хуртовина':
  //     case 'Помірний сніг':
  //     case 'Заметіль':
  //     case 'Сильний сніг':
  //       ...
  //       break;
  //     case 'Мряка':
  //     case 'Туман':
  //     case 'Туман з памороззю':

  //       ...
  //       break;
  //     case 'Місцями дощ':
  //     case 'Час від часу помірний дощ':
  //     case 'Невелика злива':
  //     case 'Невеликий дощ':
  //     case 'Місцями невеликий дощ':
  //     case 'Помірна або сильна злива':
  //     case 'Помірний дощ':
  //     case 'Сильний дощ':
  //     case 'Дуже сильна злива':

  //       ...
  //       break;
  //     case 'Місцями невеликий дощ інколи з грозою':
  //     case 'Невеликий дощ зі снігом':
  //       ...
  //       break;
  //     case 'Місцями грози':
  //       ...
  //       break;

  //     default:
  //       ...
  //       break;
  //   }

  // };

  componentDidMount() {
    fetchWorldWeather('Kiev')
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
    // weather.currentWeather.descUk
    console.log(weather, 'weather');
    // console.log(icons.cloud_moon, 'cloud-moon-rain.svg');

    return (
      <>
        {weather && (
          <>
            <div className={css.wrapWeather}>
              <div className={css.wrapIcon}>
                <img className={css.icon} src={icons.thermometer} alt="img" />
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
