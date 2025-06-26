import React from 'react';
import PropTypes from 'prop-types';

import css from './CityMarker.module.scss';

const CityMarker = ({ name, x, y, isSelected, onSelect }) => {
  const visibleCircleRadius = 9;
  const hitAreaRadius = 32;

  const handleClick = () => {
    onSelect(name);
  };

  return (
    <g
      onClick={handleClick}
      className={`${css.cityMarker} ${isSelected ? css.selected : ''}`}
    >
      <circle cx={x} cy={y} r={hitAreaRadius} className={css.hitArea} />

      <circle cx={x} cy={y} r={visibleCircleRadius} className={css.circle} />

      {isSelected ? (
        <text
          x={x - 42}
          y={y - visibleCircleRadius - 30}
          className={`${css.nameText} ${isSelected ? css.selected : ''}`}
        >
          {name}
        </text>
      ) : null}
    </g>
  );
};

CityMarker.propTypes = {
  name: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CityMarker;
