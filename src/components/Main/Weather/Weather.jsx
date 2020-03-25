import React, { Component } from 'react';

import fetchWeather from './FetchWeather';
// import axios from 'axios';

import css from './Weather.module.css';

// const apiKey = '18ebe79dbda269ab1e2698add6fbf9b1';

class Weather extends Component {
  state = {
    // weather: [],
    // lastSearch: ['/'],
    // location: 'Київ',
    // forecast: {},
  };

  componentDidMount() {
    const v = fetchWeather('50.45,30.51');
    console.log(v, 'v');
  }

  render() {
    // const v = this.fetchWeather('Lviv');

    // console.log(v, 'v');
    // if (v) {
    //   console.log(v.current, 'v');
    // }

    // const { weather, lastSearch } = this.state;
    // console.log(weather, 'weather');
    // console.log(lastSearch, 'lastSearch');

    return (
      <>
        {/* {v.lenght > 0 && <img src={v.current.weather_icons}></img>} */}
        <div className={css.wrapFind}>
          <input
            className={css.input}
            autoFocus
            placeholder="Назва населеного пункту . . ."
          />
          <button className={css.btn} type="button">
            Знайти
          </button>
        </div>
        {/* {lastSearch.length > 0 && (
          <div className={css.wrapLastSearch}>Kiev, Lviv</div>
        )} */}
      </>
    );
  }
}

export default Weather;
