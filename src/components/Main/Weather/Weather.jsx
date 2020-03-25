import React, { Component } from 'react';

// import { fetchCurrentWeather } from '../../../services/api';
// import fetchWeather from './FetchWeather';
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

  componentDidMount() {}

  render() {
    // const { weather, lastSearch } = this.state;
    // console.log(weather, 'weather');
    // console.log(lastSearch, 'lastSearch');

    return (
      <>
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
