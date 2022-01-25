import React from 'react';

import { useSelector } from 'react-redux';

import HeaderNav from './Header/Header';
import Main from './Main/Main';

import Animation from './commons/Animation/Animation';
import Loader from './commons/Loader/Loader';

import css from './App.module.css';

const App2 = () => {
  const isChecked = useSelector(state => state.global.isAnimationCheck);
  const isLoading = useSelector(state => state.global.isLoading);

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
};

export default App2;
