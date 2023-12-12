import React from 'react';

import { ReactComponent as Left } from '../../../assets/image/arrow-l.svg';
import { ReactComponent as Right } from '../../../assets/image/arrow-r.svg';

const BtnArrow = ({ name = 'Left', handleClick }) => {
  return (
    <button onClick={handleClick}>
      {name === 'Left' ? <Left /> : <Right />}
      {name === 'Left' ? 'Left' : 'Right'}
    </button>
  );
};

export default BtnArrow;
