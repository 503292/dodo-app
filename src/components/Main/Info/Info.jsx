import React from 'react';
import PropTypes from 'prop-types';

import BoxWithBorder from '../../commons/BoxWithBorder/BoxWithBorder2';

import { ReactComponent as ThreeDots } from '../../../assets/image/three-dots-vertical.svg';
import { ReactComponent as WhatSappUrl } from '../../../assets/image/messengers/whatsapp.svg';

import css from './Info.module.scss';

const Info = () => (
  <div className={css.container}>
    <div className={css.wrapDescription}>
      <BoxWithBorder title="Для швидкого доступу з головного екрану телефона:">
        <div className={css.inWall}>
          <p>
            - У верхній частині браузера натисніть -&gt;
            <ThreeDots className={css.threeDots} />
          </p>
          <p>
            - З випадаючього вікна виберіть -&gt;
            <span className={css.desctop}>Додати на головний екран</span>
          </p>
          <p> - Все готово).</p>
        </div>
      </BoxWithBorder>
    </div>

    <div className={css.wrapCreater}>
      <p>
        <span>© 2020</span>
        <a className={css.link} href="https://www.linkedin.com/in/kalyshmax/">
          МaVKa
        </a>
      </p>
      <p>
        <a
          className={css.link}
          href="mailto:kalysh.max@gmail.com?subject=Питання з YaK!"
        >
          kalysh.max@gmail.com
        </a>
      </p>
    </div>

    {/* messangers */}
    <div className={css.messangers}>
      <a
        className={css.messenger}
        href="https://wa.me/+380938800911"
        target="_blank"
        rel="noreferrer noopener"
      >
        <WhatSappUrl />
        <span className={`${css.bgBlock} ${css.green}`} />
      </a>
    </div>
  </div>
);

Info.defaultProps = {
  isChecked: false,
  setAnimationCheched: () => null,
};
Info.propTypes = {
  isChecked: PropTypes.bool,
  setAnimationCheched: PropTypes.func,
};

export default Info;
