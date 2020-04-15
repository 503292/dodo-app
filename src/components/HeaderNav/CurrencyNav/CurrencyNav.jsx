import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parseCurrency from './ParseCurrency';

// import Loader from '../../Loader/Loader';

import { fetchCurrencyPrivatBank } from '../../../services/api';

import css from './CurrencyNav.module.css';

const mark = {
  USD: '$',
  EUR: '€',
  RUB: '₽',
  BTC: '฿',
};

const getMark = () => {
  const localMark = JSON.parse(localStorage.getItem('currencyMark'));
  if (localMark) {
    return localMark;
  }
  return 'USD';
};

class CurrencyNav extends Component {
  state = {
    currency: [],
    currencyMark: '',
  };

  async componentDidMount() {
    const { loaderOff, loaderOn } = this.props;
    loaderOn();
    await fetchCurrencyPrivatBank()
      .then(data => {
        const currencyParse = parseCurrency(data);
        // console.log(currencyParse, 'currencyParse');
        localStorage.setItem('currency', JSON.stringify(currencyParse));
        localStorage.setItem('currencyMark', JSON.stringify(getMark()));
        this.setState({
          currency: currencyParse,
          currencyMark: getMark(),
        });
        loaderOff();
      })
      .catch(error => {
        this.setState({
          currency: error,
        });
        loaderOff();
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { markFromStore } = this.props;
    if (markFromStore !== prevState.currencyMark && markFromStore) {
      this.setState({ currencyMark: markFromStore });
    }
  }

  render() {
    const { currency, currencyMark } = this.state;
    // const { isLoading } = this.props;
    const gryvnyaToCurrency = currency.find(el => el.ccy === currencyMark);

    return (
      <>
        {gryvnyaToCurrency && (
          <div className={css.wrapCurrency}>
            <p className={css.currencyMark}>{mark[gryvnyaToCurrency.ccy]}</p>

            <div>
              <p title="Продати" className={css.gryvnyaBuy}>
                <span>▶</span>
                {gryvnyaToCurrency.buy}
              </p>
              <p title="Купити" className={css.gryvnyaSale}>
                <span>◀</span>
                {gryvnyaToCurrency.sale}
              </p>
            </div>
          </div>
        )}
        {/* {isLoading && <Loader isLoading={isLoading} />} */}
      </>
    );
  }
}

CurrencyNav.propTypes = {
  markFromStore: PropTypes.string.isRequired,
  loaderOn: PropTypes.func.isRequired,
  loaderOff: PropTypes.func.isRequired,
};

export default CurrencyNav;
