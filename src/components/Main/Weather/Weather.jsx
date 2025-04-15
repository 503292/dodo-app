import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import WeatherSearch from '../../commons/WeatherSearch/WeatherSearch';
import WeatherDescription from '../../commons/WeatherDescription/WeatherDescription';
import WeatherFolk from '../../commons/WeatherFolk/WeatherFolk';
import parseWeatherData from '../../Header/WeatherNav/ParseWorlWeather';

import { fetchWorldWeather } from '../../../services/api';
import { loaderOn, loaderOff } from '../../../redux/global/globalActions';
import { updateLocation } from '../../../redux/location/locationActions';

import css from './Weather.module.css';

// helpers
const getLocalWeather = () =>
  JSON.parse(localStorage.getItem('localWeather')) ?? null;
const getLocation = () => localStorage.getItem('location') ?? '';
const getLastSearch = () =>
  JSON.parse(localStorage.getItem('lastSearch')) ?? [];

const Weather = () => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState(getLastSearch());
  const [indexDay, setIndexDay] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleIndexDay = idx => {
    setIndexDay(idx);
  };

  const updateLastSearch = async data => {
    if (lastSearch.includes(data)) {
      return;
    }

    if (lastSearch.length < 5) {
      const tmp = [...lastSearch, data];
      setLastSearch(tmp);
      localStorage.setItem('lastSearch', JSON.stringify(tmp));
    }

    if (lastSearch.length === 5) {
      const tmp = [...lastSearch];
      tmp.shift();
      tmp.push(data);
      setLastSearch(tmp);
      localStorage.setItem('lastSearch', JSON.stringify(tmp));
    }
  };

  const fetchWeather = lowerCaseSearch => {
    dispatch(loaderOn());

    fetchWorldWeather(lowerCaseSearch)
      .then(data => {
        const parseData = parseWeatherData(data);
        if (!parseData) return;
        localStorage.setItem('localWeather', JSON.stringify(parseData));
        localStorage.setItem('location', parseData.timezone);
        updateLastSearch(parseData.timezone);

        setWeather(parseData);
        setLocation(parseData.timezone);

        dispatch(updateLocation(parseData.timezone));
      })
      .catch(() => {
        toast('Населений пункт не знайдено.');
      })
      .finally(() => {
        dispatch(loaderOff());
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const localWeather = getLocalWeather();
    const storedLocation = getLocation();

    if (localWeather) {
      setWeather(localWeather);
      setLocation(storedLocation);
      setIsLoading(false);
    } else {
      fetchWeather('Chervonograd');
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const lowerCaseSearch = search.toLowerCase().trim();

    if (lowerCaseSearch === '') {
      toast('Оберіть населений пункт!');
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
    <div className={`${css.weather} scrollbarThumb`}>
      <WeatherSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        location={location}
        search={search}
        lastSearch={lastSearch}
        clickLastSearch={clickLastSearch}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : weather ? (
        <WeatherDescription
          weather={weather}
          indexDay={indexDay}
          handleIndexDay={handleIndexDay}
        />
      ) : null}

      <WeatherFolk indexDay={indexDay} />
    </div>
  );
};

export default Weather;
