import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Toogle from '../Toogle/Toogle';

import css from './AnimationToogle.module.scss';

const AnimationToogle = () => {
  const isAnimation = useSelector(state => state.global.isAnimationCheck);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({ type: 'IS_ANIMATION_CHECK' });
  };
  return (
    <div title={isAnimation ? 'is ON' : 'is OFF'} className={css.animation}>
      <Toogle isChecked={isAnimation} setAnimationCheched={handleOpen} />
      {isAnimation ? (
        <span>Анімація включена</span>
      ) : (
        <span>Анімація виключена</span>
      )}
    </div>
  );
};

export default AnimationToogle;
