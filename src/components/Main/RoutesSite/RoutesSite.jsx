import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../commons/Loader/Loader';

const TasksPage = lazy(() => import('../../../pages/TasksPage'));
const WeatherPage = lazy(() => import('../../../pages/WeatherPage'));
const CurrencyPage = lazy(() => import('../../../pages/CurrencyPage'));
const CountryPage = lazy(() => import('../../../pages/CountryPage'));

const InfoSitePage = lazy(() => import('../../../pages/InfoSitePage'));
const SettingPage = lazy(() => import('../../../pages/SettingPage'));
// const ProfilePage = lazy(() => import('../../../pages/ProfilePage'));
const MenuPage = lazy(() => import('../../../pages/MenuPage'));
const MathGamePage = lazy(() => import('../../../pages/MathGamePage'));
const MathInfoPage = lazy(() => import('../../../pages/MathInfoPage'));
const LangGamePage = lazy(() => import('../../../pages/LangGamePage'));
// const AIPage = lazy(() => import('../../../pages/AIPage'));

const RandomProductList = lazy(() =>
  import('../../../pages/RandomProductList'),
);

const ErrorPage = lazy(() => import('../../../pages/ErrorPage'));

const RoutesSite = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={TasksPage} />
        <Route path="/weather" component={WeatherPage} />
        <Route path="/currency" component={CurrencyPage} />
        <Route path="/country" component={CountryPage} />
        {/* Dropdown Nav routes */}
        <Route path="/info" exact component={InfoSitePage} />
        <Route path="/settings" component={SettingPage} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/math_game" component={MathGamePage} />
        <Route path="/mif_info" component={MathInfoPage} />
        <Route path="/lang_game" component={LangGamePage} />
        {/* <Route path="/ai" component={AIPage} /> */}

        <Route path="/random" component={RandomProductList} />

        <Route component={ErrorPage} />
        {/* TODO in progress */}
        {/* <Route path="/profile" component={ProfilePage} /> */}
      </Switch>
    </Suspense>
  );
};

export default RoutesSite;
