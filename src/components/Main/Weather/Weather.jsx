import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';

import WeatherSearch from '../../commons/WeatherSearch/WeatherSearch';
import WeatherDescription from '../../commons/WeatherDescription/WeatherDescription';
import parseWeatherData from '../../Header/WeatherNav/ParseWorlWeather';

import { fetchWorldWeather } from '../../../services/api';

import 'react-toastify/dist/ReactToastify.css';
import css from './Weather.module.css';

class Weather extends Component {
  state = {
    weather: '',
    location: '',
    search: '',
    lastSearch: [],
  };

  componentDidMount() {
    const localWeather = JSON.parse(localStorage.getItem('localWeather'));

    const location = localStorage.getItem('location');
    const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));

    if (lastSearch) {
      this.setState({
        lastSearch,
      });
    }
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

    const lowerCaseSearch = search.toLowerCase().trim();

    if (lowerCaseSearch === '') {
      toast('Ви не вказали назву населеного пункту! (.');
      return;
    }

    this.fetchWeather(lowerCaseSearch);

    // reset search
    this.setState({
      search: '',
    });
  };

  clickLastSearch = e => {
    e.preventDefault();

    const search = e.target.value;
    this.fetchWeather(search);
  };

  fetchWeather = lowerCaseSearch => {
    const { updateLocation, loaderOn, loaderOff } = this.props;
    loaderOn();

    fetchWorldWeather(lowerCaseSearch)
      .then(data => {
        const parseData = parseWeatherData(data);
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        localStorage.setItem('location', parseData.timezone);
        updateLocation(parseData.timezone);

        this.updateLastSearch(parseData.timezone);

        this.setState({
          weather: parseData,
          location: lowerCaseSearch,
        });
        updateLocation(lowerCaseSearch);

        loaderOff();
      })
      // eslint-disable-next-line no-unused-vars
      .catch(error => {
        toast('Такого населеного пункту немає (. Попробуйте латиницею.');
        loaderOff();
      });
  };

  updateLastSearch = async data => {
    const { lastSearch } = this.state;

    if (lastSearch.includes(data)) {
      return;
    }

    if (lastSearch.length < 5) {
      await this.setState({
        lastSearch: [...lastSearch, data],
      });

      localStorage.setItem('lastSearch', JSON.stringify(this.state.lastSearch));

      return;
    }

    if (lastSearch.length === 5) {
      const tmp = lastSearch;
      tmp.shift();
      tmp.push(data);

      await this.setState({
        lastSearch: tmp,
      });
      localStorage.setItem('lastSearch', JSON.stringify(this.state.lastSearch));
    }
  };

  render() {
    const { weather, location, search, lastSearch } = this.state;
    return (
      <div className={css.weather}>
        <WeatherSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          location={location}
          search={search}
          lastSearch={lastSearch}
          clickLastSearch={this.clickLastSearch}
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
  loaderOn: PropTypes.func.isRequired,
  loaderOff: PropTypes.func.isRequired,
};

export default Weather;
