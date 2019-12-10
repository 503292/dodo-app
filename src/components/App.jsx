import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import css from './App.module.css';

const App = () => {
  return (
    <>
      <Header className={css.header} />
      <hr />
      <Main className={css.main} />
      <hr />
      <Footer className={css.footer} />
    </>
  );
};
export default App;
