import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './WeatherSearch.module.css';

class WeatherSearch extends Component {
  state = {
    // lastSearch: ['/'],
  };

  render() {
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <>
        <form className={css.wrapFind} onSubmit={handleSubmit}>
          <input
            className={css.input}
            autoFocus
            placeholder="Назва населеного пункту . . ."
            onChange={handleChange}
            name="search"
            value={search}
          />
          <button className={css.btn} type="submit">
            Знайти
          </button>
        </form>
        {/* {lastSearch.length > 0 && (
          <div className={css.wrapLastSearch}>Kiev, Lviv</div>
        )} */}
      </>
    );
  }
}

WeatherSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default WeatherSearch;