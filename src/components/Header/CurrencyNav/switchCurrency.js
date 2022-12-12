import React from 'react';

import { ReactComponent as Dollar } from '../../../assets/image/currency/dollar.svg';
import { ReactComponent as Euro } from '../../../assets/image/currency/euro.svg';

export default function switchCurrency(currency) {
  switch (currency) {
    case 'USD':
      return <Dollar />;
    case 'EUR':
      return <Euro />;

    default:
      return '';
  }
}
