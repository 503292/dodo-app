import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WeatherHours from './WeatherHours/WeatherHours';
import WeatherDays from './WeatherDays/WeatherDays';

import switchIcon from '../../../HeaderNav/WeatherNav/switchIcon';

import css from './WeatherDescription.module.css';

class WeatherDescription extends Component {
  state = {
    indexDay: 0,
  };

  handleIndexDay = index => {
    this.setState({
      indexDay: index,
    });
  };

  render() {
    const { weather } = this.props;
    const { indexDay } = this.state;

    return (
      <div className={css.wrapDescription}>
        <WeatherDays
          weather={weather}
          handleIndexDay={this.handleIndexDay}
          switchIcon={switchIcon}
          indexDay={indexDay}
        />

        <WeatherHours
          weather={weather}
          indexDay={indexDay}
          switchIcon={switchIcon}
        />
      </div>
    );
  }
}

WeatherDescription.propTypes = {
  weather: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
};

export default WeatherDescription;
