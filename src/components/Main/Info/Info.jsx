import React from 'react';

import { ReactComponent as Flower } from '../../../assets/image/flowers/flower.svg';

// eslint-disable-next-line no-unused-vars
import css from './Info.module.css';

const Info = () => (
  <div className={css.container}>
    <div className={css.wrapFlower}>
      <button type="button" className={css.btnFlower}>
        <Flower className={css.flower} />
      </button>
      <p>Квіти включені</p>
    </div>
  </div>
);

export default Info;
