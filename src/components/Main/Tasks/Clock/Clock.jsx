import React, { Component } from 'react';

import css from './Clock.module.css';

class Clock extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    // console.log(this.state.time, 'time');
    this.clock = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    const { time } = this.state;

    // const timeStr = time.toLocaleTimeString();
    const timeStr = time.toLocaleTimeString();
    const timeSplit = timeStr.split(':');
    return (
      <div className={css.clock}>
        {timeSplit[0]}
        {` : `}
        {timeSplit[1]}

        {/* {` : `}
        {timeSplit[2]} */}
      </div>
    );
  }
}

export default Clock;
