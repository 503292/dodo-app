import React, { Component } from 'react';
import PropTypes from 'prop-types';

import parseCurrency from './ParseCurrency';

import css from './Currency.module.css';

import { fetchCurrencyNBU } from '../../../services/api';

class Currency extends Component {
  state = {
    currency: [],
    currencyMark: '',
  };

  async componentDidMount() {
    const localCurrency = JSON.parse(localStorage.getItem('currency'));
    const localCurrencyMark = JSON.parse(localStorage.getItem('currencyMark'));

    fetchCurrencyNBU()
      .then(data => {
        parseCurrency(data);
      })
      .catch(error => console.log(error));

    await this.setState({
      currency: localCurrency,
      currencyMark: localCurrencyMark,
    });
  }

  checkMarkCurrency = e => {
    const { updateCurrency } = this.props;

    const currencyMark = e.currentTarget.nextSibling.firstChild.textContent;

    localStorage.setItem('currencyMark', JSON.stringify(currencyMark));
    this.setState({ currencyMark });
    updateCurrency(currencyMark);
  };

  render() {
    const { currency, currencyMark } = this.state;
    // console.log(currency, 'currency');

    return (
      <>
        {currency && (
          <div className={css.currencyContainer}>
            <div className={css.wrapPB}>
              {/* {currency.length && ( */}
              <div className={css.cash}>
                <div className={css.headCurrency}>
                  <h3>Валюта</h3>
                  <h3>Продати</h3>
                  <h3>Купити</h3>
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
                        <p>
                          {el.buy}
                          {el.ccy === 'BTC' ? (
                            <span> дол</span>
                          ) : (
                            <span> грн</span>
                          )}
                        </p>
                        <p>
                          {el.sale}
                          {el.ccy === 'BTC' ? (
                            <span> дол</span>
                          ) : (
                            <span> грн</span>
                          )}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* )} */}
            </div>
            <div className={css.card}>
              <div className={css.oneCurrency}>
                <div className={css.wrapFlag}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/30px-Flag_of_Uzbekistan.svg.png"
                    alt="country"
                  />
                  <p className={css.price}>10.45 грн</p>
                </div>

                <p className={css.description}>Узбецький сум</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

Currency.propTypes = {
  updateCurrency: PropTypes.func.isRequired,
};

export default Currency;
