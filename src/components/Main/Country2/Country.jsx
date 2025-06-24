import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import BoxWithBorder from '../../commons/BoxWithBorder/BoxWithBorder';
import Motivator from '../../commons/Motivator/Motivator';

import cities from './cities';
import CityMarker from './CityMarker';

import { ReactComponent as MapUaBase } from '../../../assets/image/logo/mapUa.svg';

import css from './Country.module.scss';

const Country = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [selectedCityName, setSelectedCityName] = useState('Львів');

  const selectedCity = cities.find(city => city.name === selectedCityName);

  const handleClick = e => {
    // Якщо клік був на маркері, ми не перегортаємо картку
    if (
      e.target.closest('.city-marker') ||
      e.target.closest('circle') ||
      e.target.closest('text')
    ) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const handleCitySelect = cityName => {
    console.log(cityName);
    setSelectedCityName(cityName);
    // Додатково можна перегортати картку при виборі міста, якщо це потрібно
    // setIsFlipped(true); // Можна розкоментувати, якщо потрібно
  };

  const svgViewBox = '0 0 1280.000000 1280.000000';

  return (
    <div className={css.wrapCountry}>
      <div className={css.wrapFielset} onClick={e => handleClick(e)}>
        <BoxWithBorder>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className={`${css.wrapMap} ${css.blueYellow}`}>
              <svg
                className={css.svgMap}
                preserveAspectRatio="xMidYMid meet"
                viewBox={svgViewBox}
              >
                <MapUaBase />

                {cities.map(city => (
                  <CityMarker
                    key={city.name}
                    name={city.name}
                    x={city.coordinates.x}
                    y={city.coordinates.y}
                    isSelected={city.name === selectedCityName}
                    onSelect={handleCitySelect}
                  />
                ))}
              </svg>
            </div>
            <div className={`${css.backCard} ${css.blueYellow}`}>
              <Motivator />
            </div>
          </ReactCardFlip>
        </BoxWithBorder>
        <Emblem url={selectedCity.emblem} title={selectedCity.name} />
      </div>

      {selectedCity && (
        <>
          <h2 className={css.cityTitle}> {selectedCity.name}</h2>
          <CityRigion city={selectedCity} />
        </>
      )}
    </div>
  );
};

export default Country;

const Emblem = ({ url = '/', title = '/' }) => {
  return url ? <img className={css.emblem} src={url} title={title} /> : null;
};

const CityRigion = ({ city }) => {
  return (
    <div className={css.cityRegionInfoContainer}>
      {/* Секція для інформації про місто */}
      <div className={css.cityInfoSection}>
        <h3>Інформація про місто</h3>
        <p>
          Жителі міста: ~{' '}
          <strong>{city.population.toLocaleString('uk-UA')}</strong> люд.
        </p>
        <p>
          Площа: ~ <strong>{city.area_km2.toLocaleString('uk-UA')}</strong> км²
        </p>
        <p>
          День міста: ~ <strong>{city.city_day}</strong>
        </p>
      </div>

      {/* Секція для інформації про регіон */}
      <div className={css.regionInfoSection}>
        <h3>Інформація про регіон</h3>
        <p>
          Жителі регіону: ~{' '}
          <strong>{city.region_population.toLocaleString('uk-UA')}</strong> люд.
        </p>
        <p>
          Площа регіону: ~{' '}
          <strong>{city.region_area_km2.toLocaleString('uk-UA')}</strong> км²
        </p>
        <p>
          Поклади корисних копалин: ~{' '}
          <strong>
            {city.mineral_resources_estimated_value.toLocaleString('uk-UA')}
          </strong>{' '}
          млн. $
        </p>
      </div>
    </div>
  );
};
