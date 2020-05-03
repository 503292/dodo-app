import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Currency.module.css';

class Currency extends Component {
  state = {
    currency: [],
    currencyMark: '',
    contries: [],
    metals: [],
  };

  async componentDidMount() {
    const localCurrency = JSON.parse(localStorage.getItem('currency'));
    const localCurrencyMark = JSON.parse(localStorage.getItem('currencyMark'));
    const localContries = JSON.parse(localStorage.getItem('contries'));
    const LocalMetals = JSON.parse(localStorage.getItem('metals'));

    await this.setState({
      currency: localCurrency,
      currencyMark: localCurrencyMark,
      contries: localContries,
      metals: LocalMetals,
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
    const { currency, currencyMark, contries, metals } = this.state;
    // console.log(currency, 'currency');
    // console.log(currencyMark, 'currencyMark');
    // console.log(contries, 'contries');
    // console.log(metals, 'metals');
    return (
      <>
        {currency && contries && metals && (
          <div className={css.currencyContainer}>
            <div className={css.wrapPB}>
              <div className={css.cash}>
                <div className={css.headCurrency}>
                  <p>Валюта</p>
                  <p>Продати</p>
                  <p>Купити</p>
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
            </div>

            {contries && metals && (
              <div className={css.card}>
                {metals.map(el => (
                  <div key={el.name} className={css.oneMetal}>
                    <div className={css.metalWrap}>
                      <p className={`${css.en} ${css[`${el.color}`]}`}>
                        {el.en}
                      </p>
                      <p className={css.uk}>{el.uk}</p>
                    </div>
                    <div className={css.wrapPriceM}>
                      <p className={css.priceM}>{el.rate}</p>
                      <p>грн/грам</p>
                    </div>
                  </div>
                ))}

                {contries.map(el => (
                  <div key={el.name} className={css.oneCountry}>
                    <div className={css.wrapFlag}>
                      <img src={el.url} alt="country" />
                      <p className={css.country}>{el.country}</p>
                    </div>
                    <div className={css.wrapRate}>
                      <p className={css.val}>{el.currency}</p>
                      <p className={css.price}>
                        {el.rate} <span>грн</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
