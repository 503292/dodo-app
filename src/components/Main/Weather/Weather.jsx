import React, { Component } from 'react';

import PropTypes from 'prop-types';

import WeatherSearch from './WeatherSearch/WeatherSearch';
import WeatherDescription from './WeatherDescription/WeatherDescription';

import css from './Weather.module.css';

class Weather extends Component {
  state = {
    weather: '',
    location: '',
    search: '',
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
    const { locationFromRedux } = this.props;
    const localWeather = JSON.parse(localStorage.getItem('localWeather'));

    if (prevState.location !== locationFromRedux) {
      this.setState({
        weather: localWeather,
        location: locationFromRedux,
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
    console.log(lowerCaseSearch, 'search');

    updateLocation(lowerCaseSearch);

    // reset search
    this.setState({
      search: '',
    });
  };

  render() {
    const { weather, location, search } = this.state;

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
Weather.defaultProps = {
  locationFromRedux: '',
};

Weather.propTypes = {
  updateLocation: PropTypes.func.isRequired,
  locationFromRedux: PropTypes.string,
};

export default Weather;
