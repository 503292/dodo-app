import React from 'react';
import PropTypes from 'prop-types';

import css from './BoxWithBorder.module.scss';

const BoxWithBorder = ({ children, title }) => {
  return (
    <>
      <fieldset className={css.fieldset}>
        {title ? (
          <legend className={css.legend}>
            <p>{title}</p>
          </legend>
        ) : null}

        {children}
      </fieldset>
    </>
  );
};

BoxWithBorder.defaultProps = {
  title: '',
};

BoxWithBorder.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default BoxWithBorder;
