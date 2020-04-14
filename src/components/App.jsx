import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import HeaderNav from './HeaderNav/HeaderNav';
import Main from './Main/Main';
// import Footer from './Footer/Footer';

// import Loader from './Loader/Loader';

import css from './App.module.css';

class App extends Component {
  state = {};

  render() {
    // const { isLoading } = this.props;
    // console.log(isLoading, 'isLoading');

    return (
      <>
        {/* {isLoading && (
          // <Loader isLoading={isLoading} />
          <>ff</> */}
        {/* )} */}
        {/* {!isLoading && ( */}
        <>
          <header className={css.header}>
            <HeaderNav />
          </header>

          <main className={css.main}>
            <Main />
          </main>
          {/* <footer className={css.footer}>
        <Footer />
      </footer> */}
        </>
        {/* )} */}
      </>
    );
  }
}

// App.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
// };

export default App;
