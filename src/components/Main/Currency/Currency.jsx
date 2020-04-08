import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Currency.module.css';

class Currency extends Component {
  state = { currency: [], currencyMark: this.props.currencyMark };

  componentDidMount() {
    const getLocalCurrency = localStorage.getItem('currency');

    const parseCurrency = JSON.parse(getLocalCurrency);

    this.setState({ currency: parseCurrency });
  }

  componentDidUpdate() {
    const { currencyMark } = this.state;
    document.getElementById(currencyMark).setAttribute('checked', 'checked');
  }

  checkMarkCurrency = e => {
    const { updateCurrency } = this.props;
    const currencyMark = e.currentTarget.nextSibling.firstChild.textContent;
    // localStorage.setItem('currencyMark', JSON.stringify(currencyMark));
    // console.log(currencyMark, 'object');
    updateCurrency(currencyMark);
  };

  render() {
    const { currency } = this.state;

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
                        className={css.checkInput}
                        name="checkMarkCurrency"
                        type="radio"
                        id={el.ccy}
                        onClick={this.checkMarkCurrency}
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
  currencyMark: PropTypes.string.isRequired,
};

export default Currency;
