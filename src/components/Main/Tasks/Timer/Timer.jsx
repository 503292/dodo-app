import React, { Component } from 'react';

import css from './Timer.module.css';
import { ReactComponent as Tree } from '../../../../assets/image/tree.svg';

class Timer extends Component {
  state = {};

  render() {
    return (
      <div className={css.container}>
        <div className={css.wrapTimer}>
          <div className={css.wrapValue}>
            <span className={css.value}>000</span>
            <span className={css.descr}>Днів</span>
          </div>
          <div className={css.wrapValue}>
            <span className={css.value}>00</span>
            <span className={css.descr}>Годин</span>
          </div>
          <div className={css.wrapValue}>
            <span className={css.value}>00</span>
            <span className={css.descr}>Хвилин</span>
          </div>
          <div className={css.wrapValue}>
            <span className={css.value}>00</span>
            <span className={css.descr}>Секунд</span>
          </div>
        </div>

        <div className={css.newYear}>
          <Tree className={css.tree} />
          <p className={css.data}>2021</p>
        </div>
      </div>
    );
  }
}

export default Timer;
