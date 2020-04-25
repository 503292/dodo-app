import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { parseCurrency, parseCountries, parseMetals } from './ParseCurrency';

import 'react-toastify/dist/ReactToastify.css';

import switchCurrency from './switchCurrency';

import {
  fetchCurrencyPrivatBank,
  fetchCurrencyNBU,
} from '../../../services/api';

import css from './CurrencyNav.module.css';

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

    fetchCurrencyNBU()
      .then(data => {
        const contries = parseCountries(data);
        const metals = parseMetals(data);

        localStorage.setItem('contries', JSON.stringify(contries));
        localStorage.setItem('metals', JSON.stringify(metals));
      })
      .catch(error => {
        toast('Наразі немає доступу до сервера (.');
        // eslint-disable-next-line no-console
        console.log(error);
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
            <div className={css.currencyMark}>
              {switchCurrency(gryvnyaToCurrency.ccy)}
            </div>

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
