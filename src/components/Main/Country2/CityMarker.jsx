import React from 'react';
import PropTypes from 'prop-types';

import css from './CityMarker.module.scss';

const CityMarker = ({ name, x, y, isSelected, onSelect }) => {
  const visibleCircleRadius = 7;
  const hitAreaRadius = 20;
  const fontSize = 18;

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

      <text
        x={x - 7}
        y={y - visibleCircleRadius - 9}
        className={`${css.nameText} ${isSelected ? css.selected : ''}`}
        fontSize={fontSize}
      >
        {name}
      </text>
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
