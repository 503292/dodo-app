import React from 'react';
// import SideBar from './SideBar/SideBar';
import RoutesSite from './RoutesSite/RoutesSite';

import css from './Main.module.css';

const Main = () => (
  <>
    <div className={css.wrapMain}>
      {/* <SideBar /> */}
      <RoutesSite />
    </div>
  </>
);

export default Main;
