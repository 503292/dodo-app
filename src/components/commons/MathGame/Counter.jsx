import React from 'react';
import CircleButton from './CircleButton';
import { ReactComponent as Lamp } from '../../../assets/image/lamp.svg';

import css from './MathGame.module.scss';

const Counter = ({ count }) => {
  return (
    <div className={css.wrapLamp}>
      <CircleButton>
        <Lamp />
      </CircleButton>
      : {count}
    </div>
  );
};

export default Counter;
