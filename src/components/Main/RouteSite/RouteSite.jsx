import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Tasks from './Tasks/Tasks';
import Contacts from '../SideBar/Contacts/Contacts';
import WeatherPage from '../../../pages/WeatherPage';
import RatePage from '../../../pages/RatePage';
import ErrorPage from '../../../pages/ErrorPage';

const RouteSite = () => (
  <div>
    {/* <Tasks /> */}

    <Switch>
      <Route path="/" exact component={Tasks} />

      <Route path="/contacts" component={Contacts} />
      <Route path="/weather" component={WeatherPage} />
      <Route path="/rate" component={RatePage} />

      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default RouteSite;
