import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const MenuPage = lazy(() => import('../../../pages/MenuPage'));
const TasksPage = lazy(() => import('../../../pages/TasksPage'));
const WeatherPage = lazy(() => import('../../../pages/WeatherPage'));
const CurrencyPage = lazy(() => import('../../../pages/CurrencyPage'));
const ErrorPage = lazy(() => import('../../../pages/ErrorPage'));
const InfoSitePage = lazy(() => import('../../../pages/InfoSitePage'));
const CountryPage = lazy(() => import('../../../pages/CountryPage'));
const SettingPage = lazy(() => import('../../../pages/SettingPage'));
const MathGamePage = lazy(() => import('../../../pages/MathGamePage'));
const LangGamePage = lazy(() => import('../../../pages/LangGamePage'));
const RandomProductList = lazy(() =>
  import('../../../pages/RandomProductList'),
);

// const ProfilePage = lazy(() => import('../../../pages/ProfilePage'));

const RoutesSite = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" exact component={TasksPage} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/info" exact component={InfoSitePage} />
        <Route path="/weather" component={WeatherPage} />
        <Route path="/currency" component={CurrencyPage} />
        <Route path="/country" component={CountryPage} />
        <Route path="/settings" component={SettingPage} />
        <Route path="/math_game" component={MathGamePage} />
        <Route path="/lang_game" component={LangGamePage} />
        {/* TODO in progress */}
        {/* <Route path="/profile" component={ProfilePage} /> */}
        <Route path="/random" component={RandomProductList} />

        <Route component={ErrorPage} />
      </Switch>
    </Suspense>
  );
};

export default RoutesSite;
