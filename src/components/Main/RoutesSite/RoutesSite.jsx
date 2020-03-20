import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TasksPage from '../../../pages/TasksPage';
import Contacts from '../SideBar/Contacts/Contacts';
import WeatherPage from '../../../pages/WeatherPage';
import CurrencyPage from '../../../pages/CurrencyPage';
import ErrorPage from '../../../pages/ErrorPage';
import LoginPage from '../../../pages/LoginPage';

const RoutesSite = () => (
  <div>
    <Switch>
      <Route path="/" exact component={TasksPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/weather" component={WeatherPage} />
      <Route path="/currency" component={CurrencyPage} />

      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default RoutesSite;
