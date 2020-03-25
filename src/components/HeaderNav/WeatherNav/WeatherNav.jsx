import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { fetchCurrentWeather } from '../../../services/api';

import css from './WeatherNav.module.css';

class WeatherNav extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { weather: [] };

  // const v = fetchCurrentWeather('50.45,30.51');
  //   console.log(v, 'v');

  componentDidMount() {
    fetchCurrentWeather('50.45,30.51').then(data => {
      console.log(data, 'data');
      // const dataUSD = data.find(elem => elem.ccy === 'USD');
      // dataUSD.buy = Number(dataUSD.buy).toFixed(2);
      // dataUSD.sale = Number(dataUSD.sale).toFixed(2);
      // const dataEUR = data.find(elem => elem.ccy === 'EUR');
      // dataEUR.buy = Number(dataEUR.buy).toFixed(2);
      // dataEUR.sale = Number(dataEUR.sale).toFixed(2);
      // const dataRUR = data.find(elem => elem.ccy === 'RUR');
      // dataRUR.buy = Number(dataRUR.buy).toFixed(3);
      // dataRUR.sale = Number(dataRUR.sale).toFixed(3);
      // const currency = [dataUSD, dataEUR, dataRUR];
      // localStorage.setItem('currency', JSON.stringify(currency));
      // this.setState({
      //   currency,
      // });
      // })
      // .catch(error => {
      //   // this.setState({
      //   //   currency: error,
      //   // });
      //   console.log(error, 'err wheather');
    });
  }

  render() {
    return (
      <>
        <div className={css.wrapWeather}>
          <FontAwesomeIcon className={css.cloudSun} icon={faCloudSun} />
          <p className={css.degree}>16&deg;</p>
        </div>
      </>
    );
  }
}

export default WeatherNav;
