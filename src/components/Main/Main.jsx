import React from 'react';
import Contacts from './Contacts/Contacts';
import Tasks from './Tasks/Tasks';

import css from './Main.module.css';

const Main = () => (
  <>
    <div className={css.wrapMain}>
      <Contacts />
      <Tasks />
    </div>
  </>
);

export default Main;
