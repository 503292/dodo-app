import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchCurrencyPrivatBank } from '../../../services/api';
import css from './CurrencyNav.module.css';

const mark = {
  USD: '$',
  EUR: '€',
  RUR: '₽',
};

class CurrencyNav extends Component {
  state = {
    currency: [],
    currencyMark: 'USD',
  };

  componentDidMount() {
    fetchCurrencyPrivatBank()
      .then(data => {
        // console.log(data);
        const dataUSD = data.find(elem => elem.ccy === 'USD');
        dataUSD.buy = Number(dataUSD.buy).toFixed(2);
        dataUSD.sale = Number(dataUSD.sale).toFixed(2);

        const dataEUR = data.find(elem => elem.ccy === 'EUR');
        dataEUR.buy = Number(dataEUR.buy).toFixed(2);
        dataEUR.sale = Number(dataEUR.sale).toFixed(2);

        const dataRUR = data.find(elem => elem.ccy === 'RUR');
        dataRUR.buy = Number(dataRUR.buy).toFixed(3);
        dataRUR.sale = Number(dataRUR.sale).toFixed(3);

        const currency = [dataUSD, dataEUR, dataRUR];

        localStorage.setItem('currency', JSON.stringify(currency));

        this.setState({
          currency,
        });
      })
      .catch(error => {
        this.setState({
          currency: error,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { markFromStore } = this.props;

    if (markFromStore !== prevState.currencyMark) {
      this.setState({ currencyMark: markFromStore });
    }
  }

  render() {
    const { currency, currencyMark } = this.state;

    const gryvnyaToCurrency = currency.find(el => el.ccy === currencyMark);

    return (
      <>
        {gryvnyaToCurrency && (
          <div className={css.wrapCurrency}>
            <p className={css.currencyMark}>{mark[gryvnyaToCurrency.ccy]}</p>

            <div>
              <p title="Купівля" className={css.gryvnyaBuy}>
                <span>▶</span>
                {gryvnyaToCurrency.buy}
              </p>

              <p title="Продаж" className={css.gryvnyaSale}>
                <span>◀</span>
                {gryvnyaToCurrency.sale}
              </p>
            </div>
          </div>
        )}
      </>
    );
  }
}

CurrencyNav.propTypes = {
  markFromStore: PropTypes.string.isRequired,
};

export default CurrencyNav;
