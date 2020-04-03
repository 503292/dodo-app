import React, { Component } from 'react';

import PropTypes from 'prop-types';

import WeatherSearch from './WeatherSearch/WeatherSearch';
import WeatherDescription from './WeatherDescription/WeatherDescription';

// import { fetchFindCityTranslate } from '../../../services/api';

import css from './Weather.module.css';

class Weather extends Component {
  state = {
    weather: '',
    location: '',
    search: '',
    // error: '',
  };

  componentDidMount() {
    const localWeather = JSON.parse(localStorage.getItem('localWeather'));
    const location = localStorage.getItem('location');
    this.setState({
      weather: localWeather,
      location,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const localWeather = JSON.parse(localStorage.getItem('localWeather'));
    const location = localStorage.getItem('location');
    if (prevState.location !== location) {
      this.setState({
        weather: localWeather,
        location,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { search } = this.state;
    const { updateLocation } = this.props;

    const lowerCaseSearch = search.toLowerCase().trim();
    // console.log(lowerCaseSearch, 'search');

    // fetchFindCityTranslate(lowerCaseSearch)
    //   .then(data => {
    //     console.log(data.devices[0].cityUA, 'data');
    //     console.log(data.devices[0].cityRU, 'data');
    //     console.log(data.devices[0].cityEN, 'data');
    //     updateLocation(data.devices[0].cityEN);
    //   })
    //   .catch(error => {
    //     console.log(error, 'error');
    //   });

    updateLocation(lowerCaseSearch);

    // reset search
    this.setState({
      search: '',
    });
  };

  render() {
    const { weather, location, search } = this.state;

    // console.log(weather, 'weather');
    return (
      <div className={css.weather}>
        <WeatherSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          location={location}
          search={search}
        />
        {weather && <WeatherDescription weather={weather} />}
      </div>
    );
  }
}

Weather.propTypes = {
  updateLocation: PropTypes.func.isRequired,
};

export default Weather;
