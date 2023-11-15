import React from 'react';

import BoxWithBorder from '../../commons/BoxWithBorder/BoxWithBorder2';
import { ReactComponent as ThreeDots } from '../../../assets/image/three-dots-vertical.svg';

import css from './QuickAccessGuide.module.scss';

const QuickAccessGuide = () => {
  return (
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
  );
};

export default QuickAccessGuide;
