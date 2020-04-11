import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { fetchCurrencyPrivatBank } from '../../../services/api';

// import parseCurrency from './ParseCurrency';

import css from './Currency.module.css';

// const getMark = () => {
//   const localMark = JSON.parse(localStorage.getItem('currencyMark'));
//   if (localMark) {
//     return localMark;
//   }
//   return 'USD';
// };

class Currency extends Component {
  state = {
    currency: [],
    currencyMark: '',
  };

  async componentDidMount() {
    const localCurrency = JSON.parse(localStorage.getItem('currency'));
    const localCurrencyMark = JSON.parse(localStorage.getItem('currencyMark'));

    this.setState({ currency: localCurrency, currencyMark: localCurrencyMark });
  }

  checkMarkCurrency = e => {
    const { updateCurrency } = this.props;
    // const { currencyMark } = this.state;

    const currencyMark = e.currentTarget.nextSibling.firstChild.textContent;

    console.log('currencyMark', currencyMark);
    localStorage.setItem('currencyMark', JSON.stringify(currencyMark));
    this.setState({ currencyMark });
    updateCurrency(currencyMark);
  };

  render() {
    const { currency, currencyMark } = this.state;

    return (
      <>
        <div className={css.currencyContainer}>
          <div className={css.wrapPB}>
            {currency.length > 0 && (
              <div className={css.cash}>
                <div className={css.headCurrency}>
                  <h3>Валюта</h3>
                  <h3>Купівля</h3>
                  <h3>Продаж</h3>
                </div>
                <div className={css.bodyCurrency}>
                  {currency.map(el => (
                    <label className={css.lable} htmlFor={el.ccy} key={el.ccy}>
                      <input
                        className={`${css.checkInput} ${el.ccy}`}
                        name="checkMarkCurrency"
                        type="radio"
                        id={`${el.ccy}`}
                        onChange={this.checkMarkCurrency}
                        checked={el.ccy === currencyMark ? 'checked' : false}
                      />

                      <div className={css.checkRow}>
                        <p>{el.ccy}</p>
                        <p>{el.buy}</p>
                        <p>{el.sale}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={css.card}>fff</div>
        </div>
      </>
    );
  }
}

Currency.propTypes = {
  updateCurrency: PropTypes.func.isRequired,
};

export default Currency;
