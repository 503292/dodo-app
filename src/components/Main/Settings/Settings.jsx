import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Toogle from '../../commons/Toogle/Toogle';

import css from './Settings.module.scss';

const Settings = ({ isChecked }) => {
  const isAnimation = useSelector(state => state.global.isAnimationCheck);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({ type: 'IS_ANIMATION_CHECK' });
  };
  return (
    <div className={css.settings}>
      <div title={isAnimation ? 'is ON' : 'is OFF'} className={css.animation}>
        <Toogle isChecked={isAnimation} setAnimationCheched={handleOpen} />
        {isAnimation ? (
          <span>Анімація включена</span>
        ) : (
          <span>Анімація виключена</span>
        )}
      </div>
      {/* Settings in progress */}
    </div>
  );
};

export default Settings;
