import React from 'react';
import dayjs from 'dayjs';
import css from './DateView.module.css';

const DateView = () => {
  const dateNow = dayjs(new Date()).format('DD MMM.');
  const currentYear = dayjs().year();
  return (
    <div className={css.date}>
      <span>{currentYear}</span>
      <span>{dateNow}</span>
    </div>
  );
};

export default DateView;
