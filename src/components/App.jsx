import React from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import css from './App.module.css';

const App = () => {
  return (
    <>
      <header className={css.header}>
        <Header />
      </header>
      <hr />
      <main className={css.main}>
        <Main />
      </main>
      <hr />
      <footer className={css.footer}>
        <Footer />
      </footer>
    </>
  );
};
export default App;
