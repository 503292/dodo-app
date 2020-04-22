import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TasksPage from '../../../pages/TasksPage';
import Contacts from '../SideBar/Contacts/Contacts';
import WeatherPage from '../../../pages/WeatherPage';
import CurrencyPage from '../../../pages/CurrencyPage';
import ErrorPage from '../../../pages/ErrorPage';
import InfoSitePage from '../../../pages/InfoSitePage';

const RoutesSite = () => (
  <>
    <Switch>
      <Route path="/" exact component={TasksPage} />
      <Route path="/info" exact component={InfoSitePage} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/weather" component={WeatherPage} />
      <Route path="/currency" component={CurrencyPage} />

      <Route component={ErrorPage} />
    </Switch>
  </>
);

export default RoutesSite;
