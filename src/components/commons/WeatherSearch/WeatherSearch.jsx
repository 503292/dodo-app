import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Search } from '../../../assets/image/search.svg';

import css from './WeatherSearch.module.scss';

class WeatherSearch extends Component {
  state = {};

  render() {
    const {
      handleChange,
      handleSubmit,
      search,
      lastSearch,
      clickLastSearch,
    } = this.props;
    return (
      <>
        <form className={css.wrapFind} onSubmit={handleSubmit}>
          <input
            className={css.input}
            placeholder="Назва населеного пункту . . ."
            onChange={handleChange}
            name="search"
            value={search}
            type="text"
          />
          <button className={css.btn} type="submit">
            <Search className={css.search} />
          </button>
        </form>

        {lastSearch.length > 0 && (
          <div className={css.wrapLastSearch}>
            {lastSearch.map(el => (
              <button
                key={el}
                className={css.btnCity}
                type="button"
                value={el}
                onClick={clickLastSearch}
              >
                {el}
              </button>
            ))}
          </div>
        )}
      </>
    );
  }
}

WeatherSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  lastSearch: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  clickLastSearch: PropTypes.func.isRequired,
};

export default WeatherSearch;
