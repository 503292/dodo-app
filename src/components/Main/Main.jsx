import React from 'react';
import Tasks from './Tasks/Tasks';

import css from './Main.module.css';

const Main = () => (
  <>
    {/* <Contacts className={css.contacts}/> */}
    <Tasks className={css.tasks} />
  </>
);

export default Main;
