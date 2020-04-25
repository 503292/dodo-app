import React, { Component } from 'react';

import css from './Clock.module.css';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.clock = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    const { time } = this.state;

    const timeArr = time.split(':');
    return (
      <div className={css.clock}>
        {`${timeArr[0]}`}
        {` : `}
        {`${timeArr[1]} `}
      </div>
    );
  }
}

export default Clock;
