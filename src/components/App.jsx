import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderNav from './HeaderNav/HeaderNav';
import Main from './Main/Main';

import Animation from './Animation/Animation';
import Loader from './Loader/Loader';

import css from './App.module.css';

class App extends Component {
  state = { isChecked: false };

  componentDidMount() {
    const { isChecked } = this.props;
    this.setState({
      isChecked,
    });
  }

  componentDidUpdate(prevProps) {
    const { isChecked } = this.props;
    if (prevProps.isChecked !== isChecked) {
      this.setState({
        isChecked,
      });
    }
  }

  render() {
    const { isLoading } = this.props;
    const { isChecked } = this.state;

    return (
      <div className={css.app}>
        {isLoading && <Loader isLoading={isLoading} />}

        {isChecked && <Animation />}

        <header className={css.header}>
          <HeaderNav />
        </header>

        <main className={css.main}>
          <Main />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default App;
