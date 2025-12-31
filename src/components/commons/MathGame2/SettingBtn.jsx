import React from 'react';
import CircleButton from './CircleButton';

import { ReactComponent as SettingIcon } from '../../../assets/image/nav/setting.svg';

const SettingBtn = ({ isOpen, setIsOpen }) => {
  return (
    <CircleButton onClick={() => setIsOpen()} active={isOpen}>
      <SettingIcon />
    </CircleButton>
  );
};

export default SettingBtn;
