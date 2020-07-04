import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
// import css from './ClockForProgresBar.module.css';

const ClockProgresBar = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Clock value={value} />
    </>
  );
};

export default ClockProgresBar;
