import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Tasks from '../../../pages/Tasks/Tasks';
import Contacts from '../SideBar/Contacts/Contacts';
import WeatherPage from '../../../pages/Weather';
import RatePage from '../../../pages/Rate';
import ErrorPage from '../../../pages/Error';
import LoginPage from '../../../pages/Login';

const RouteSite = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Tasks} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/weather" component={WeatherPage} />
      <Route path="/rate" component={RatePage} />

      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default RouteSite;
