import React from 'react';

import RoutesSite from './RoutesSite/RoutesSite';

import css from './Main.module.css';

const Main = () => (
  <>
    <div className={css.wrapMain}>
      <RoutesSite />
    </div>
  </>
);

export default Main;
