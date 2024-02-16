import React from 'react';
import PropTypes from 'prop-types';
import css from './Toogle.module.css';

const Toogle = ({ isChecked, handleCheck }) => {
  return (
    <>
      <input
        checked={isChecked}
        onChange={handleCheck}
        type="checkbox"
        className={css.switch}
      />
    </>
  );
};

Toogle.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default Toogle;
