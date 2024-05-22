import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MenuPage from '../../../pages/MenuPage';
import TasksPage from '../../../pages/TasksPage';
import WeatherPage from '../../../pages/WeatherPage';
import CurrencyPage from '../../../pages/CurrencyPage';
import ErrorPage from '../../../pages/ErrorPage';
import InfoSitePage from '../../../pages/InfoSitePage';
import CountryPage from '../../../pages/CountryPage';
import SettingPage from '../../../pages/SettingPage';
import GamePage from '../../../pages/GamePage';
import LanguageGame from '../../../pages/LanguageGame';
// import ProfilePage from '../../../pages/ProfilePage';
import RandomProductList from '../../../pages/RandomProductList';

const RoutesSite = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={TasksPage} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/info" exact component={InfoSitePage} />
        <Route path="/weather" component={WeatherPage} />
        <Route path="/currency" component={CurrencyPage} />
        <Route path="/country" component={CountryPage} />
        <Route path="/settings" component={SettingPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/language_game" component={LanguageGame} />
        {/* TODO in progress */}
        {/* <Route path="/profile" component={ProfilePage} /> */}
        <Route path="/random" component={RandomProductList} />

        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default RoutesSite;
