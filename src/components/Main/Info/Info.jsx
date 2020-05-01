import React from 'react';
import PropTypes from 'prop-types';

import Toogle from '../Toogle/Toogle';

import css from './Info.module.css';

const Info = ({ isChecked, setAnimationCheched }) => (
  <div className={css.container}>
    <div className={css.wrapToogle}>
      {isChecked ? <p>Анімація включена</p> : <p>Анімація виключена</p>}
      <Toogle isChecked={isChecked} setAnimationCheched={setAnimationCheched} />
    </div>

    <div className={css.wrapDescription}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}> опис </legend>
        <div className={css.wrapOneDescr}>
          <h5>Планер (іконка карти України):</h5>
          <ul>
            <li>Зверху вкладки знаходиться мотиватор з цитатами.</li>
            <li>У правому нижньому куті кнопка “+” для створення завдань.</li>
            <li>Біля кнопки “+” годинник.</li>
            <li>
              У лівому нижньому куті - таймер зворотного відліку до нового року.
            </li>
            <li>Завдання можна створювати, редагувати, викреслювати.</li>
            <li>При створенні можна вибрати пріоритетність завдання і час.</li>
            <li>Завдання можна перетягувати по вертикалі для зручності.</li>
          </ul>
        </div>
        <div className={css.wrapOneDescr}>
          <h5>Прогноз погоди (іконка погоди і температура в даний час):</h5>
          <ul>
            <li>Показує погоду на 7 наступних днів.</li>
            <li>Також є пошук по населеному пункту.</li>
          </ul>
        </div>
        <div className={css.wrapOneDescr}>
          <h5>Курс валют (іконка іноземної валюти і суми купівлі-продажу):</h5>
          <ul>
            <li>Курс купівлі продажу основних валют.</li>
            <li>Курс НБУ основних дорогоцінних металів.</li>
            <li>Курс НБУ основних валют світу.</li>
          </ul>
        </div>
        <div className={css.wrapOneDescr}>
          <h5> Інфо (іконка лотоса):</h5>
          <ul>
            <li>Можна виключити анімацію).</li>
            <li>&ldquo;Тебе чекають великі справи&rdquo;</li>
          </ul>
        </div>
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}> слово автора </legend>
        <p className={css.authorWords}>
          Ти вільний на стільки, на скільки контролюєш свій час! Час не можна
          зберегти, його можна тільки акумулювати в блага. Він є скінченною
          величиною, тому його потрібно використовувати ефективно. Для
          ефективного контролю тобі потрібно планувати і виконувати завдання. У
          цьому тобі допоможе моя програма.
        </p>
      </fieldset>
    </div>

    <div className={css.wrapCreater}>
      <p>
        <span>© 2020</span>
        <a href="https://www.linkedin.com/in/kalyshmax/">Максим Калиш</a>
      </p>
    </div>
  </div>
);

Info.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setAnimationCheched: PropTypes.func.isRequired,
};

export default Info;
