import React, { useState, useEffect } from 'react';

import css from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  const timeStr = time.toLocaleTimeString();
  // console.log(timeStr, 'timeStr');
  const timeSplit = timeStr.split(':');
  return (
    <div>
      {' '}
      <div className={css.clock}>
        {timeSplit[0]}
        {` : `}
        {timeSplit[1]}
        {/* {` : `}
        {timeSplit[2]} */}
      </div>
      {/* <>{console.log(time, 'time')}</> */}
    </div>
  );
};

export default Clock;
