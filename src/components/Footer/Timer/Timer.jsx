import React from 'react';

import css from './Timer.module.css';

const Timer = () => (
  <>
    <div clasName={css.wrapTimer}>
      <p>16 : 12 : 12 </p>
      <p>днів : год : хв </p>
    </div>
  </>
);

export default Timer;
