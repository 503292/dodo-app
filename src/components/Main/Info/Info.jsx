import React from 'react';
import PropTypes from 'prop-types';

import Toogle from '../Toogle/Toogle';
// import { ReactComponent as Flower } from '../../../assets/image/flowers/flower.svg';

import css from './Info.module.css';

const Info = ({ isChecked, setAnimationCheched }) => (
  <div className={css.container}>
    <div className={css.wrapToogle}>
      <Toogle
        // className={css.toogle}
        isChecked={isChecked}
        setAnimationCheched={setAnimationCheched}
      />
    </div>
  </div>
);

Info.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setAnimationCheched: PropTypes.func.isRequired,
};

export default Info;

/* <div className={css.wrapFlower}>
      <button type="button" className={css.btnFlower}>
        <Flower className={css.flower} />
      </button>
      <p>Квіти включені</p>
    </div> */
