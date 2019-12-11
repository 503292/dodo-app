import React from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';

import css from './Main.module.css';

const Main = () => (
  <>
    <div className={css.wrapMain}>
      <SideBar />
      <Content />
    </div>
  </>
);

export default Main;
