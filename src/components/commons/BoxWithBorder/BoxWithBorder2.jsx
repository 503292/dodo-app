import React from 'react';
import PropTypes from 'prop-types';

import css from './BoxWithBorder.module.scss';

const BoxWithBorder = ({ children, title }) => {
  return (
    <div className={css.boxWithBorder}>
      {title ? <h4 className={css.title}>{title}</h4> : null}
      <div className={css.descr}>{children}</div>
    </div>
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
