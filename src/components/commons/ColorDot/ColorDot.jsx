import React from 'react';

import css from './ColorDot.module.scss';

const ColorDot = ({ styles }) => {
  return <span style={styles} className={css.dot} />;
};

export default ColorDot;
