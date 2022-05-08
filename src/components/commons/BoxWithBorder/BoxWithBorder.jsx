import React from 'react';
import PropTypes from 'prop-types';

import css from './BoxWithBorder.module.scss';

const BoxWithBorder = ({ children, title }) => {
  return (
    <>
      <fieldset className={css.fieldset}>
        {title ? <legend className={css.legend}> {title} </legend> : null}

        {children}
      </fieldset>
    </>
  );
};

BoxWithBorder.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default BoxWithBorder;
