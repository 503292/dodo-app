import React from 'react';
import PropTypes from 'prop-types';

import css from './WeatherHours.module.css';

const WeatherHours = ({ weather, indexDay, switchIcon }) => {
  const daysWeather = weather.days;
  return (
    <div>
      <div className={css.wrapCheckedDay}>
        <div className={css.wrapDescrDay}>
          <div className={css.infoDay}>
            <div className={css.numCheckedDay}>
              {daysWeather[indexDay].dayOfMonth}
            </div>
            <div>{daysWeather[indexDay].month}</div>
          </div>
          <div className={css.infoDescr}>
            <div>Температура</div>
            <div>відчуття як</div>
            <div>Вологість, %</div>
            <div>Тиск, мм</div>
            <div>Вітрер, м/с</div>
            <div>Дощ, %</div>
          </div>
        </div>

        <table className={css.table}>
          <thead className={css.thead}>
            <tr>
              <th colSpan="2">ніч</th>
              <th colSpan="2">ранок</th>
              <th colSpan="2">день</th>
              <th colSpan="2">вечір</th>
            </tr>
          </thead>

          <tbody className={css.tbody}>
            <tr className={css.tableTime}>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time}>{h.time}:00</td>
              ))}
            </tr>
            <tr>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time} className={css.wrapIcon}>
                  <img
                    className={css.icon}
                    src={switchIcon(
                      h.descrEn,
                      weather.currentWeather.isdaytime,
                    )}
                    alt="weatherIcon"
                  />
                </td>
              ))}
            </tr>
            <tr className={css.tableTemp}>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time}>{h.tempС}°</td>
              ))}
            </tr>

            <tr className={css.tableFeelsTemp}>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time}>{h.tempFeelsLikeС}°</td>
              ))}
            </tr>
            <tr className={css.tableHumidity}>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time}>{h.humidity}</td>
              ))}
            </tr>
            <tr className={css.tablePressure}>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time}>{h.pressure}</td>
              ))}
            </tr>
            <tr className={css.tableWind}>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time}>{h.windSpeed}</td>
              ))}
            </tr>
            <tr>
              {daysWeather[indexDay].hourly.map(h => (
                <td key={h.time}>
                  {+h.chanceOfRain > 0 ? `${h.chanceOfRain}` : ' - '}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css.sunTime}>
        <p>
          Схід: <span>{daysWeather[indexDay].sunRise}</span>
        </p>
        <p>
          Захід: <span>{daysWeather[indexDay].sunSet}</span>
        </p>
      </div>
    </div>
  );
};

WeatherHours.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
  indexDay: PropTypes.number.isRequired,
  switchIcon: PropTypes.func.isRequired,
};

export default WeatherHours;
