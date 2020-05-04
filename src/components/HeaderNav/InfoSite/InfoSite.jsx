import React from 'react';

import { ReactComponent as Flower } from '../../../assets/image/flowers/flowerInfo.svg';

import css from './InfoSite.module.css';

const InfoSite = () => (
  <div>
    <Flower className={css.flower} />
  </div>
);

export default InfoSite;
