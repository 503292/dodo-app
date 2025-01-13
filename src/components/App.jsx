import React from 'react';
import { ToastContainer } from 'react-toastify';

import HeaderNav from './Header/Header';
import Main from './Main/Main';

// TODO fix is broken
// import Animation from './commons/Animation/Animation';

import css from './App.module.css';

const App = () => {
  // TODO show/hide animation
  // const isChecked = useSelector(state => state.global.isAnimationCheck);

  return (
    <div className={css.app}>
      {/* {isChecked && <Animation />} */}

      <header className={css.header}>
        <HeaderNav />
      </header>

      <main className={`${css.main} scrollbarThumb`}>
        <Main />
      </main>
      <ToastContainer />
    </div>
  );
};

export default App;
