import React, { Component } from 'react';

import WeatherSearch from './WeatherSearch/WeatherSearch';
import WeatherDescription from './WeatherDescription/WeatherDescription';

// import { fetchCurrentWeather } from '../../../services/api';

import css from './Weather.module.css';

class Weather extends Component {
  state = {
    weather: '',
    location: '',
  };

  componentDidMount() {
    const localWeather = JSON.parse(localStorage.getItem('localWeather'));
    const location = localStorage.getItem('location');
    this.setState({
      weather: localWeather,
      location,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { weather, location } = this.state;

    return (
      <div className={css.weather}>
        <WeatherSearch handleChange={this.handleChange} location={location} />
        {weather && <WeatherDescription weather={weather} />}
      </div>
    );
  }
}

export default Weather;
