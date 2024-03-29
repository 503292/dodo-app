import React from 'react';
import PropTypes from 'prop-types';

import switchWind from './switchWind';

import css from './WeatherHours.module.scss';

const WeatherHours = ({ weather, indexDay, switchIcon }) => {
  const { days } = weather;

  return (
    <div>
      <div className={css.wrapCheckedDay}>
        <div className={css.wrapDescrDay}>
          <div className={css.infoDay}>
            <div className={css.numCheckedDay}>{days[indexDay].dayOfMonth}</div>
            <div>{days[indexDay].month}</div>
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
              {days[indexDay].hourly.map(h => (
                <td key={h.time}>{h.time}:00</td>
              ))}
            </tr>
            <tr>
              {days[indexDay].hourly.map(h => (
                <td key={h.time} className={css.wrapIcon}>
                  {switchIcon(h.descrEn, h.isDayTime)}
                </td>
              ))}
            </tr>
            <tr className={css.tableTemp}>
              {days[indexDay].hourly.map(h => (
                <td key={h.time}>{h.tempС}°</td>
              ))}
            </tr>

            <tr className={css.tableFeelsTemp}>
              {days[indexDay].hourly.map(h => (
                <td key={h.time}>{h.tempFeelsLikeС}°</td>
              ))}
            </tr>
            <tr className={css.tableHumidity}>
              {days[indexDay].hourly.map(h => (
                <td key={h.time}>{h.humidity}</td>
              ))}
            </tr>
            <tr className={css.tablePressure}>
              {days[indexDay].hourly.map(h => (
                <td key={h.time}>{h.pressure}</td>
              ))}
            </tr>
            <tr className={css.tableWind}>
              {days[indexDay].hourly.map(h => (
                <td key={h.time}>
                  <div className={css.wrapWindSpeed}>
                    <div className={css.wrapWayWind}>
                      {switchWind(h.windFrom)}
                    </div>
                    {h.windSpeed}
                  </div>
                </td>
              ))}
            </tr>
            <tr className={css.tableChanceOfRain}>
              {days[indexDay].hourly.map(h => (
                <td key={h.time}>
                  {+h.chanceOfRain > 0 ? `${h.chanceOfRain}` : ' - '}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css.wrapSun}>
        <div className={css.timezone}>{weather.timezone}</div>
        <div className={css.sunTime}>
          <p>
            Схід: <span>{days[indexDay].sunRise}</span>
          </p>
          <p>
            Захід: <span>{days[indexDay].sunSet}</span>
          </p>
        </div>
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
