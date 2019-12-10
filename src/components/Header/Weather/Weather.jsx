import React, { Component } from 'react';

class Weather extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { weather: [] };

  render() {
    return (
      <>
        <div>
          <img src="" alt="foto-wheather" />
          <p>temperature 16℃ </p>
        </div>
      </>
    );
  }
}

export default Weather;
