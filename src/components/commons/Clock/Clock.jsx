import React, { useState, useEffect } from 'react';

import css from './Clock.module.css';

// TODO add .day .month .num_month

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
    </div>
  );
};

export default Clock;
