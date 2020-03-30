import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './WeatherSearch.module.css';

class WeatherSearch extends Component {
  state = {
    // lastSearch: ['/'],
  };

  render() {
    const { handleChange } = this.props;
    return (
      <>
        <div className={css.wrapFind}>
          <input
            className={css.input}
            autoFocus
            placeholder="Назва населеного пункту . . ."
            onChange={handleChange}
          />
          <button className={css.btn} type="button">
            Знайти
          </button>
        </div>
        {/* {lastSearch.length > 0 && (
          <div className={css.wrapLastSearch}>Kiev, Lviv</div>
        )} */}
      </>
    );
  }
}

WeatherSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default WeatherSearch;
