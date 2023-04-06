import React, { useState, useEffect } from 'react';

import ColorDot from '../../commons/ColorDot/ColorDot';
import { ReactComponent as Tree } from '../../../assets/image/tree.svg';
import css from './Timer.module.css';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [newYear, setNewYear] = useState(new Date().getFullYear() + 1);

  function pad(value, decr) {
    return String(value).padStart(decr, '0');
  }
  // helper

  useEffect(() => {
    const intervalID = setInterval(() => {
      const newYearTmp = new Date().getFullYear() + 1;
      const unixTimeNow = new Date().getTime();
      const unixNewYear = Date.parse(new Date(`${newYearTmp}`));
      const endTimeToNewYear = unixNewYear - unixTimeNow;
      let daysTmp = Math.floor(endTimeToNewYear / (1000 * 60 * 60 * 24));

      const changeHours = new Date().getTimezoneOffset() / 60;

      let hoursTmp = Math.floor(
        (endTimeToNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) +
          changeHours,
      );

      if (hoursTmp < 0) {
        hoursTmp += 24;
        daysTmp -= 1;
      }

      const minutesTmp = Math.floor(
        (endTimeToNewYear % (1000 * 60 * 60)) / (1000 * 60),
      );

      const secondsTmp = Math.floor((endTimeToNewYear % (1000 * 60)) / 1000);

      setDays(pad(daysTmp, 3));
      setHours(pad(hoursTmp, 2));
      setMinutes(pad(minutesTmp, 2));
      setSeconds(pad(secondsTmp, 2));
      setNewYear(newYearTmp);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className={css.container}>
      <div className={css.wrapTimer}>
        <div className={css.wrapValue}>
          <button type="button" className={`${css.btn} ${css.blue}`}>
            {seconds}
          </button>
          <span className={css.descr}>Секунд</span>
        </div>
        <div className={css.wrapValue}>
          <button type="button" className={`${css.btn} ${css.yellow}`}>
            {minutes}
          </button>
          <span className={css.descr}>Хвилин</span>
        </div>

        <div className={css.wrapValue}>
          <button type="button" className={`${css.btn} ${css.red}`}>
            {hours}
          </button>
          <span className={css.descr}>Годин</span>
        </div>
        <div className={css.wrapValue}>
          <button type="button" className={`${css.btn} ${css.grey}`}>
            {days}
          </button>
          <span className={css.descr}>Дня</span>
        </div>
      </div>

      <div className={css.newYear}>
        <TreeToys />
        <Tree className={css.tree} />
        <p className={css.data}>{newYear}</p>
      </div>
    </div>
  );
};

export default Timer;

const TreeToys = () => {
  return (
    <>
      <ColorDot
        styles={{ top: '5px', left: '17px', background: 'var(--G8)' }}
      />
      <ColorDot
        styles={{ top: '13px', left: '15px', background: 'var(--danger)' }}
      />
      <ColorDot
        styles={{ top: '20px', left: '20px', background: 'var(--warning)' }}
      />
      <ColorDot
        styles={{ top: '23px', left: '12px', background: 'var(--primary)' }}
      />
    </>
  );
};
