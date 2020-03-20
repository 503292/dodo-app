import React, { Component } from 'react';

import css from './Clock.module.css';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    // isDots: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
    // setInterval(() => {
    //   this.setState(state => ({ isDots: !state.isDots }));
    // }, 1000);
  }

  render() {
    const { time } = this.state; // isDots

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
