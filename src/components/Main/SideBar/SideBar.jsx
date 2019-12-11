import React from 'react';
import TasksToggle from './TasksToggle/TasksToggle';
import Contacts from './Contacts/Contacts';

const SideBar = () => (
  <div>
    <TasksToggle />
    <hr />
    <Contacts />
  </div>
);

export default SideBar;
