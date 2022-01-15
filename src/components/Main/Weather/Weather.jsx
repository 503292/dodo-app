import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
// import PropTypes from 'prop-types';

import WeatherSearch from '../../commons/WeatherSearch/WeatherSearch';
import WeatherDescription from '../../commons/WeatherDescription/WeatherDescription';
import parseWeatherData from '../../Header/WeatherNav/ParseWorlWeather';

import { fetchWorldWeather } from '../../../services/api';
import { loaderOn, loaderOff } from '../../../redux/global/globalActions';
import { updateLocation } from '../../../redux/location/locationActions';

import 'react-toastify/dist/ReactToastify.css';
import css from './Weather.module.css';

// helpers
const getLocalWeather = () =>
  JSON.parse(localStorage.getItem('localWeather')) ?? '';
const getLocation = () => localStorage.getItem('location') ?? '';
const getLastSearch = () =>
  JSON.parse(localStorage.getItem('lastSearch')) ?? [];

const Weather = () => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(getLocalWeather());
  const [location, setLocation] = useState(getLocation());
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState(getLastSearch());

  const updateLastSearch = async data => {
    if (lastSearch.includes(data)) {
      return;
    }

    if (lastSearch.length < 5) {
      setLastSearch([...lastSearch, data]);
      localStorage.setItem('lastSearch', JSON.stringify(lastSearch));
    }

    if (lastSearch.length === 5) {
      const tmp = lastSearch;
      tmp.shift();
      tmp.push(data);
      setLastSearch(tmp);
      localStorage.setItem('lastSearch', JSON.stringify(lastSearch));
    }
  };

  const fetchWeather = lowerCaseSearch => {
    dispatch(loaderOn());

    fetchWorldWeather(lowerCaseSearch)
      .then(data => {
        const parseData = parseWeatherData(data);
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        localStorage.setItem('location', parseData.timezone);
        updateLocation(parseData.timezone);

        updateLastSearch(parseData.timezone);

        setWeather(parseData);
        setLocation(lowerCaseSearch);

        dispatch(updateLocation(lowerCaseSearch));
        dispatch(loaderOff());
      })
      // eslint-disable-next-line no-unused-vars
      .catch(() => {
        toast('Такого населеного пункту немає (. Попробуйте латиницею.');
        dispatch(loaderOff());
      });
  };

  useEffect(() => {}, [search]);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const lowerCaseSearch = search.toLowerCase().trim();

    if (lowerCaseSearch === '') {
      toast('Ви не вказали назву населеного пункту! (.');
      return;
    }

    fetchWeather(lowerCaseSearch);

    // reset search
    setSearch('');
  };
  const clickLastSearch = e => {
    e.preventDefault();
    fetchWeather(e.target.value);
  };
  return (
    <div className={css.weather}>
      <WeatherSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        location={location}
        search={search}
        lastSearch={lastSearch}
        clickLastSearch={clickLastSearch}
      />
      {weather && <WeatherDescription weather={weather} />}
      <ToastContainer autoClose={4500} position="bottom-center" />
    </div>
  );
};

export default Weather;
