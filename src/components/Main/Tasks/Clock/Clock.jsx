import React, { Component } from 'react';

import css from './Clock.module.css';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    // isDots: true,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { time } = this.state; // isDots
    // console.log(time, 'time');

    const timeArr = time.split(':');
    return (
      <div className={css.clock}>
        <div className={css.time}>
          <div>
            {`${timeArr[0]}`}
            {/* {isDots ? <span>:</span> : <span> </span>} */}
            {` : `}
            {`${timeArr[1]} `}
          </div>
          {/* <span className={css.sec}>{timeArr[2]}</span> */}
        </div>
      </div>
    );
  }
}

export default Clock;