import React from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
// import Footer from './Footer/Footer';

import css from './App.module.css';

const App = () => {
  return (
    <>
      <header className={css.header}>
        <Header />
      </header>

      <main className={css.main}>
        <Main />
      </main>
      {/* <footer className={css.footer}>
        <Footer />
      </footer> */}
    </>
  );
};
export default App;
