/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import css from './Timer.module.css';
import { ReactComponent as Tree } from '../../../assets/image/tree.svg';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerStart, setTimerStart] = useState(null);
  const [newYear, setNewYear] = useState(new Date().getFullYear + 1);

  // helper
  const reversClock = () => {
    function pad(value, decr) {
      return String(value).padStart(decr, '0');
    }

    setInterval(() => {
      //   const newYear = new Date().getFullYear() + 1;

      const unixTimeNow = new Date().getTime();
      const unixNewYear = Date.parse(new Date(`${newYear}`));
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

      //   this.setState({
      //     days: pad(daysTmp, 3),
      //     hours: pad(hoursTmp, 2),
      //     minutes: pad(minutesTmp, 2),
      //     seconds: pad(secondsTmp, 2),
      //   });
    }, 1000);

    // return this.timer;
  };

  //   useEffect;

  return (
    <div className={css.wrapTimer}>
      {console.log(newYear, 'newYear')}
      <Tree />
    </div>
  );
};

export default Timer;
