import React from 'react';
import { WaveSpinner } from 'react-spinners-kit';
import PropTypes from 'prop-types';

import css from './Loader.module.css';

const Loader = ({ isLoading }) => {
  return (
    <div className={css.spinnerWrap}>
      <WaveSpinner size={30} color="gold" loading={isLoading} />
    </div>
  );
  // },
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
