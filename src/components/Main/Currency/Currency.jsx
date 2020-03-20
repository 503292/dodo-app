import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Currency.module.css';

class Currency extends Component {
  state = { currency: [] };

  componentDidMount() {
    const getLocalCurrency = localStorage.getItem('currency');

    const parseCurrency = JSON.parse(getLocalCurrency);

    this.setState({ currency: parseCurrency });
  }

  checkMarkCurrency = e => {
    const { updateCurrency } = this.props;

    const currencyMark = e.currentTarget.firstChild.textContent;

    updateCurrency(currencyMark);
  };

  render() {
    const { currency } = this.state;

    return (
      <>
        <div className={css.currencyContainer}>
          {currency.length > 0 && (
            <table className={css.currencyTable}>
              <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Купівля</th>
                  <th>Продаж</th>
                </tr>
              </thead>
              <tbody>
                {currency.map(elem => (
                  <tr onClick={this.checkMarkCurrency} key={elem.ccy}>
                    <td>{elem.ccy}</td>
                    <td>{elem.buy}</td>
                    <td>{elem.sale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
}

Currency.propTypes = {
  updateCurrency: PropTypes.func.isRequired,
};

export default Currency;
