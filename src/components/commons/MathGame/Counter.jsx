import React from 'react';
import CircleButton from './CircleButton';
import { useBlink } from './useBlink';

import { ReactComponent as Lamp } from '../../../assets/image/lamp.svg';

import css from './MathGame.module.scss';

const Counter = ({ count }) => {
  const color = useBlink();
  return (
    <div className={css.wrapLamp}>
      <CircleButton>
        <Lamp style={{ color: color }} />
      </CircleButton>

      <h3> : {count}</h3>
    </div>
  );
};

export default Counter;
