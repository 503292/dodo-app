import React from 'react';

// import { ReactComponent as Setting } from '../../../assets/image/setting.svg';

// import { ReactComponent as Flower } from '../../../assets/image/flowers/flowerS.svg';
import { ReactComponent as Flower2 } from '../../../assets/image/flowers/flowerSS.svg';

import css from './InfoSite.module.css';

const InfoSite = () => (
  <div className={css.wrapInfo}>
    {/* <Setting className={css.info} /> */}
    {/* <Flower className={css.flower} /> */}

    <Flower2 className={css.flower} />
  </div>
);

export default InfoSite;
