import React from 'react';

// import { ReactComponent as Flower } from '../../../assets/image/flowers/flowerInfo.svg';
import { ReactComponent as Alatyr } from '../../../assets/image/alatyr.svg';

import css from './Logo.module.css';

const Logo = () => (
  <div>
    <Alatyr className={css.alatyr} />
  </div>
);

export default Logo;
