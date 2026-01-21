import React from 'react';
import CircleButton from './CircleButton';

import { ReactComponent as Lamp } from '../../../assets/image/lamp.svg';

import css from './MathGame.module.scss';

const COLORS = {
  correct: '#87c33b',
  wrong: 'grey',
};

const Counter = ({ count, answerStatus }) => {
  return (
    <div className={css.wrapLamp}>
      <CircleButton>
        <Lamp style={{ color: COLORS[answerStatus] }} />
      </CircleButton>

      <h3> : {count}</h3>
    </div>
  );
};

export default Counter;
