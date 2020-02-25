import React from 'react';
import PropTypes from 'prop-types';
import css from './PrioritySelector.module.css';

const PrioritySelector = ({ options, value, onChange }) => {
  const getColor = el => {
    switch (el) {
      case 'low':
        return 'lowPriority';
      case 'high':
        return 'highPriority';
      default:
        return 'normalPriority';
    }
  };

  return (
    <select
      name="priority"
      value={value}
      onChange={onChange}
      // className={css[`${getColor(value)}`]`${css.select}`}
      className={`${css.select} ${css[`${getColor(value)}`]}`}
    >
      {options.map(option => (
        <option className={css.oneOption} key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

PrioritySelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PrioritySelector;
