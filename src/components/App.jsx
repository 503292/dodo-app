import React from 'react';
import HeaderNav from './Header/Header';
import Main from './Main/Main';
import Loader from './commons/Loader/Loader';
import { ContainerToast } from './commons/Toast/Toast';

import { useSelector } from 'react-redux';

// TODO fix
// import Animation from './commons/Animation/Animation';

import css from './App.module.css';

const App = () => {
  // TODO
  // const isChecked = useSelector(state => state.global.isAnimationCheck);
  const isLoading = useSelector(state => state.global.isLoading);

  // TODO in progress
  // async function wiki() {
  //   const url =
  //     'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=50&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=Львів';
  //   const res = await fetch(url);
  //   const data = await res.json();

  //   console.log(data.query.pages, 'data');
  // }

  // wiki();

  return (
    <div className={css.app}>
      {isLoading && <Loader isLoading={isLoading} />}

      {/* {isChecked && <Animation />} */}

      <header className={css.header}>
        <HeaderNav />
      </header>

      <main className={`${css.main} scrollbarThumb`}>
        <Main />
      </main>
      <ContainerToast />
    </div>
  );
};

export default App;
