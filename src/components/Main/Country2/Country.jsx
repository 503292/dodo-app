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
    setSelectedCityName(cityName);
    // Додатково можна перегортати картку при виборі міста, якщо це потрібно
    // setIsFlipped(true);
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
              {/* Тут можна відображати інформацію про selectedCityName */}
              {/* {selectedCityName && <h2>Вибране місто: {selectedCityName}</h2>} */}
            </div>
          </ReactCardFlip>
        </BoxWithBorder>
      </div>
    </div>
  );
};

export default Country;
