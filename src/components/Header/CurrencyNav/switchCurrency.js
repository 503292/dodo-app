import React from 'react';

import { ReactComponent as Dollar } from '../../../assets/image/currency/dollar.svg';
import { ReactComponent as Euro } from '../../../assets/image/currency/euro.svg';
// import { ReactComponent as Ruble } from '../../../assets/image/currency/ruble.svg';
// import { ReactComponent as Bitcoin } from '../../../assets/image/currency/bitcoin.svg';

export default function switchCurrency(currency) {
  switch (currency) {
    case 'USD':
      return <Dollar />;
    case 'EUR':
      return <Euro />;
    // case 'RUB':
    //   return <Ruble />;
    // case 'BTC':
    //   return <Bitcoin />;

    default:
      return '';
  }
}
