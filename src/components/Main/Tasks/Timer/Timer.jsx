import React, { Component } from 'react';

import css from './Timer.module.css';
import { ReactComponent as Tree } from '../../../../assets/image/tree.svg';

class Timer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    timerStart: null,
    newYear: '',
  };

  componentDidMount() {
    const newYear = new Date().getFullYear() + 1;

    this.setState({
      timerStart: this.reversClock(),
      newYear,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { timerStart } = this.state;
    if (prevState.timerStart !== timerStart) {
      this.reversClock();
    }
  }

  componentWillUnmount() {
    const { timerStart } = this.state;
    clearInterval(timerStart);
    clearInterval(this.timer);
  }

  reversClock = () => {
    function pad(value, decr) {
      return String(value).padStart(decr, '0');
    }

    this.timer = setInterval(() => {
      const newYear = new Date().getFullYear() + 1;

      const unixTimeNow = new Date().getTime();

      const unixNewYear = Date.parse(new Date(`${newYear}`));

      const endTimeToNewYear = unixNewYear - unixTimeNow;

      let days = Math.floor(endTimeToNewYear / (1000 * 60 * 60 * 24));

      const changeHours = new Date().getTimezoneOffset() / 60;

      let hours = Math.floor(
        (endTimeToNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) +
          changeHours,
      );

      if (hours < 0) {
        hours += 24;
        days -= 1;
      }

      const minutes = Math.floor(
        (endTimeToNewYear % (1000 * 60 * 60)) / (1000 * 60),
      );

      const seconds = Math.floor((endTimeToNewYear % (1000 * 60)) / 1000);

      this.setState({
        days: pad(days, 3),
        hours: pad(hours, 2),
        minutes: pad(minutes, 2),
        seconds: pad(seconds, 2),
      });
    }, 1000);

    return this.timer;
  };

  render() {
    const { newYear, days, hours, minutes, seconds } = this.state;

    return (
      <div className={css.container}>
        <div className={css.wrapTimer}>
          <div className={css.wrapValue}>
            <span className={css.value}>{days}</span>
            <span className={css.descr}>Дня</span>
          </div>
          <div className={css.wrapValue}>
            <span className={css.value}>{hours}</span>
            <span className={css.descr}>Годин</span>
          </div>
          <div className={css.wrapValue}>
            <span className={css.value}>{minutes}</span>
            <span className={css.descr}>Хвилин</span>
          </div>
          <div className={css.wrapValue}>
            <span className={css.value}>{seconds}</span>
            <span className={css.descr}>Секунд</span>
          </div>
        </div>

        <div className={css.newYear}>
          <Tree className={css.tree} />
          <p className={css.data}>{newYear}</p>
        </div>
      </div>
    );
  }
}

export default Timer;
