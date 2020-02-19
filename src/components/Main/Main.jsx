import React from 'react';
// import SideBar from './SideBar/SideBar';
import NavigationSite from './NavigationSite/NavigationSite';

import css from './Main.module.css';

const Main = () => (
  <>
    <div className={css.wrapMain}>
      {/* <SideBar /> */}
      <NavigationSite />
    </div>
  </>
);

export default Main;
