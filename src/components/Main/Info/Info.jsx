import React from 'react';
import PropTypes from 'prop-types';

import Toogle from '../../commons/Toogle/Toogle';
import BoxWithBorder from '../../commons/BoxWithBorder/BoxWithBorder';

import { ReactComponent as ThreeDots } from '../../../assets/image/three-dots-vertical.svg';

import css from './Info.module.scss';

const Info = ({ isChecked, setAnimationCheched }) => (
  <div className={css.container}>
    <div className={css.wrapToogle}>
      {isChecked ? <p>Анімація включена</p> : <p>Анімація виключена</p>}
      <Toogle isChecked={isChecked} setAnimationCheched={setAnimationCheched} />
    </div>

    <div className={css.wrapDescription}>
      {/* 1 */}
      <BoxWithBorder title="Планер (іконка алатир):">
        <ul className={css.wrapList}>
          <li>Зверху вкладки знаходяться цитати.</li>
          <li>У правому нижньому куті кнопка “+” для створення завдань.</li>
          <li>Біля кнопки “+” годинник.</li>
          <li>
            У лівому нижньому куті - таймер зворотного відліку до нового року.
          </li>
          <li>Завдання можна створювати, редагувати, викреслювати.</li>
          <li>При створенні можна вибрати пріоритетність завдання і час.</li>
          <li>Завдання можна перетягувати по вертикалі для зручності.</li>
        </ul>
      </BoxWithBorder>
      {/* 2 */}
      <BoxWithBorder title="Прогноз погоди (іконка погоди і температура в даний час):">
        <ul className={css.wrapList}>
          <li>Показує погоду на 7 наступних днів.</li>
          <li>Також є пошук по населеному пункту.</li>
        </ul>
      </BoxWithBorder>
      {/* 3 */}
      <BoxWithBorder title="Слово автора">
        <p className={css.authorWords}>
          " Ти вільний на стільки, на скільки контролюєш свій час! Час не можна
          зберегти, його можна тільки акумулювати в блага. Він є скінченною
          величиною, тому його потрібно використовувати ефективно. Для
          ефективного контролю тобі потрібно планувати і виконувати завдання. У
          цьому тобі допоможе моя програма. "
        </p>
      </BoxWithBorder>
      {/* 4 */}
      <BoxWithBorder title="Для швидкого доступу з головного екрану телефона:">
        <div className={css.inWall}>
          <p>Для швидкого доступу з головного екрану телефона:</p>
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

    {/* <div className={css.wrapCreater}>
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
    </div> */}
  </div>
);

Info.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setAnimationCheched: PropTypes.func.isRequired,
};

export default Info;
