import React from 'react';
import dayjs from 'dayjs';
import css from './DateView.module.css';

const DateView = () => {
  const dateNow = dayjs(new Date()).format('DD MMM.  YYYY');
  return <div className={css.date}>{dateNow}</div>;
};

export default DateView;
