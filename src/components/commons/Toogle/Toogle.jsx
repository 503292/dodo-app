import React from 'react';
import PropTypes from 'prop-types';
import css from './Toogle.module.css';

const Toogle = ({ isChecked, setAnimationCheched }) => {
  return (
    <>
      <input
        checked={isChecked}
        onChange={setAnimationCheched}
        type="checkbox"
        className={css.switch}
      />
    </>
  );
};

Toogle.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setAnimationCheched: PropTypes.func.isRequired,
};

export default Toogle;
