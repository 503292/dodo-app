import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import MenuPage from '../../../pages/MenuPage';
import TasksPage from '../../../pages/TasksPage';
import WeatherPage from '../../../pages/WeatherPage';
import CurrencyPage from '../../../pages/CurrencyPage';
import ErrorPage from '../../../pages/ErrorPage';
import InfoSitePage from '../../../pages/InfoSitePage';
import CountryPage from '../../../pages/CountryPage';
import SettingPage from '../../../pages/SettingPage';
// import ProfilePage from '../../../pages/ProfilePage';

const RoutesSite = () => (
  <>
    <Switch>
      {/* <Route path="/" exact component={MenuPage} /> */}
      <Route path="/todo" exact component={TasksPage} />
      <Route path="/info" exact component={InfoSitePage} />
      <Route path="/weather" component={WeatherPage} />
      <Route path="/currency" component={CurrencyPage} />
      <Route path="/country" component={CountryPage} />
      <Route path="/settings" component={SettingPage} />
      {/* TODO in progress */}
      {/* <Route path="/profile" component={ProfilePage} /> */}

      <Route component={ErrorPage} />
    </Switch>
  </>
);

export default RoutesSite;
