import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import WeatherSearch from './WeatherSearch/WeatherSearch';
import WeatherDescription from './WeatherDescription/WeatherDescription';
import 'react-toastify/dist/ReactToastify.css';
import parseWeatherData from '../../HeaderNav/WeatherNav/ParseWorlWeather';
import { fetchWorldWeather } from '../../../services/api';
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

    fetchWorldWeather(lowerCaseSearch)
      .then(data => {
        // console.log(data, 'data');
        const parseData = parseWeatherData(data);
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        localStorage.setItem('location', parseData.timezone);
        updateLocation(parseData.timezone);
        this.setState({
          weather: parseData,
          location: lowerCaseSearch,
        });
        updateLocation(lowerCaseSearch);
      })
      .catch(error => {
        toast('Введіть населений пункт латиницею !');
        console.log(error, 'такого населеного пункту немає');
      });

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
        <ToastContainer autoClose={4500} position="bottom-center" />
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
