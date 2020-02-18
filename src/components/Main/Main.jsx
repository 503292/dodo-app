import React from 'react';
// import SideBar from './SideBar/SideBar';
import RouteSite from './NavigationSite/NavigationSite';

import css from './Main.module.css';

const Main = () => (
  <>
    <div className={css.wrapMain}>
      {/* <SideBar /> */}
      <RouteSite />
    </div>
  </>
);

export default Main;
