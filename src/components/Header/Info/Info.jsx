import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as LogoMap } from '../../../assets/image/logo/mapUa.svg';

import css from './Info.module.scss';

const Info = () => {
  const history = useHistory();
  const { pathname } = history.location;
  const routeName = pathname.substring(1);

  return (
    <button
      type="button"
      onClick={() => history.push('/country')}
      className={
        routeName === 'country'
          ? `${css.mapBtn} ${css.active}`
          : `${css.mapBtn}`
      }
    >
      <LogoMap />
    </button>
  );
};

export default Info;
