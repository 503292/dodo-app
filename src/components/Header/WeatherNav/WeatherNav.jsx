import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import parseWeatherData from './ParseWorlWeather';
import { fetchWorldWeather } from '../../../services/api';
import { updateLocation } from '../../../redux/location/locationActions';

import switchIcon from './switchIcon';

import css from './WeatherNav.module.css';

const getWeather = () => {
  const localWeather = JSON.parse(localStorage.getItem('localWeather'));
  if (localWeather) {
    return localWeather;
  }
  return '';
};

const WeatherNav = () => {
  const dispatch = useDispatch();
  const locationRDX = useSelector(state => state.location);
  const [weather, setWeather] = useState(getWeather());
  const [location, setLocation] = useState(locationRDX ?? '');

  //   helpers
  const setNewLocation = () => {
    const localLocation = localStorage.getItem('location');
    if (localLocation) {
      return localLocation;
    }
    return location;
  };

  const getGlobalWeather = () => {
    fetchWorldWeather(setNewLocation()).then(data => {
      const dataWeather = parseWeatherData(data);
      if (!dataWeather) return;
      localStorage.setItem('localWeather', JSON.stringify(dataWeather));
      localStorage.setItem('location', dataWeather.timezone);

      setWeather(dataWeather);
      setLocation(dataWeather.timezone);
      dispatch(updateLocation(dataWeather.timezone));
    });
  };

  useEffect(() => {
    if (isLocalEqualToday(weather.createDateTime)) return;
    getGlobalWeather();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (locationRDX) {
      setLocation(locationRDX);
      setWeather(JSON.parse(localStorage.getItem('localWeather')));
    }
  }, [locationRDX]);

  return (
    <>
      {weather ? (
        <div
          title="Прогноз погоди (іконка погоди і температура в даний час):"
          className={css.wrapWeather}
        >
          <div className={css.wrapIcon}>
            {switchIcon(
              weather.currentWeather.descrEn,
              weather.currentWeather.isDayTime,
            )}
          </div>
          <div className={css.wrapDescr}>
            <p className={css.degree}>{weather.currentWeather.tempC}&deg;</p>
          </div>
          <p className={css.timezone}>{location}</p>
        </div>
      ) : null}
    </>
  );
};

export default WeatherNav;

function isLocalEqualToday(local) {
  if (!local) return false;
  const today = dayjs();
  const localDate = dayjs(local);
  return today.isSame(localDate, 'day');
}
